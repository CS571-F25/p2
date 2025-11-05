import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

function Navbar() {
  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <GroupsIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
            }}
          >
            ClubHub
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{ textTransform: 'none' }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/board"
              sx={{ textTransform: 'none' }}
            >
              Board
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
