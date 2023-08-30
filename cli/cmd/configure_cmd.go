package cmd

import (
	"context"
	"net/url"

	"github.com/kubeshop/tracetest/cli/config"
	"github.com/spf13/cobra"
)

var configParams = &configureParameters{}

var (
	configurator = config.NewConfigurator(resources)
)

var configureCmd = &cobra.Command{
	GroupID: cmdGroupConfig.ID,
	Use:     "configure",
	Short:   "Configure your tracetest CLI",
	Long:    "Configure your tracetest CLI",
	PreRun:  setupLogger,
	Run: WithResultHandler(WithParamsHandler(configParams)(func(cmd *cobra.Command, _ []string) (string, error) {
		ctx := context.Background()
		flags := config.ConfigFlags{}
		config, err := config.LoadConfig("")
		if err != nil {
			return "", err
		}

		if flagProvided(cmd, "endpoint") {
			flags.Endpoint = configParams.Endpoint
		}

		err = configurator.Start(ctx, config, flags)
		return "", err
	})),
	PostRun: teardownCommand,
}

func flagProvided(cmd *cobra.Command, name string) bool {
	return cmd.Flags().Lookup(name).Changed
}

func init() {
	configureCmd.PersistentFlags().StringVarP(&configParams.Endpoint, "endpoint", "e", "", "set the value for the endpoint, so the CLI won't ask for this value")
	rootCmd.AddCommand(configureCmd)
}

type configureParameters struct {
	Endpoint string
}

func (p configureParameters) Validate(cmd *cobra.Command, args []string) []error {
	var errors []error

	if cmd.Flags().Lookup("endpoint").Changed {
		if p.Endpoint == "" {
			errors = append(errors, paramError{
				Parameter: "endpoint",
				Message:   "endpoint cannot be empty",
			})
		} else {
			_, err := url.Parse(p.Endpoint)
			if err != nil {
				errors = append(errors, paramError{
					Parameter: "endpoint",
					Message:   "endpoint is not a valid URL",
				})
			}
		}
	}

	return errors
}
