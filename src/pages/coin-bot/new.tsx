import Layout from '@/components/common/layout';
import { Box, Typography } from '@mui/material';

export default function New() {
  return (
    <Layout>
      <Box sx={{ padding: 1, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">New Coin Bot</Typography>
      </Box>
    </Layout>
  );
}
