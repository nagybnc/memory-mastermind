import { Animal } from "@/lib/types";
import { shuffleCards } from "@/lib/utils";
import type { NextApiRequest, NextApiResponse } from "next";
import Images from "../../assets/cat_images.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Animal[]>
) {
  const {
    query: { limit },
  } = req;

  const shuffled = shuffleCards(Images);

  const randomPicks = Number(limit)
    ? shuffled.slice(0, Number(limit))
    : shuffled;

  res.status(200).json(randomPicks);
}
