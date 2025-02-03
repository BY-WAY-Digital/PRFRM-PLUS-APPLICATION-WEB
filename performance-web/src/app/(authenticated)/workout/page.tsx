import ExerciseCard from "@/features/workout/components/exercise-card";
import Link from "next/link";

export default function Workouts() {
  return (
    <main className="min-h-screen relative">
      <ExerciseCard />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex flex-col justify-center items-start w-[90%] mx-auto space-y-4 mt-8">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl text-center w-full text-white md:text-3xl md:text-start">
              Featured Workouts
            </h2>
            <Link href="/">See all</Link>
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 w-full">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
        </div>
      </div>
    </main>
  );
}
