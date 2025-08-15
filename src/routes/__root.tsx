import Stack from '@mui/material/Stack';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Link } from '../components/Link';

export const Route = createRootRoute({
  component: () => (
    <>
      <Stack>
        <Link to="/">Index</Link>
        <Link to="/home">Home</Link>
        <Link to="/home/games">Games</Link>
        <Link to="/home/games/forgotten-land">Forgotten Land</Link>
        <Link to="/home/games/forgotten-land/characters">Characters</Link>
        <Link to="/home/games/forgotten-land/characters/cafe-manager">
          Café Manager
        </Link>
        <Link to="/home/games/forgotten-land/characters/cafe-manager/sub-games">
          Sub Games
        </Link>
        <Link to="/home/games/forgotten-land/characters/cafe-manager/sub-games/lunch-time">
          Lunch Time
        </Link>
      </Stack>
      <Outlet />
    </>
  ),
});
