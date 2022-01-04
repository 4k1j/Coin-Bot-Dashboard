import { useMyBotList } from '@/hooks/bot';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableContainer, Paper, TableHead, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import BotSummary from './bot-summary';
import FilterRow from './filter-row';

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
          <FilterRow />
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
