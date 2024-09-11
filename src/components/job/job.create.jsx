"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const JobCreate = () => {
  const router = useRouter();

  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");

  async function handleCreateJob() {
    await fetch("https://v1.appbackend.io/v1/rows/NXObHC97c8dl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ position, company, content }]),
    });
    router.refresh();
  }

  return (
    <div className="max-w-sm space-y-5">
      <input
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Posisi"
      ></input>
      <input
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Perusahaan"
      ></input>
      <textarea onChange={(e) => setContent(e.target.value)}></textarea>
      <button onClick={handleCreateJob} className="bg-sky-500 text-white">
        Post
      </button>
    </div>
  );
};
