import { atom } from "recoil";

export type Notice = {
  id: string;
  title: string;
  body: string;
  createdAt: Date | string;
};

const noticeState = atom({
  key: "noticeState",
  default: [
    {
      id: "11111111",
      title: "test 1",
      body: "notice test1",
      createdAt: new Date(),
    },
    {
      id: "22222222",
      title: "test 2",
      body: "notice test2",
      createdAt: new Date(),
    },
    {
      id: "33333333",
      title: "test 3",
      body: "notice test3",
      createdAt: new Date(),
    },
  ],
});

export { noticeState };
