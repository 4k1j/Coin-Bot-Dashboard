import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { beforeNow } from '@/utils/date';

const TimeSpan = styled('span')(({ theme }) => ({
  color: theme.palette.info.main,
}));

interface IRunningTimeProps {
  startTime: string;
}

const ONE_SEC = 1000;
const ONE_HOUR = 1000 * 60 * 60;

function RunningTime({ startTime }: IRunningTimeProps) {
  const [runningTime, setRunningTime] = useState<string>(beforeNow(startTime));

  useEffect(() => {
    const aDayLater = !beforeNow(startTime).match(':');
    const timer = setInterval(
      () => {
        setRunningTime(beforeNow(startTime));
      },
      aDayLater ? ONE_HOUR : ONE_SEC
    );

    return () => {
      clearInterval(timer);
    };
  }, [startTime]);

  return <TimeSpan>{runningTime}</TimeSpan>;
}

export default RunningTime;
