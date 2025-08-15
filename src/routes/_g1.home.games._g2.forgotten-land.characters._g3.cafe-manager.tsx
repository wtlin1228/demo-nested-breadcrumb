import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useResigterBreadcrumb } from '../components/BreadcrumbProvider';
import { Link } from '../components/Link';

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
  useResigterBreadcrumb({
    id: Route.id,
    node: (
      <Link to="/home/games/forgotten-land/characters/cafe-manager">
        Cafe Manager
      </Link>
    ),
  });

  return (
    <div>
      <Typography variant="h4">Café Manager</Typography>
      <Outlet />
    </div>
  );
}
