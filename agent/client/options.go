package client

import (
	"time"

	"go.uber.org/zap"
)

type Option func(*Client)

func WithAPIKey(apiKey string) Option {
	return func(c *Client) {
		c.config.APIKey = apiKey
	}
}

func WithAgentName(name string) Option {
	return func(c *Client) {
		c.config.AgentName = name
	}
}

func WithPingPeriod(period time.Duration) Option {
	return func(c *Client) {
		c.config.PingPeriod = period
	}
}

func WithLogger(logger *zap.Logger) Option {
	return func(c *Client) {
		c.logger = logger
	}
}
