type TFetchResponse = {
  success: boolean;
  error: string | null;
};

export function withToast<TArgs extends any[]>(
  fn: (...args: TArgs) => Promise<TFetchResponse>,
  messages?: { success?: string }
) {
  return async (...args: TArgs) => {
    const res = await fn(...args);

    if (res.error) {
      showToast(res.error, "error");
    } else if (res.success && messages?.success) {
      showToast(messages.success, "success");
    }

    return res;
  };
}