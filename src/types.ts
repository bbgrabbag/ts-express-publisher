import * as core from "express-serve-static-core";

declare global {
  namespace Express {
    export interface Request<
      P = core.ParamsDictionary,
      ResBody = any,
      ReqBody = any,
      ReqQuery = core.Query,
      Locals extends Record<string, any> = Record<string, any>
    > {
      demo?: string;
    }

    export interface Response<
      ResBody = any,
      Locals extends Record<string, any> = Record<string, any>
    > {
      demo?: string;
    }
  }
}
