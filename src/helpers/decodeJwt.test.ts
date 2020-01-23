import {decodeJwt} from "./decodeJwt";

describe("decodeJwt", () => {
  it("decodes jwt", () => {
    const token = "eyJjdHkiOiJKV1QiLCJraWQiOiJkZWZhdWx0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJDRiIsImV4cCI6MTU3OTc1OTc2MywiaWF0IjoxNTc5NzU4ODYzLCJjdXN0b21lcklkIjoxLCJyb2xlIjoiYWRtaW4iLCJzY29wZXMiOlsidXNlciIsImFkbWluIl0sImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiQWRtaW4iLCJjdXJyZW5jeSI6IkVVUiIsImxhbmd1YWdlQ29kZSI6ImVuLUdCIiwibWVhc3VyZW1lbnRzIjoibW1cL2NtIiwiY291bnRyeSI6IkRFIn0.v59sJ6yjIhS3o8yi2drXYFzbcFzVNncMU60cHvWv7qI";
    const decoded = decodeJwt(token);
    expect(decoded).toEqual({
      country: "DE",
      currency: "EUR",
      customerId: 1,
      email: "admin@example.com",
      exp: 1579759763,
      firstName: "Admin",
      iat: 1579758863,
      iss: "CF",
      languageCode: "en-GB",
      lastName: "Admin",
      measurements: "mm/cm",
      role: "admin",
      scopes: [
        "user",
        "admin"
      ]
    });
  });
});
