import { DefaultValue, selector } from "recoil";
import { taskState } from "./task";
import { weatherState } from "./weather";

const changeTaskState = selector({
  key: "changeTaskState",
  get: ({ get }) => {
    const tasks = get(taskState);

    return tasks;
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      console.log("reset!!!");
      reset(taskState);

      set(weatherState, {
        type: "sunny",
        temp: 30,
      });
    }

    set(taskState, newValue);
  },
});

export { changeTaskState };
