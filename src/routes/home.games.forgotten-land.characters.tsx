import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/home/games/forgotten-land/characters')({
  component: RouteComponent,
  onEnter: () => {
    console.log('Characters::onEnter');
  },
  onLeave: () => {
    console.log('Characters::onLeave');
  },
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Characters</Typography>
      <Outlet />
    </div>
  );
}
