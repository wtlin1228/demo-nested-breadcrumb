import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import { BreadcrumbProvider } from '../components/BreadcrumbProvider';

export const Route = createFileRoute('/_g1/home/games/_g2')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h3">G2</Typography>
      <BreadcrumbProvider id="g2">
        <Outlet />
      </BreadcrumbProvider>
    </Box>
  );
}
