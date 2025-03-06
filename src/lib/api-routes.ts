export const apiRoot = process.env.API_PATH || "http://localhost:3001/api";

export const apiRoutes = {
  polls: `${apiRoot}/polls`,
  poll: (id: string) => `${apiRoot}/polls/${id}`,
  vote: (id: string, optionId: string) =>
    `${apiRoot}/polls/${id}/vote/${optionId}`,
} as const;
