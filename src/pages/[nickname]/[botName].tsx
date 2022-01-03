import Layout from '@/components/common/layout';
import { Typography } from '@mui/material';
import { useRouter } from 'next/dist/client/router';

export default function BotDetail() {
  const router = useRouter();
  const { nickname, botName } = router.query;

  return (
    <Layout>
      <Typography>{nickname}</Typography>
      <Typography>{botName}</Typography>
    </Layout>
  );
}
