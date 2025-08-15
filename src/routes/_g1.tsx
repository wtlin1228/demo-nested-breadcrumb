import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, createFileRoute } from '@tanstack/react-router';
import { BreadcrumbProvider } from '../components/BreadcrumbProvider';
import React from 'react';
import { BreadcrumbRoot } from '../utils/breadcrumb-root';

export const Route = createFileRoute('/_g1')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  React.useEffect(() => {
    const BRoot = BreadcrumbRoot.getInstance();
    BRoot.createGroup('g1');

    return () => {
      BRoot.removeGroup('g1');
    };
  }, []);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h3">G1</Typography>
      <BreadcrumbProvider id="g1">
        <Outlet />
      </BreadcrumbProvider>
    </Box>
  );
}
