"use client";

import React, { useState } from "react";
import { Animal } from "@/lib/types";
import { shuffleCards } from "@/lib/utils";

function Board({
  animalCards,
  deckSize,
}: {
  animalCards: Animal[];
  deckSize: number;
}) {
  const [cards] = useState(() => shuffleCards(animalCards.concat(animalCards)));

  return (
    <div
      className={`m-4 grid gap-4 rounded-md border border-gray-200 p-4`}
      style={{
        gridTemplateColumns: `repeat(${deckSize / 2}, minmax(0, 1fr))`,
      }}
    >
      {Object.values(cards).map((card: Animal, index: number) => (
        <div key={index} className="h-20 w-20">
          A
        </div>
      ))}
    </div>
  );
}

export default Board;
