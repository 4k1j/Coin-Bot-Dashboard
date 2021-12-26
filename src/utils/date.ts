import differenceInSeconds from 'date-fns/differenceInSeconds';

const formatTime = (timeArr: number[]) =>
  timeArr.map(time => Math.floor(time).toString().padStart(2, '0')).join(':');

export const beforeNow = (startTime: string) => {
  const diffSec = differenceInSeconds(new Date(), new Date(startTime));
  const diffHour = diffSec / (60 * 60);
  if (diffHour > 24) {
    const day = Math.floor(diffHour / 24);
    return `${day}일`;
  }
  const hour = diffHour % 24;
  const min = (diffSec / 60) % 60;
  const sec = diffSec % 60;

  return formatTime(hour < 1 ? [min, sec] : [hour, min, sec]);
};