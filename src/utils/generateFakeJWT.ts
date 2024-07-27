export const generateFakeJWT = (payload: object): string => {
  // Simple base64 encoding (do not use in production)
  const header = JSON.stringify({ alg: "HS256", typ: "JWT" });
  const encodedHeader = btoa(header);
  const encodedPayload = btoa(JSON.stringify({ ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 }));
  return `${encodedHeader}.${encodedPayload}.signature`;
};
