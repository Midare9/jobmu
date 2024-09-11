"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const JobCard = ({ id, position, company, content }) => {
  const router = useRouter();

  async function handleDeleteJob() {
    await fetch("https://v1.appbackend.io/v1/rows/NXObHC97c8dl", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    router.refresh();
  }

  return (
    <div className="card">
      <h3 className="text-xl font-medium">{position}</h3>
      <p>{company}</p>
      <p className="text-sm">{content}</p>
      <div className="flex items-center justify-between">
        <button onClick={handleDeleteJob} className="btn-delete">
          Delete
        </button>
        <button className="bg-sky-500 text-white">Apply now</button>
      </div>
    </div>
  );
};
