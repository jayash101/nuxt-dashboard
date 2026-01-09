export const useUsers = () => {
  const { data, pending, error } = useFetch("/api/users");

  return {
    users: data,
    pending,
    error,
  };
};
