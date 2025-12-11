import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Chip,
  Divider,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function EventModal({ event, open, onClose, isRsvped, onRsvp }) {
  if (!event) return null;

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="event-dialog-title"
      aria-describedby="event-dialog-description"
      PaperProps={{
        sx: {
          borderRadius: 4,
          maxHeight: '90vh',
        },
      }}
    >
      {/* Header with Gradient Background */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${getEventGradient(event.event_type)})`,
          color: 'white',
          p: 3,
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flexGrow: 1, pr: 2 }}>
          <Chip
            label={event.event_type_display || event.event_type}
            size="small"
            sx={{
              mb: 1.5,
              fontWeight: 600,
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            }}
          />
          <DialogTitle
            id="event-dialog-title"
            sx={{
              p: 0,
              color: 'white',
              fontSize: '2rem',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            {event.title}
          </DialogTitle>
        </Box>
        <IconButton
          aria-label="Close dialog"
          onClick={onClose}
          sx={{
            color: 'white',
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: 3 }}>
        {/* Date and Time */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <EventIcon color="primary" />
            <Typography variant="h6" fontWeight={700}>
              Date & Time
            </Typography>
          </Box>
          <Typography variant="body1" color="text.primary" sx={{ ml: 4 }}>
            {formatDate(event.date)}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, ml: 4 }}>
            <AccessTimeIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {formatTime(event.date)}
              {event.end_date && ` - ${formatTime(event.end_date)}`}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Location */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h6" fontWeight={700}>
              Location
            </Typography>
          </Box>
          <Typography variant="body1" color="text.primary" sx={{ ml: 4 }}>
            {event.location}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Description */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            About this Event
          </Typography>
          <Typography
            id="event-dialog-description"
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.8 }}
          >
            {event.description}
          </Typography>
          {event.full_description && (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mt: 2 }}
            >
              {event.full_description}
            </Typography>
          )}
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Attendance Info */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <PeopleIcon color="primary" />
            <Typography variant="h6" fontWeight={700}>
              Attendance
            </Typography>
          </Box>
          <Typography variant="body1" color="text.primary" sx={{ ml: 4 }}>
            {event.attendee_count !== undefined && (
              <>
                <strong>{event.attendee_count + (isRsvped ? 1 : 0)}</strong> people are attending
                {event.max_attendees && (
                  <>
                    {' '}
                    <span role="img" aria-label="separator">
                      •
                    </span>{' '}
                    <strong>{event.max_attendees - event.attendee_count - (isRsvped ? 1 : 0)}</strong> spots
                    remaining
                  </>
                )}
              </>
            )}
            {event.max_attendees && event.attendee_count >= event.max_attendees && !isRsvped && (
              <Chip
                label="Event Full"
                color="error"
                size="small"
                sx={{ ml: 1, fontWeight: 600 }}
              />
            )}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, pt: 0 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderRadius: 2,
            px: 3,
            fontWeight: 600,
          }}
        >
          Close
        </Button>
        <Button
          variant="contained"
          onClick={() => onRsvp(event.id)}
          startIcon={isRsvped ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
          aria-pressed={isRsvped}
          sx={{
            borderRadius: 2,
            px: 4,
            fontWeight: 700,
            background: isRsvped
              ? 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
              : `linear-gradient(135deg, ${getEventGradient(event.event_type)})`,
            boxShadow: isRsvped
              ? '0 4px 12px rgba(16, 185, 129, 0.3)'
              : '0 4px 12px rgba(99, 102, 241, 0.3)',
            '&:hover': {
              boxShadow: isRsvped
                ? '0 6px 20px rgba(16, 185, 129, 0.4)'
                : '0 6px 20px rgba(99, 102, 241, 0.4)',
              transform: 'translateY(-2px)',
            },
          }}
          disabled={!isRsvped && event.max_attendees && event.attendee_count >= event.max_attendees}
        >
          {event.max_attendees && event.attendee_count >= event.max_attendees && !isRsvped
            ? 'Event Full'
            : isRsvped
            ? 'RSVPed - Click to Cancel'
            : 'RSVP / Register'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EventModal;
