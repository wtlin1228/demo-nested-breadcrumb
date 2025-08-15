import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useResigterBreadcrumb } from '../components/BreadcrumbProvider';
import { Link } from '../components/Link';

export const Route = createFileRoute(
  '/_g1/home/games/_g2/forgotten-land/characters/_g3/cafe-manager/sub-games/lunch-time',
)({
  component: RouteComponent,
  onEnter: () => {
    console.log('LunchTime::onEnter');
  },
  onLeave: () => {
    console.log('LunchTime::onLeave');
  },
});

function RouteComponent() {
  useResigterBreadcrumb({
    id: Route.id,
    node: (
      <Link to="/home/games/forgotten-land/characters/cafe-manager/sub-games/lunch-time">
        Lunch Time
      </Link>
    ),
  });

  return (
    <div>
      <Typography variant="h4">Lunch Time</Typography>
      <Outlet />
    </div>
  );
}
