const asyncWrapper = async <TData, TError extends Error>(promise: Promise<TData>) => {
  try {
    const res = await promise;
    return [res, null] as const;
  } catch (err: any) {
    return [null, err as TError] as const;
  }
};

// const asyncWrapper = async <TData, TError extends Error>(
//   promise: Promise<TData>
// ): Promise<[TData, null] | [null, TError]> => {
//   try {
//     const res = await promise;
//     return [res, null];
//   } catch (err: any) {
//     return [null, err];
//   }
// };

export default asyncWrapper;
