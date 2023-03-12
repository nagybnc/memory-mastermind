"use client";

import React, { useEffect, useRef, useState } from "react";
import { Animal } from "@/lib/types";
import { shuffleCards } from "@/lib/utils";
import Card from "./Card";

function Board({
  animalCards,
  deckSize,
}: {
  animalCards: Animal[];
  deckSize: number;
}) {
  // TODO use useReducer or Redux
  const [cards] = useState(() => shuffleCards(animalCards.concat(animalCards)));
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<Record<string, boolean>>({});
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();

  const evaluate = () => {
    const [first, second] = openCards;
    if (cards[first].id === cards[second].id) {
      setClearedCards((prev) => ({ ...prev, [cards[first].id]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 300);
  };

  const handleCardClick = (index: number) => {
    if (openCards.length === 1) {
      setOpenCards((prev: number[]) => [...prev, index]);
      setMoves((moves) => moves + 1);
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  const checkIsFlipped = (index: number) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card: Animal) => {
    return Boolean(clearedCards[card.id]);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === animalCards.length) {
      setWon(true);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      setTimeout(evaluate, 300);
    }
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  return (
    <>
      {won ? (
        <p className="my-4 text-center text-sm lg:text-lg">
          You won with <strong>{moves}</strong> moves! 🏆
        </p>
      ) : (
        <div
          className={`m-4 grid gap-4 rounded-md border border-gray-200 p-4`}
          style={{
            gridTemplateColumns: `repeat(${deckSize / 2}, minmax(0, 1fr))`,
          }}
        >
          {Object.values(cards).map((card: Animal, index: number) => (
            <Card
              key={index}
              card={card}
              index={index}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Board;
