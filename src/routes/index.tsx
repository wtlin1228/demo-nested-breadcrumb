import Typography from '@mui/material/Typography';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  onEnter: () => {
    console.log('Index::onEnter');
  },
  onLeave: () => {
    console.log('Index::onLeave');
  },
});

function RouteComponent() {
  return (
    <div>
      <Typography variant="h4">Index</Typography>
    </div>
  );
}
