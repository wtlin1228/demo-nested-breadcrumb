import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useResigterBreadcrumb } from '../components/BreadcrumbProvider';
import { Link } from '../components/Link';

export const Route = createFileRoute('/_g1/home/games')({
  component: RouteComponent,
  onEnter: () => {
    console.log('Games::onEnter');
  },
  onLeave: () => {
    console.log('Games::onLeave');
  },
});

function RouteComponent() {
  useResigterBreadcrumb({
    id: Route.id,
    node: <Link to="/home/games">Games</Link>,
  });

  return (
    <div>
      <Typography variant="h4">Games</Typography>
      <Outlet />
    </div>
  );
}
