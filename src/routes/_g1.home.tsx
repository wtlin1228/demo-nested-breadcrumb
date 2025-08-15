import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_g1/home')({
  component: RouteComponent,
  onEnter: () => {
    console.log('Home::onEnter');
  },
  onLeave: () => {
    console.log('Home::onLeave');
  },
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Home</Typography>
      <Outlet />
    </div>
  );
}
