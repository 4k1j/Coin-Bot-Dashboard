import Layout from '@/components/common/layout';
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Paper, Box } from '@mui/material';
import AssetSection from '@/components/dashboard/asset-section';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

export default function Dashboard() {
  const theme = useTheme();

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          height: `calc(100vh - ${theme.header.height}px - ${theme.spacing(2)})`,
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={2} sx={{ height: '100%' }}>
          <Grid item xs={6}>
            <Item>
              <AssetSection />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
