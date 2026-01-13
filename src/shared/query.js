import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { dataApi } from "./api";

export const useData = () =>
  useQuery({
    queryKey: ["data"],
    queryFn: dataApi.getData,
  });

export const useAddRow = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: dataApi.createRow,
    onSuccess: () => qc.invalidateQueries(["data"]),
  });
};

export const useUpdateRow = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: dataApi.updateRow,
    onSuccess: () => qc.invalidateQueries(["data"]),
  });
};

export const useDeleteRow = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: dataApi.deleteRow,
    onSuccess: () => qc.invalidateQueries(["data"]),
  });
};
