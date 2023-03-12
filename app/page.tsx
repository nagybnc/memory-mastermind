"use client";

import { AnimalType, GameLevel } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [gameLevel, setGameLevel] = useState(GameLevel.Medium);
  const [animal, setAnimal] = useState(AnimalType.Dog);

  // TODO implement a Form

  return (
    <section className="flex h-full flex-col items-center justify-around">
      <div className="flex flex-col items-center text-lg sm:text-2xl">
        <h3 className="mb-5 text-xl font-medium text-gray-900">Level?</h3>
        <ul className="mb-5 grid w-full gap-6 md:grid-cols-3">
          {Object.entries(GameLevel).map(([key, value]) => {
            return (
              <li
                key={key}
                onClick={() => {
                  setGameLevel(value);
                }}
              >
                <input
                  type="radio"
                  name="level"
                  value="level-small"
                  className="peer hidden"
                  checked={gameLevel === value}
                  readOnly
                  required
                />
                <label
                  htmlFor="level-small"
                  className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">{key}</div>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="ml-3 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </label>
              </li>
            );
          })}
        </ul>
        <h3 className="mb-5 text-xl font-medium text-gray-900">
          Are you a 🐕 or a 🐈 person?
        </h3>
        <ul className="mb-5 grid w-full gap-6 md:grid-cols-2">
          {Object.entries(AnimalType).map(([key, value]) => {
            return (
              <li
                key={key}
                onClick={() => {
                  setAnimal(value);
                }}
              >
                <input
                  type="radio"
                  name="animal"
                  value="animal-small"
                  className="peer hidden"
                  checked={animal === value}
                  readOnly
                  required
                />
                <label
                  htmlFor="animal-small"
                  className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">{key}</div>
                  </div>
                  <svg
                    aria-hidden="true"
                    className="ml-3 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </label>
              </li>
            );
          })}
        </ul>
        <Link
          href={`/game/${gameLevel}/${animal}`}
          className="cursor-pointer rounded-md border border-gray-200 bg-white py-3 px-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
        >
          Start
        </Link>
      </div>
    </section>
  );
}
