"use client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Notice } from "@/store/notice";
import {
  changeNoticeState,
  changeSelectedNoticeState,
} from "@/store/notice-selector";
import { format } from "date-fns";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Notice() {
  const router = useRouter();

  const noticeList = useRecoilValue(changeNoticeState);

  const selectedNotice = useRecoilValue(changeSelectedNoticeState);
  const setSelectedNotice = useSetRecoilState(changeSelectedNoticeState);

  const onPageMove = (notice: Notice) => {
    setSelectedNotice(notice);
  };

  //   useEffect(() => {
  //     if (selectedNotice !== null) {
  //       router.push(`/notice/${selectedNotice.id}`);
  //     }
  //   }, [onPageMove]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1>Notice !!</h1>

      <div className="flex flex-row gap-5">
        <div>제목</div>
        <div>생성일</div>
      </div>

      {noticeList.map((notice: Notice) => (
        <button
          key={notice.id}
          className="flex flex-row gap-5"
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            padding: "5px",
          }}
          onClick={() => {
            onPageMove(notice);
          }}
        >
          <div className="title">{notice.title}</div>
          <div className="createdAt">
            {format(notice.createdAt, "yyyy-MM-dd HH:mm:ss")}
          </div>
        </button>
      ))}
    </main>
  );
}
