"use client";
import useFetch from "@/hooks/useFetch";
import { AnimalType, Animal, GameLevel } from "@/lib/types";

export default function Game({ params }: { params: { slug: string[] } }) {
  const gameLevel = params.slug?.at(0) || GameLevel.Easy;
  const deckSize = {
    [GameLevel.Easy]: 6,
    [GameLevel.Medium]: 8,
    [GameLevel.Hard]: 12,
  }[gameLevel];
  const animal =
    params.slug?.at(1) === AnimalType.Dog ? "getDogImages" : "getCatImages";

  const {
    data: animalCards,
    error,
    isLoading,
  } = useFetch<Animal[]>(
    `http://localhost:3000/api/${animal}?limit=${deckSize}`
  );

  console.log(animalCards);

  if (isLoading) {
    return <div className="animate-pulse text-center text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl">Error: {error.message}</div>;
  }

  return (
    <section className="flex h-full flex-col items-center justify-center"></section>
  );
}
