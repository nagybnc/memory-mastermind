"use client";
import { CardInterface } from "@/lib/types";
import Image from "next/image";
import React from "react";

const Card = ({
  onClick,
  card,
  index,
  isInactive,
  isFlipped,
}: CardInterface) => {
  const handleClick = () => {
    !isFlipped && onClick(index);
  };

  return (
    <div
      className={`relative h-12 w-12 shadow-md sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-44 xl:w-44 ${
        isFlipped ? "flipped" : ""
      } ${isInactive ? "invisible cursor-not-allowed" : "cursor-pointer"}`}
      onClick={handleClick}
    >
      <div className="card card-front"></div>
      <div className="card card-back">
        <Image
          alt={card.id}
          src={card.url}
          fill
          sizes="100%"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
