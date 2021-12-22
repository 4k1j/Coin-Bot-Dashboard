import React, { useState } from 'react';
import { IBotSummary, useMyBotList } from '@/hooks/bot';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

interface IBotSummaryProps {
  bot: IBotSummary;
}
function BotSummary({ bot }: IBotSummaryProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const { botName, algorithm, earningRate, market, startTime, status } = bot;
  return (
    <Grid container spacing={3}>
      <Grid item sx={{ alignItems: 'center' }}>
        <Switch color="warning" checked={checked} onChange={handleChange} />
      </Grid>
      <Grid item>
        <Typography>{botName}</Typography>
      </Grid>
      <Grid item>
        <Typography>{market}</Typography>
      </Grid>
      <Grid item>
        <Typography>{status}</Typography>
      </Grid>
      <Grid item>
        <Typography>{startTime}</Typography>
      </Grid>
      <Grid item>
        <Typography>{algorithm}</Typography>
      </Grid>
      <Grid item>
        <Typography>{earningRate}</Typography>
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
      {myBotList?.map(bot => (
        <BotSummary key={bot.id} bot={bot} />
      ))}
    </Box>
  );
}

export default BotList;
