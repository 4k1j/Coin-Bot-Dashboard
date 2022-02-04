import Layout from '@/components/common/layout';
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Paper, Box } from '@mui/material';
import AssetSection from '@/components/dashboard/asset-section';

const Section = styled(Paper)(({ theme }) => ({
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
            <Section>
              <AssetSection />
            </Section>
          </Grid>
          <Grid item xs={6}>
            <Section>2</Section>
          </Grid>
          <Grid item xs={6}>
            <Section>3</Section>
          </Grid>
          <Grid item xs={6}>
            <Section>4</Section>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
