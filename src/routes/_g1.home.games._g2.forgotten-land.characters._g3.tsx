import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_g1/home/games/_g2/forgotten-land/characters/_g3')({
  component: PathlessLayoutComponent,
});

function PathlessLayoutComponent() {
  return (
    <div>
      <h1>G3</h1>
      <Outlet />
    </div>
  );
}
