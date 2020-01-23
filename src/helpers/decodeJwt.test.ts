import {decodeJwt} from "./decodeJwt";

describe("decodeJwt", () => {
  it("decodes jwt", () => {
    const token = "eyJjdHkiOiJKV1QiLCJraWQiOiJkZWZhdWx0IiwiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJDRiIsImV4cCI6MTU3OTc1OTc2MywiaWF0IjoxNTc5NzU4ODYzLCJjdXN0b21lcklkIjoxLCJyb2xlIjoiYWRtaW4iLCJzY29wZXMiOlsidXNlciIsImFkbWluIl0sImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJBZG1pbiIsImxhc3ROYW1lIjoiQWRtaW4iLCJjdXJyZW5jeSI6IkVVUiIsImxhbmd1YWdlQ29kZSI6ImVuLUdCIiwibWVhc3VyZW1lbnRzIjoibW1cL2NtIiwiY291bnRyeSI6IkRFIn0.v59sJ6yjIhS3o8yi2drXYFzbcFzVNncMU60cHvWv7qI";
    const decoded = decodeJwt(token);
    expect(decoded).toEqual({
      iss: "CF",
      exp: 1579759763,
      iat: 1579758863,
      customerId: 1,
      role: "admin",
      scopes: [
        "user",
        "admin"
      ],
      email: "admin@example.com",
      firstName: "Admin",
      lastName: "Admin",
      currency: "EUR",
      languageCode: "en-GB",
      measurements: "mm/cm",
      country: "DE"
    });
  });
});
