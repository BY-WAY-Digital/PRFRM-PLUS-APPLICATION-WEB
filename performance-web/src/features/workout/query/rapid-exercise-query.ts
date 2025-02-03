import { useQuery } from "@tanstack/react-query";
import { fetchExercises } from "../actions/rapid-exercise-api";

export const useExercises = () => {
  return useQuery({
    queryKey: ["exercises"],
    queryFn: async () => {
      const response = await fetchExercises();
      return response;
    },
  });
};
