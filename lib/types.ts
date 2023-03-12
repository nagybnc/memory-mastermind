export enum GameLevel {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

export enum AnimalType {
  Dog = "dog",
  Cat = "cat",
}
export interface Animal {
  id: string;
  url: string;
  width: number;
  height: number;
}
