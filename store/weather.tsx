import { atom } from "recoil";

export type Weather = {
  temp: number;
  type: "sunny" | "rainy" | "cloudy" | "snowy";
};

const weatherState = atom({
  key: "weatherState",
  default: {
    temp: 25,
    type: "sunny",
  },
});

export { weatherState };
