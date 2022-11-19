import { demoMiddleware } from "./demo";
import { Request, Response } from "express";

describe("Test demo middleware", () => {
  it("should add <demo> property to request and response object", () => {
    const mockRequest = {} as Request;
    const mockResponse = {} as Response;

    demoMiddleware(mockRequest, mockResponse, () => {});

    expect(mockRequest.demo).toBe("DEMO");
    expect(mockResponse.demo).toBe("DEMO");
  });

  it("Should call next()", () => {
    const mockRequest = {} as Request;
    const mockResponse = {} as Response;

    const mockNext = jest.fn();

    demoMiddleware(mockRequest, mockResponse, mockNext);
    expect(mockNext).toBeCalledWith();
  });
});
