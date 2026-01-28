const server = Bun.serve({
  port: Number(process.env.PORT),
  routes: {
    "/api/v1/auth/signup": {
      POST: (req) =>
        new Response("User signup with email and password, returns auth token"),
    },
    "/api/v1/auth/login": {
      POST: (req) =>
        new Response("User login with email and password, returns auth token"),
    },
    "/api/v1/auth/logout": {
      POST: (req) => new Response("User logout, invalidates auth token"),
    },
    "/api/v1/:userId/channels": {
      GET: (req) =>
        new Response(`List of channels for user ${req.params.userId}`),
      POST: (req) =>
        new Response(
          `New channel created for user ${req.params.userId}, with details specified in the request body`,
        ),
    },
    "/api/v1/channels/:channelId": {
      PATCH: (req) =>
        new Response(
          `Channel ${req.params.channelId} updated for user derived from auth token`,
        ),
      DELETE: (req) =>
        new Response(
          `Channel ${req.params.channelId} deleted for user derived from auth token`,
        ),
    },
    "/api/v1/messages": {
      GET: (req) =>
        new Response(
          `List of messages for the user derived from auth token with optional pagination and channel filtering`,
        ),
      POST: (req) =>
        new Response(
          `New message created for user derived from auth token, with the channel specified in the request body`,
        ),
    },
    "/api/v1/messages/:messageId": {
      PATCH: (req) =>
        new Response(
          `Message ${req.params.messageId} updated for user derived from auth token`,
        ),
      DELETE: (req) =>
        new Response(
          `Message ${req.params.messageId} deleted for user derived from auth token`,
        ),
    },
    "/api/v1/status": new Response("ok"),
  },
  fetch: (req) => {
    return new Response("Not Found", { status: 404 });
  },
});
