import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_g1/home/games/_g2/forgotten-land/characters/_g3/cafe-manager',
)({
  component: RouteComponent,
  onEnter: () => {
    console.log('CafeManager::onEnter');
  },
  onLeave: () => {
    console.log('CafeManager::onLeave');
  },
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Café Manager</Typography>
      <Outlet />
    </div>
  );
}
