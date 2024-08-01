import React from "react";

export const AddToCalendarTest = () => {
  const event = {
    title: "Karthik's Marriage",
    start: "20240905T180000Z", // YYYYMMDDTHHmmssZ format
    end: "20240906T090000Z", // YYYYMMDDTHHmmssZ format
    details: "Karthik weds sharmi",
    location: "V.K Palace, Thandalam, Periyalapalayam, Thiruvallur-601102",
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
    event.title
  )}&dates=${event.start}/${event.end}&details=${encodeURIComponent(
    event.details
  )}&location=${encodeURIComponent(event.location)}`;

  const generateICalFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.start}
DTEND:${event.end}
DESCRIPTION:${event.details}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "event.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={() => window.open(googleCalendarUrl, "_blank")}>
        Add to Google Calendar
      </button>
      <button onClick={generateICalFile}>Add to iCal</button>
    </div>
  );
};
