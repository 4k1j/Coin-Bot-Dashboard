import React, { useState } from 'react';
import { IBotSummary } from '@/schema/bot';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import RunningTime from './running-time';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const EarningRateSpan = styled('span', {
  shouldForwardProp: prop => prop !== 'positive',
})<{ positive?: boolean }>(({ positive }) => ({
  color: positive ? 'red' : 'blue',
  fontWeight: 500,
}));

const BotNameSpan = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: theme.typography.fontWeightBold,
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const MarketSpan = styled('span')(() => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: 13,
  margin: 0,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ON_OFF_STATUS = {
  running: true,
  preparing: true,
  trading: true,
  paused: false,
  error: false,
  terminating: false,
};

interface IBotSummaryProps {
  bot: IBotSummary;
}

function BotSummary({ bot }: IBotSummaryProps) {
  const { name, algorithm, earningRate, market, koreanName, startTime, status } = bot;
  const positive = earningRate > 0;
  const [checked, setChecked] = useState<boolean>(ON_OFF_STATUS[status]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <StyledTableRow>
      <StyledTableCell size="small" sx={{ width: '80px', pr: 0 }}>
        <Switch color="warning" checked={checked} onChange={handleChange} />
      </StyledTableCell>
      <StyledTableCell sx={{ pl: 0 }} align="center">
        <BotNameSpan>{name}</BotNameSpan>
      </StyledTableCell>
      <StyledTableCell align="center">
        <MarketSpan>{koreanName}</MarketSpan>
        <MarketSpan sx={{ fontSize: 10 }}>{`(${market})`}</MarketSpan>
      </StyledTableCell>
      <StyledTableCell align="center">{status}</StyledTableCell>
      <StyledTableCell align="center">
        <RunningTime startTime={startTime} />
      </StyledTableCell>
      <StyledTableCell align="center">{algorithm}</StyledTableCell>
      <StyledTableCell align="center">
        <EarningRateSpan positive={positive}>{`${
          positive ? '+' : ''
        }${earningRate}%`}</EarningRateSpan>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default BotSummary;
