import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/home/games/forgotten-land')({
  component: RouteComponent,
  onEnter: () => {
    console.log('ForgottenLand::onEnter');
  },
  onLeave: () => {
    console.log('ForgottenLand::onLeave');
  },
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Forgotten Land</Typography>
      <Outlet />
    </div>
  );
}
