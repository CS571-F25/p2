import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary">
            © 2025 ClubHub. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="https://github.com" target="_blank" color="inherit" aria-label="GitHub">
              <GitHubIcon />
            </Link>
            <Link href="https://twitter.com" target="_blank" color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </Link>
            <Link href="https://linkedin.com" target="_blank" color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
