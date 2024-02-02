import { selector } from "recoil";
import { weatherState } from "./weather";

const changeWeatherState = selector({
  key: "changeWeatherState",
  get: ({ get }) => {
    const weather = get(weatherState);
    return weather;
  },
  set: ({ set }, newValue) => {
    set(weatherState, newValue);
  },
});

export { changeWeatherState };
