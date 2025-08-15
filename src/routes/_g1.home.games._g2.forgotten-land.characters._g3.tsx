import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import { BreadcrumbProvider } from '../components/BreadcrumbProvider';
import React from 'react';
import { BreadcrumbRoot } from '../utils/breadcrumb-root';

export const Route = createFileRoute(
  '/_g1/home/games/_g2/forgotten-land/characters/_g3',
)({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  React.useEffect(() => {
    const BRoot = BreadcrumbRoot.getInstance();
    BRoot.createGroup('g3');

    return () => {
      BRoot.removeGroup('g3');
    };
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h3">G3</Typography>
      <BreadcrumbProvider id="g3">
        <Outlet />
      </BreadcrumbProvider>
    </Box>
  );
}
