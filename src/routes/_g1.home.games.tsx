import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_g1/home/games')({
  component: RouteComponent,
  onEnter: () => {
    console.log('Games::onEnter');
  },
  onLeave: () => {
    console.log('Games::onLeave');
  },
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Games</Typography>
      <Outlet />
    </div>
  );
}
