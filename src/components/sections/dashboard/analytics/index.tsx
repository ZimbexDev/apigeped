import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ActionMenu from '@/components/common/ActionMenu';
import AnalyticsChart from './AnalyticsChart';

const actions = [
  {
    id: 1,
    icon: 'mage:refresh',
    title: 'Actualizar',
  },
  {
    id: 2,
    icon: 'solar:export-linear',
    title: 'Exportar',
  },
  {
    id: 3,
    icon: 'mage:share',
    title: 'Partilhar',
  },
];

const AnalyticsData = [
  {
    id: 1,
    value: 23,
    name: 'Requisição',
  },
  {
    id: 2,
    value: 12,
    name: 'Produção',
  },
  {
    id: 3,
    value: 7,
    name: 'Pronta recolha',
  },
  {
    id: 4,
    value: 0,
    name: '',
  },
];

const Analytics = () => {
  return (
    <Paper sx={{ px: 0, height: 410 }}>
      <Stack mt={-0.5} px={3.75} alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.secondary" zIndex={1000}>
        Análise
        </Typography>

        <ActionMenu actions={actions} />
      </Stack>

      <AnalyticsChart data={AnalyticsData} sx={{ mt: -5.5, mx: 'auto', width: 230, height: '370px !important' }} />
    </Paper>
  );
};

export default Analytics;
