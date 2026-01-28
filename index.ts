const server = Bun.serve({
  port: Number(process.env.PORT),
  routes: {
    "/api/v1/:userId/channels": {
      GET: (req) =>
        new Response(`List of channels for user ${req.params.userId}`),
      POST: (req) =>
        new Response(
          `New channel created for user ${req.params.userId}, with details specified in the request body`,
        ),
    },
    "/api/v1/:userId/channels/:channelId": {
      PATCH: (req) =>
        new Response(
          `Channel ${req.params.channelId} updated for user ${req.params.userId}`,
        ),
      DELETE: (req) =>
        new Response(
          `Channel ${req.params.channelId} deleted for user ${req.params.userId}`,
        ),
    },
    "/api/v1/:userId/messages": {
      GET: (req) =>
        new Response(
          `List of messages for user ${req.params.userId}, with optional pagination and channel filtering`,
        ),
      POST: (req) =>
        new Response(
          `New message created for user ${req.params.userId}, with the channel specified in the request body`,
        ),
    },
    "/api/v1/:userId/messages/:messageId": {
      PATCH: (req) =>
        new Response(
          `Message ${req.params.messageId} updated for user ${req.params.userId}`,
        ),
      DELETE: (req) =>
        new Response(
          `Message ${req.params.messageId} deleted for user ${req.params.userId}`,
        ),
    },
    "/api/v1/status": new Response("ok"),
  },
  fetch: (req) => {
    return new Response("Not Found", { status: 404 });
  },
});
