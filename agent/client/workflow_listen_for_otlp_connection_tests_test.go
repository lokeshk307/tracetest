package client_test

import (
	"context"
	"testing"
	"time"

	"github.com/kubeshop/tracetest/agent/client"
	"github.com/kubeshop/tracetest/agent/client/mocks"
	"github.com/kubeshop/tracetest/agent/proto"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestOtlpConnectionTestWorkflow(t *testing.T) {
	server := mocks.NewGrpcServer()
	defer server.Stop()

	client, err := client.Connect(context.Background(), server.Addr())
	require.NoError(t, err)

	var receivedConnectionTestRequest *proto.OTLPConnectionTestRequest
	client.OnOTLPConnectionTest(func(ctx context.Context, otr *proto.OTLPConnectionTestRequest) error {
		receivedConnectionTestRequest = otr
		return nil
	})

	err = client.Start(context.Background())
	require.NoError(t, err)

	connectionTestRequest := &proto.OTLPConnectionTestRequest{
		RequestID: "request-id",
	}

	server.SendOTLPConnectionTestRequest(connectionTestRequest)

	// ensures there's enough time for networking between server and client
	time.Sleep(1 * time.Second)

	assert.NotNil(t, receivedConnectionTestRequest)
	assert.Equal(t, connectionTestRequest.RequestID, "request-id")
}
