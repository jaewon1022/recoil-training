import { selector } from "recoil";
import { noticeState, selectedNoticeState } from "./notice";

const changeNoticeState = selector({
  key: "changeNoticeState",
  get: ({ get }) => {
    const notices = get(noticeState);

    return notices;
  },
  set: ({ set }, newValue) => {
    set(noticeState, newValue);
  },
});

const changeSelectedNoticeState = selector({
  key: "changeSelectedNoticeState",
  get: ({ get }) => {
    // const id = location.pathname.split("/")[2];

    const notice = get(selectedNoticeState);

    return notice;
  },
  set: ({ set }, newValue) => {
    set(selectedNoticeState, newValue);
  },
});

export { changeNoticeState, changeSelectedNoticeState };
