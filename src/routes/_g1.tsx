import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_g1')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <div>
      <h1>G1</h1>
      <Outlet />
    </div>
  );
}
