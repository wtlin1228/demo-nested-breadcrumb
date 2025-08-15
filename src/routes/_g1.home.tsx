import Typography from '@mui/material/Typography';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useResigterBreadcrumb } from '../components/BreadcrumbProvider';
import { Link } from '../components/Link';

export const Route = createFileRoute('/_g1/home')({
  component: RouteComponent,
  onEnter: () => {
    console.log('Home::onEnter');
  },
  onLeave: () => {
    console.log('Home::onLeave');
  },
});

function RouteComponent() {
  useResigterBreadcrumb({
    id: Route.id,
    node: <Link to="/home">Home</Link>,
  });

  return (
    <div>
      <Typography variant="h4">Home</Typography>
      <Outlet />
    </div>
  );
}
