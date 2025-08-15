import Typography from '@mui/material/Typography';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <Typography variant="h3">Welcome Home!</Typography>
    </div>
  );
}
