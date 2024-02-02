import { atom } from "recoil";

export type Task = {
  id: string;
  text: string;
  isComplete: boolean;
};

const taskState = atom({
  key: "taskState",
  default: [
    {
      id: "12343214",
      text: "Learn Recoil",
      isComplete: false,
    },
    {
      id: "54321534",
      text: "Learn Next.js",
      isComplete: false,
    },
    {
      id: "51351532",
      text: "Build something fun!",
      isComplete: true,
    },
  ],
});

export { taskState };
