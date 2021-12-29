import React from 'react';
import { useMyBotList } from '@/hooks/bot';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BotSummary from './bot-summary';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 15,
  },
}));

const TITLES = ['봇', '마켓', '상태', '실행 시간', '알고리즘', '수익률', 'Actions'];

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

export default BotList;
