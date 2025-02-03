const BASE_URL = "https://exercisedb.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
  },
};

export const fetchExercises = async () => {
  const response = await fetch(`${BASE_URL}/exercises`, options);
  const data = await response.json();
  return data;
};

export const fetchExerciseById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/exercise/${id}`, options);
  const data = await response.json();
  return data;
};

export const fetchExerciseCategories = async (name: string) => {
  const response = await fetch(`${BASE_URL}/name/${name}`, options);
  const data = await response.json();
  return data;
};
