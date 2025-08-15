import Stack from '@mui/material/Stack';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Link } from '../components/Link';
import Box from '@mui/material/Box';

export const Route = createRootRoute({
  component: () => (
    <>
      <Box sx={{ minHeight: 100 }}>
        {/* TODO: create those containers based dynamically */}
        <div id="g1"></div>
        <div id="g2"></div>
        <div id="g3"></div>
      </Box>
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
