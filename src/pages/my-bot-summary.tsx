import Link from 'next/link';
import Layout from '@/components/common/layout';
import BotList from '@/components/my-bot-summary/bot-list';
import { Box, Button, Typography } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function MyBotSummary() {
  return (
    <Layout>
      <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">My Bot List</Typography>
        <Link href="/coin-bot/new" passHref>
          <Button
            sx={{ m: 1 }}
            size="small"
            variant="contained"
            color="warning"
            startIcon={<AddRoundedIcon />}
          >
            new
          </Button>
        </Link>
      </Box>
      <BotList />
    </Layout>
  );
}
