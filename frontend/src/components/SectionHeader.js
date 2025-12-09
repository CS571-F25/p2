import React from 'react';
import { Box, Typography } from '@mui/material';

function SectionHeader({
  title,
  subtitle,
  gradient = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'
}) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mb: 6,
        py: 6,
        px: 3,
        background: gradient,
        borderRadius: 5,
        color: 'white',
        boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)',
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom fontWeight={800}>
        {title}
      </Typography>
      <Typography variant="h6" component="p" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.95 }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default SectionHeader;
