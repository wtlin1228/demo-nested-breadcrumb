import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_g1/home/games/_g2/forgotten-land/characters/_g3/cafe-manager/sub-games',
)({
  component: RouteComponent,
  onEnter: () => {
    console.log('SubGames::onEnter');
  },
  onLeave: () => {
    console.log('SubGames::onLeave');
  },
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Sub Games</Typography>
      <Outlet />
    </div>
  );
}
