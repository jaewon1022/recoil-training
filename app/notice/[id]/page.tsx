"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { changeSelectedNoticeState } from "@/store/notice-selector";

export default function NoticeInfo() {
  const notice = useRecoilValue(changeSelectedNoticeState);
  const setNotice = useSetRecoilState(changeSelectedNoticeState);

  console.log("notice", notice);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1>Notice Info</h1>
      <div>Notice Info</div>
    </main>
  );
}
