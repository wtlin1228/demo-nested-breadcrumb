import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Link } from '../components/Link';
import { useResigterBreadcrumb } from '../components/BreadcrumbProvider';

export const Route = createFileRoute(
  '/_g1/home/games/_g2/forgotten-land/characters',
)({
  component: RouteComponent,
  onEnter: () => {
    console.log('Characters::onEnter');
  },
  onLeave: () => {
    console.log('Characters::onLeave');
  },
});

function RouteComponent() {
  useResigterBreadcrumb({
    id: Route.id,
    node: <Link to="/home/games/forgotten-land/characters">Games</Link>,
  });

  return (
    <div>
      <Typography variant="h4">Characters</Typography>
      <Outlet />
    </div>
  );
}
