import { IBotSummary, useMyBotList } from '@/hooks/bot';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

interface IBotSummaryProps {
  bot: IBotSummary;
}
function BotSummary({ bot }: IBotSummaryProps) {
  const { id, botName, earningRate, market, startTime, status } = bot;
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Typography>{id}</Typography>
      </Grid>
      <Grid item>
        <Typography>{botName}</Typography>
      </Grid>
      <Grid item>
        <Typography>{earningRate}</Typography>
      </Grid>
      <Grid item>
        <Typography>{market}</Typography>
      </Grid>
      <Grid item>
        <Typography>{startTime}</Typography>
      </Grid>
      <Grid item>
        <Typography>{status}</Typography>
      </Grid>
    </Grid>
  );
}

function BotList() {
  const {
    data: { myBotList },
  } = useMyBotList();

  return (
    <Box>
      <Typography variant="h3">my-bot-summary</Typography>

      {myBotList?.map(bot => (
        <BotSummary key={bot.id} bot={bot} />
      ))}
    </Box>
  );
}

export default BotList;
