import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function HeroSection({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  gradient = 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'
}) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        px: 3,
        background: gradient,
        borderRadius: 5,
        color: 'white',
        mb: 6,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)',
          animation: 'shimmer 5s ease-in-out infinite',
        },
        '@keyframes shimmer': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        fontWeight={800}
        sx={{ position: 'relative', zIndex: 1, letterSpacing: '-0.02em' }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        component="p"
        sx={{ mb: 4, opacity: 0.95, position: 'relative', zIndex: 1, fontWeight: 500 }}
      >
        {subtitle}
      </Typography>

      {description && (
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            maxWidth: 700,
            mx: 'auto',
            opacity: 0.9,
            position: 'relative',
            zIndex: 1,
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}
        >
          {description}
        </Typography>
      )}

      {(primaryButton || secondaryButton) && (
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
          {primaryButton && (
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to={primaryButton.to}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                '&:hover': {
                  bgcolor: 'grey.50',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                },
              }}
            >
              {primaryButton.label}
            </Button>
          )}
          {secondaryButton && (
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to={secondaryButton.to}
              sx={{
                color: 'white',
                borderColor: 'white',
                borderWidth: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  transform: 'translateY(-2px)',
                  borderWidth: 2,
                },
              }}
            >
              {secondaryButton.label}
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}

export default HeroSection;
