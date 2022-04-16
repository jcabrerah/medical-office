import * as React from 'react';
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import {RouteComponentProps} from "react-router";
import { withRouter } from "react-router-dom";

let pages : any[] = [];
const settings = ['profile', 'appointments', 'download prescription','logout'];
let isUser = false;

type PathParamsType = {
  history: any
}

type PropsType = RouteComponentProps<PathParamsType> & {
  // someString: string,
}

const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
}

// function MainBar({aboutClick}: any): any {
const  MainBar = (props: any) => {
  useConstructor(() => {
    pages=props.pages;
    console.log(
      "Occurs ONCE, BEFORE the initial render."
    );
  });
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const logIn = (event: React.MouseEvent<HTMLElement>) => {
      isUser = true
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const setUrl = (route: any) => {
      const history = props.history;
      history.push(route);
    }

    return (
      <AppBar position="static" data-testid="main-bar">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex'}}}
                >
                    LOGO
                </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((item) => (
              <Button
                key={item.page}
                onClick={() => setUrl(item.route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.page}
              </Button>
            ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Log in">
                <IconButton onClick={logIn} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>

            {isUser && <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>}
          </Toolbar>
        </Container>
      </AppBar>
    )
}

export default withRouter(MainBar);

// export default MainBar;