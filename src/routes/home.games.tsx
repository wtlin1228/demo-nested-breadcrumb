import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/home/games')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Games</Typography>
      <Outlet />
    </div>
  );
}
