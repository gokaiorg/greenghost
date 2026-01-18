const getBangkokTime = (): {
  hours: number;
  minutes: number;
  dayOfWeek: number;
} => {
  const now = new Date();

  // Use toLocaleString to get the time in Bangkok timezone
  const bangkokDateString = now.toLocaleString("en-US", {
    timeZone: "Asia/Bangkok",
  });
  const bangkokDate = new Date(bangkokDateString);

  return {
    hours: bangkokDate.getHours(),
    minutes: bangkokDate.getMinutes(),
    dayOfWeek: bangkokDate.getDay(), // 0 (Sunday) to 6 (Saturday)
  };
};

const parseTime = (timeStr?: string | null): number => {
  if (
    !timeStr ||
    typeof timeStr !== "string" ||
    timeStr.toLowerCase() === "close" ||
    timeStr.toLowerCase() === "closed"
  ) {
    return -1;
  }

  // Match "9:30 AM", "9AM", "9:30am", etc.
  const match = timeStr.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?$/i);
  if (!match) return -1;

  let hours = parseInt(match[1], 10);
  const minutes = match[2] ? parseInt(match[2], 10) : 0;
  const period = match[3] ? match[3].toUpperCase() : null;

  // Handle invalid numbers
  if (isNaN(hours) || isNaN(minutes)) return -1;

  // Convert to 24-hour format
  if (period === "PM" && hours < 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

export type Hours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

export const isLocationOpen = (hours: Hours, slug?: string): boolean => {
  // Specific overrides
  if (slug === "phuket") return false;
  if (slug === "paris") return true;

  const {
    hours: currentHour,
    minutes: currentMinute,
    dayOfWeek,
  } = getBangkokTime();
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  // Get the current day name in lowercase (e.g., 'monday')
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ] as const;
  const today = dayNames[dayOfWeek];
  const todayHours = hours[today];

  // If location is closed today
  if (
    !todayHours ||
    todayHours.toLowerCase() === "close" ||
    todayHours.toLowerCase() === "closed"
  ) {
    return false;
  }

  // Handle "Always Open" case (00:00 - 23:59)
  if (todayHours === "00:00 - 23:59") return true;

  // Parse today's opening and closing times
  const [openTime, closeTime] = todayHours.split(" - ");
  const openTimeInMinutes = parseTime(openTime);
  const closeTimeInMinutes = parseTime(closeTime);

  if (openTimeInMinutes === -1 || closeTimeInMinutes === -1) return false;

  // If close time is next day (e.g., 2:00 AM next day)
  // Note: parseTime handles AM/PM. 2am is 120 mins. 9am is 540 mins.
  // If close < open, it assumes overnight.

  if (closeTimeInMinutes < openTimeInMinutes) {
    // If current time is after opening time (before midnight)
    if (currentTimeInMinutes >= openTimeInMinutes) {
      return true;
    }
    // If current time is after midnight but before close time
    if (currentTimeInMinutes < closeTimeInMinutes) {
      // Check if yesterday was open overnight
      const yesterdayIndex = (dayOfWeek - 1 + 7) % 7;
      const yesterday = dayNames[yesterdayIndex];
      const yesterdayHours = hours[yesterday];

      if (yesterdayHours && yesterdayHours.toLowerCase() !== "close") {
        const [yestOpen, yestClose] = yesterdayHours.split(" - ");
        const yestOpenTime = parseTime(yestOpen);
        const yestCloseTime = parseTime(yestClose);

        // If yesterday was open overnight and we're before the closing time
        if (
          yestCloseTime < yestOpenTime &&
          currentTimeInMinutes < yestCloseTime
        ) {
          return true;
        }
      }
      // If yesterday wasn't open overnight, but today is open overnight,
      // and we are in the early morning (before close), we are technically "open"
      // IF we consider the previous day's session.
      // BUT, `isLocationOpen` usually checks "is it open RIGHT NOW".
      // If it's 1AM on Tuesday, and Tuesday hours are 9am-2am (next day),
      // then 1AM Tuesday is actually part of MONDAY's session.
      // So we need to check MONDAY's hours.

      // Let's refine this:
      // If it's early morning (e.g. 00:00 - 06:00), we should check YESTERDAY's closing time.

      if (yesterdayHours) {
        const [yestOpen, yestClose] = yesterdayHours.split(" - ");
        const yestOpenTime = parseTime(yestOpen);
        const yestCloseTime = parseTime(yestClose);

        if (yestCloseTime < yestOpenTime) {
          // Yesterday was overnight
          if (currentTimeInMinutes < yestCloseTime) return true;
        }
      }

      return false;
    }
    return false;
  }

  // Normal case - not overnight
  return (
    currentTimeInMinutes >= openTimeInMinutes &&
    currentTimeInMinutes < closeTimeInMinutes
  );
};
