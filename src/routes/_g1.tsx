import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import { BreadcrumbProvider } from '../components/BreadcrumbProvider';

export const Route = createFileRoute('/_g1')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h3">G1</Typography>
      <BreadcrumbProvider id="g1">
        <Outlet />
      </BreadcrumbProvider>
    </Box>
  );
}
