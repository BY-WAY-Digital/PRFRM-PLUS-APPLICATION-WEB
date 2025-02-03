"use client";
import { useExercises } from "../query/rapid-exercise-query";

export default function ExerciseCard() {
  const { data } = useExercises();

  console.log(data);
  return <div>ExerciseCard</div>;
}
