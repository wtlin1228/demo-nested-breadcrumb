import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useResigterBreadcrumb } from '../components/BreadcrumbProvider';
import { Link } from '../components/Link';

export const Route = createFileRoute('/_g1/home/games/_g2/forgotten-land')({
  component: RouteComponent,
  onEnter: () => {
    console.log('ForgottenLand::onEnter');
  },
  onLeave: () => {
    console.log('ForgottenLand::onLeave');
  },
});

function RouteComponent() {
  useResigterBreadcrumb({
    id: Route.id,
    node: (
      <Link key={Route.id} to="/home/games/forgotten-land">
        Forgotten Land
      </Link>
    ),
  });

  return (
    <div>
      <Typography variant="h4">Forgotten Land</Typography>
      <Outlet />
    </div>
  );
}
