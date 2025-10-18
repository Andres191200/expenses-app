function serializeDataFromDb<T extends Record<string, unknown>>(
  data: T | T[]
): T[] {
  if (Array.isArray(data)) {
    return data.map((item) => serializeSingleData(item));
  }
  return [] as T[];
}

function serializeSingleData<T extends Record<string, unknown>>(data: T): T {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (value instanceof Date) return [key, value.toISOString()];
      return [key, value];
    })
  ) as T;
}

export { serializeDataFromDb, serializeSingleData };
