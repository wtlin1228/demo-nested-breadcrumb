import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/home/games/forgotten-land/characters/cafe-manager',
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Café Manager</Typography>
      <Outlet />
    </div>
  );
}
