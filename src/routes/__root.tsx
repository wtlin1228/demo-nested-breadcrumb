import Stack from '@mui/material/Stack';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Link } from '../components/Link';
import { BreadcrumbRoot } from '../utils/breadcrumb-root';
import React from 'react';
import Divider from '@mui/material/Divider';

export const Route = createRootRoute({
  component: () => {
    const [groupIds, setGroupIds] = React.useState<string[]>([]);

    React.useEffect(() => {
      const BRoot = BreadcrumbRoot.getInstance();
      const listener = (xs: string[]) => setGroupIds([...xs]);
      BRoot.subscribeToGroupsChange(listener);
      return () => {
        BRoot.unsubscribeToGroupsChange(listener);
      };
    }, []);

    return (
      <>
        <Stack
          direction="row"
          id="breadcrumb-root"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {groupIds.map((groupId) => (
            <div id={groupId} key={groupId} />
          ))}
        </Stack>

        <Stack sx={{ mt: 8 }}>
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
    );
  },
});
