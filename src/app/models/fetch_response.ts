import { ZodIssue } from "zod/v3";

type TFetchResponse = {
    success: boolean,
    error: Record<string, string> & ZodIssue;
}

export default TFetchResponse;