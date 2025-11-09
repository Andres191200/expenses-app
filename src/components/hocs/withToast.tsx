import TFetchResponse from "@/app/models/fetch_response";
import toast from "react-hot-toast";

export function withToast<T extends unknown[]>(
  fn: (...args: T) => Promise<TFetchResponse>,
  messages?: { success?: string, error?: string },
  actions?: {onSuccess: () => void}
) {
  return async (...args: T) => {
    const res = await fn(...args);

    if (res.error) {
      toast.error(res.error);
    } else if (res.success) {
        console.log('success!!');
        actions?.onSuccess();
      toast.success(messages?.success ?? 'Success!');
    }

    return res;
  };
}