export type Hours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

export const defaultHours: Hours = {
  monday: "Closed",
  tuesday: "Closed",
  wednesday: "Closed",
  thursday: "Closed",
  friday: "Closed",
  saturday: "Closed",
  sunday: "Closed",
};

export function parseHoursString(hoursString: string): Hours {
  // Simple parser for "Mo-Su 09:00-02:00" or comma separated
  // This is a simplified version, robust parsing would handle more cases
  const hours = { ...defaultHours };
  const parts = hoursString
    .replace(/"/g, "")
    .split(",")
    .map((p) => p.trim());

  parts.forEach((part) => {
    // Example: "Mo-Su 09:00-02:00"
    const [daysRange, timeRange] = part.split(" ");
    if (!daysRange || !timeRange) return;

    const days = expandDays(daysRange);
    days.forEach((day) => {
      hours[day as keyof Hours] = timeRange;
    });
  });

  return hours;
}

function expandDays(range: string): string[] {
  const dayMap: Record<string, string> = {
    Mo: "monday",
    Tu: "tuesday",
    We: "wednesday",
    Th: "thursday",
    Fr: "friday",
    Sa: "saturday",
    Su: "sunday",
  };

  const dayKeys = Object.keys(dayMap);
  const [start, end] = range.split("-");

  if (!end) return [dayMap[start] || "monday"]; // Single day or fallback

  const startIndex = dayKeys.indexOf(start);
  const endIndex = dayKeys.indexOf(end);

  if (startIndex === -1 || endIndex === -1) return [];

  const days: string[] = [];
  for (let i = startIndex; i <= endIndex; i++) {
    days.push(dayMap[dayKeys[i]]);
  }
  return days;
}

export function isLocationOpen(hours: Hours | string, slug: string): boolean {
  // Hardcoded overrides
  if (slug.toLowerCase().includes("phuket")) return false;
  if (slug.toLowerCase().includes("paris")) return true;

  // If hours is string, parse it first
  const hoursObj = typeof hours === "string" ? parseHoursString(hours) : hours;

  // Existing logic... but simplified for this context
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Asia/Bangkok",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(now);
  const dayIdx = parts.findIndex((p) => p.type === "weekday");
  const hourIdx = parts.findIndex((p) => p.type === "hour");
  const minuteIdx = parts.findIndex((p) => p.type === "minute");

  const currentDay = parts[dayIdx].value.toLowerCase();
  const currentHour = parseInt(parts[hourIdx].value);
  const currentMinute = parseInt(parts[minuteIdx].value);

  const todayHours = hoursObj[currentDay as keyof Hours];
  if (!todayHours || todayHours === "Closed") return false;

  const [openStr, closeStr] = todayHours.split("-");
  const [openHour, openMinute] = openStr.split(":").map(Number);
  // Handle closing time next day (e.g. 02:00)
  const [closeHour, closeMinute] = closeStr.split(":").map(Number);

  // Convert current time to minutes from midnight
  let currentTotalMinutes = currentHour * 60 + currentMinute;
  const openTotalMinutes = openHour * 60 + openMinute;
  let closeTotalMinutes = closeHour * 60 + closeMinute;

  // If closes past midnight (e.g. 02:00 is less than 09:00, assume next day)
  if (closeTotalMinutes < openTotalMinutes) {
    closeTotalMinutes += 24 * 60; // Add 24 hours
    // If current time is early morning (00:00 - 02:00), treat as part of previous session?
    // Complex logic omitted for brevity, assuming standard late night open
    if (
      currentTotalMinutes < closeTotalMinutes &&
      currentTotalMinutes < openTotalMinutes
    ) {
      currentTotalMinutes += 24 * 60;
    }
  }

  return (
    currentTotalMinutes >= openTotalMinutes &&
    currentTotalMinutes < closeTotalMinutes
  );
}
