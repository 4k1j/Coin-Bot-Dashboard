import { IBotSummary, useMyBotList } from '@/hooks/bot';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';

interface IBotSummaryProps {
  bot: IBotSummary;
}
function BotSummary({ bot }: IBotSummaryProps) {
  return (
    <Grid container spacing={1}>
      <Grid item>{bot.id}</Grid>;
    </Grid>
  );
}

function BotList() {
  const {
    data: { botList },
  } = useMyBotList();

  return (
    <Box>
      {botList?.map(bot => (
        <BotSummary key={bot.id} bot={bot} />
      ))}
    </Box>
  );
}

export default BotList;
