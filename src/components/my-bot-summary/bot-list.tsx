import React, { useState } from 'react';
import { IBotSummary, useMyBotList } from '@/hooks/bot';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
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
function BotSummary({ bot }: IBotSummaryProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  const { name, algorithm, earningRate, market, startTime, status } = bot;

  return (
    <StyledTableRow>
      <StyledTableCell component="th" scope="row">
        <Switch color="warning" checked={checked} onChange={handleChange} />
      </StyledTableCell>
      <StyledTableCell align="center">{name}</StyledTableCell>
      <StyledTableCell align="center">{market}</StyledTableCell>
      <StyledTableCell align="center">{status}</StyledTableCell>
      <StyledTableCell align="center">{startTime}</StyledTableCell>
      <StyledTableCell align="center">{algorithm}</StyledTableCell>
      <StyledTableCell align="center">{earningRate}</StyledTableCell>
    </StyledTableRow>
  );
}

export default BotList;
