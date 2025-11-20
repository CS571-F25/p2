import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function BoardMemberCard({ member }) {
  const getRoleColor = (role) => {
    const colorMap = {
      president: 'primary',
      vice_president: 'secondary',
      secretary: 'info',
      treasurer: 'success',
      event_coordinator: 'warning',
      marketing: 'error',
      member: 'default',
    };
    return colorMap[role] || 'default';
  };

  const getRoleGradient = (role) => {
    const gradientMap = {
      president: '#6366f1 0%, #8b5cf6 100%',
      vice_president: '#ec4899 0%, #f472b6 100%',
      secretary: '#06b6d4 0%, #22d3ee 100%',
      treasurer: '#10b981 0%, #34d399 100%',
      event_coordinator: '#f59e0b 0%, #fbbf24 100%',
      marketing: '#8b5cf6 0%, #ec4899 100%',
      member: '#06b6d4 0%, #10b981 100%',
    };
    return gradientMap[role] || '#6366f1 0%, #8b5cf6 100%';
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)',
          transform: 'translateY(-8px) scale(1.02)',
        },
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {member.photo ? (
        <Box
          component="img"
          src={member.photo}
          alt={member.name}
          sx={{
            width: '100%',
            height: 280,
            objectFit: 'cover',
          }}
        />
      ) : (
        <Box
          sx={{
            height: 280,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${getRoleGradient(member.role)})`,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
              animation: 'pulse 3s ease-in-out infinite',
            },
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
              '50%': { transform: 'scale(1.1)', opacity: 0.8 },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 800,
              fontSize: 90,
              zIndex: 1,
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))',
            }}
          >
            {member.name.charAt(0)}
          </Typography>
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Typography variant="h6" gutterBottom fontWeight={700} sx={{ mb: 1 }}>
          {member.name}
        </Typography>
        <Chip
          label={member.role_display || member.role}
          color={getRoleColor(member.role)}
          size="small"
          sx={{
            mb: 2,
            width: 'fit-content',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          sx={{
            flexGrow: 1,
            lineHeight: 1.7,
          }}
        >
          {member.bio}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mt: 'auto',
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          {member.email && (
            <IconButton
              size="small"
              href={`mailto:${member.email}`}
              aria-label="Email"
              sx={{
                color: 'primary.main',
                bgcolor: 'primary.lighter',
                '&:hover': {
                  bgcolor: 'primary.light',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          )}
          {member.linkedin && (
            <IconButton
              size="small"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                color: 'info.main',
                bgcolor: 'info.lighter',
                '&:hover': {
                  bgcolor: 'info.light',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          )}
          {member.github && (
            <IconButton
              size="small"
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{
                color: 'text.primary',
                bgcolor: 'grey.200',
                '&:hover': {
                  bgcolor: 'grey.300',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          )}
          {member.twitter && (
            <IconButton
              size="small"
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              sx={{
                color: 'secondary.main',
                bgcolor: 'secondary.lighter',
                '&:hover': {
                  bgcolor: 'secondary.light',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default BoardMemberCard;
