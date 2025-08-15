import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import { BreadcrumbProvider } from '../components/BreadcrumbProvider';
import React from 'react';
import { BreadcrumbRoot } from '../utils/breadcrumb-root';

export const Route = createFileRoute('/_g1/home/games/_g2')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  React.useEffect(() => {
    const BRoot = BreadcrumbRoot.getInstance();
    BRoot.createGroup('g2');

    return () => {
      BRoot.removeGroup('g2');
    };
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h3">G2</Typography>
      <BreadcrumbProvider id="g2">
        <Outlet />
      </BreadcrumbProvider>
    </Box>
  );
}
