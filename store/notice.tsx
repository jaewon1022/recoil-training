import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export type Notice = {
  id: string;
  title: string;
  body: string;
  createdAt: Date | string;
};

const { persistAtom } = recoilPersist();

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : null;

const noticeState = atom({
  key: "noticeState",
  default: [
    {
      id: "11111111",
      title: "test 1",
      body: "notice test1",
      createdAt: "2024-02-01 14:44:57",
    },
    {
      id: "22222222",
      title: "test 2",
      body: "notice test2",
      createdAt: "2024-02-02 14:44:57",
    },
    {
      id: "33333333",
      title: "test 3",
      body: "notice test3",
      createdAt: "2024-02-03 10:44:57",
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

const selectedNoticeState = atom({
  key: "selectedNoticeState",
  default: null as Notice | null,
});

export { noticeState, selectedNoticeState };
