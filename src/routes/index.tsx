import Typography from '@mui/material/Typography';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <Typography variant="h4">Index</Typography>
    </div>
  );
}
