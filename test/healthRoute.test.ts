import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app";

describe("health route", () => {
  it("returns service health payload", async () => {
    const app = createApp();

    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
    expect(typeof response.body.timestamp).toBe("string");
  });

  it("returns 404 for unknown route", async () => {
    const app = createApp();

    const response = await request(app).get("/missing");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: {
        code: "NOT_FOUND",
        message: "Route /missing was not found",
      },
    });
  });
});
