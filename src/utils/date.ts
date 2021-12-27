import differenceInSeconds from 'date-fns/differenceInSeconds';

const formatTime = (timeArr: number[]) =>
  timeArr.map(time => Math.floor(time).toString().padStart(2, '0')).join(':');

export const beforeNow = (startTime: string | null) => {
  if (startTime === null) {
    return '00:00';
  }

  const diffSec = differenceInSeconds(new Date(), new Date(startTime));
  const diffHour = diffSec / (60 * 60);

  if (diffHour > 24) {
    const day = Math.floor(diffHour / 24);
    return `${day}일`;
  }

  const [hour, min, sec] = [diffHour % 24, (diffSec / 60) % 60, diffSec % 60];

  return formatTime(hour < 1 ? [min, sec] : [hour, min, sec]);
};
