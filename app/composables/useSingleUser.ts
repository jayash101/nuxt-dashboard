export const useSingleUser = (id: string) => {
  const { data, pending, error } = useFetch(() => `/api/users/${id}`);

  return {
    user: data,
    pending,
    error,
  };
};
