"use client";
import Link from "next/link";
import { Calendar, LucideInfo, MapPin } from "lucide-react";

export const Info = () => {
  return (
    <div className="fixed bottom-24 right-8 z-50 flex justify-center items-center cursor-pointer ">
      <div className="flex flex-col gap-16">
        <div className="border p-4 rounded-full bg-stone-300 hover:bg-stone-400">
          <Calendar />
        </div>
        <div className="border p-4 rounded-full bg-stone-300 hover:bg-stone-400">
          <MapPin />
        </div>
        <Link
          href="/info"
          className="border p-4 rounded-full bg-stone-300 hover:bg-stone-400"
        >
          <LucideInfo />
        </Link>
      </div>
    </div>
  );
};
