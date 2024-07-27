export const generateFakeJWT = (): string => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      sub: "1234567890",
      username: "user",
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiry
    })
  );
  const signature = "fzytFfmLgcLyrnj1pH4JV0DVuD2bgueMYLD5XLSV8OU";
  return `${header}.${payload}.${signature}`;
};

export const isTokenExpired = (token: string): boolean => {
  const payloadBase64 = token.split(".")[1];
  const decodedPayload = JSON.parse(atob(payloadBase64));
  return decodedPayload.exp * 1000 < Date.now();
};
