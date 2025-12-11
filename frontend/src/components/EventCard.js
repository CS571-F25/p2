import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Box,
  Typography,
  Chip,
  IconButton,
  Button,
  Tooltip,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function EventCard({ event, isBookmarked, isRsvped, onBookmark, onRsvp }) {
  const getEventTypeColor = (type) => {
    const colorMap = {
      workshop: 'primary',
      social: 'secondary',
      volunteering: 'info',
      meeting: 'success',
      other: 'default',
    };
    return colorMap[type] || 'default';
  };

  const getEventGradient = (type) => {
    const gradientMap = {
      workshop: '#6366f1 0%, #8b5cf6 100%',
      social: '#ec4899 0%, #f472b6 100%',
      volunteering: '#06b6d4 0%, #22d3ee 100%',
      meeting: '#10b981 0%, #34d399 100%',
      other: '#f59e0b 0%, #fbbf24 100%',
    };
    return gradientMap[type] || '#6366f1 0%, #8b5cf6 100%';
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
          boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
          transform: 'translateY(-8px) scale(1.02)',
        },
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {event.image ? (
        <CardMedia
          component="img"
          height="180"
          image={event.image}
          alt={event.title}
          sx={{
            objectFit: 'cover',
          }}
        />
      ) : (
        <Box
          sx={{
            height: 180,
            background: `linear-gradient(135deg, ${getEventGradient(event.event_type)})`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
          <EventIcon sx={{ fontSize: 70, color: 'white', opacity: 0.9, zIndex: 1, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Chip
          label={event.event_type_display || event.event_type}
          size="small"
          color={getEventTypeColor(event.event_type)}
          sx={{
            mb: 1.5,
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        />
        <Typography variant="h6" component="h2" gutterBottom fontWeight={700} sx={{ mb: 1.5 }}>
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <span role="img" aria-label="Date">📅</span> {new Date(event.date).toLocaleDateString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <span role="img" aria-label="Location">📍</span> {event.location}
        </Typography>
        {event.attendee_count !== undefined && (
          <Box
            sx={{
              mt: 'auto',
              pt: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <span role="img" aria-label="Attendees">👥</span> {event.attendee_count + (isRsvped ? 1 : 0)} attending
              {event.max_attendees && ` / ${event.max_attendees} max`}
            </Typography>
          </Box>
        )}
      </CardContent>
      <CardActions sx={{ px: 3, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Button
          variant={isRsvped ? 'contained' : 'outlined'}
          color={isRsvped ? 'success' : 'primary'}
          size="small"
          startIcon={isRsvped ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
          onClick={() => onRsvp(event.id)}
          aria-pressed={isRsvped}
          sx={{
            fontWeight: 600,
            transition: 'all 0.2s ease',
          }}
        >
          {isRsvped ? 'RSVPed' : 'RSVP'}
        </Button>
        <Tooltip title={isBookmarked ? 'Remove bookmark' : 'Bookmark event'}>
          <IconButton
            onClick={() => onBookmark(event.id)}
            color={isBookmarked ? 'primary' : 'default'}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark event'}
            aria-pressed={isBookmarked}
            sx={{
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default EventCard;
