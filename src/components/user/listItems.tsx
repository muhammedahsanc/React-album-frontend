import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CollectionsIcon from '@mui/icons-material/Collections';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logout from '../functions/logout';
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000DE; 
`;
export const mainListItems = (
  <React.Fragment>
    <StyledNavLink
  to="/user/Dashboard">
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </StyledNavLink>

    <StyledNavLink
  to="/user/albums">
    <ListItemButton>
      <ListItemIcon>
        <CollectionsIcon />
      </ListItemIcon>
      <ListItemText primary="Albums" />
    </ListItemButton>
    </StyledNavLink>

    <StyledNavLink
  to="/user/photos">
    <ListItemButton>
      <ListItemIcon>
        <InsertPhotoIcon />
      </ListItemIcon>
      <ListItemText primary="Photos" />
    </ListItemButton>
    </StyledNavLink>

    {/* <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItemButton> */}
     <StyledNavLink
  to="/user/favourite">
    <ListItemButton>
      <ListItemIcon>
        <FavoriteIcon />
      </ListItemIcon>
      <ListItemText primary="Favourite" />
    </ListItemButton>
    </StyledNavLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <StyledNavLink to="/">
    <ListItemButton onClick={logout}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
    </StyledNavLink>

    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton> */}
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);
