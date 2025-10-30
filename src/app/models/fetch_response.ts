import { ZodIssue } from "zod/v3";

type TFetchResponse = {
    success: boolean,
    error: string | null;
}

export default TFetchResponse;