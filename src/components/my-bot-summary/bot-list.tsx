import React, { useState } from 'react';
import { useMyBotList } from '@/hooks/bot';
import { IBotSummary } from '@/schema/bot';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { beforeNow } from '@/utils/date';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const TITLES = ['봇', '마켓', '상태', '실행 시간', '알고리즘', '수익률'];

function BotList() {
  const {
    data: { myBotList },
  } = useMyBotList();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {TITLES.map((title, index) => (
              <StyledTableCell key={title} align="center" colSpan={index ? 1 : 2}>
                {title}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {myBotList?.map(bot => (
            <BotSummary key={bot.name} bot={bot} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

interface IBotSummaryProps {
  bot: IBotSummary;
}

const ON_OFF_STATUS = {
  running: true,
  preparing: true,
  trading: true,
  paused: false,
  error: false,
  terminating: false,
};

function BotSummary({ bot }: IBotSummaryProps) {
  const { name, algorithm, earningRate, market, startTime, status } = bot;
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
        {name}
      </StyledTableCell>
      <StyledTableCell align="center">{market}</StyledTableCell>
      <StyledTableCell align="center">{status}</StyledTableCell>
      <StyledTableCell align="center">{beforeNow(startTime)}</StyledTableCell>
      <StyledTableCell align="center">{algorithm}</StyledTableCell>
      <StyledTableCell align="center">
        <EarningRateSpan positive={positive}>{`${
          positive ? '+' : ''
        }${earningRate}%`}</EarningRateSpan>
      </StyledTableCell>
    </StyledTableRow>
  );
}

export default BotList;
