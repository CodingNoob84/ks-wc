"use client";
import Link from "next/link";
import { Calendar, LucideInfo, MapPin } from "lucide-react";

export const Info = () => {
  const event = {
    title: "Karthik's Marriage",
    start: "20240905T123000Z", // YYYYMMDDTHHmmssZ format
    end: "20240906T033000Z", // YYYYMMDDTHHmmssZ format
    details:
      "You are cordially invited to the wedding of Karthik and Sharmi. The reception will be held on September 5th, followed by the marriage ceremony on September 6th.",
    location: "V.K Palace, Thandalam, Periyalapalayam, Thiruvallur-601102",
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
    event.title
  )}&dates=${event.start}/${event.end}&details=${encodeURIComponent(
    event.details
  )}&location=${encodeURIComponent(event.location)}`;
  return (
    <div className="fixed bottom-24 right-8 z-50 flex justify-center items-center cursor-pointer ">
      <div className="flex flex-col gap-6">
        <div
          className="border p-4 rounded-full bg-stone-300 hover:bg-stone-400"
          onClick={() => window.open(googleCalendarUrl, "_blank")}
        >
          <Calendar />
        </div>
        <Link
          href="https://www.google.com/maps/dir/12.9695744,80.2422784/vk+palace/@13.3104764,79.9950088,18z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a528340c50846e7:0x8db126915eee7d95!2m2!1d79.9957294!2d13.3105528?entry=ttu"
          target="_blank"
          className="border p-4 rounded-full bg-stone-300 hover:bg-stone-400"
          prefetch={false}
        >
          {" "}
          <MapPin />
        </Link>

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
