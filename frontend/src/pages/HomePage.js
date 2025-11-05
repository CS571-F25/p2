import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Alert,
  CircularProgress,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import { eventsAPI } from '../services/api';

function HomePage() {
  const [stats, setStats] = useState({ total_events: 0, upcoming_events: 0 });
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, eventsRes] = await Promise.all([
          eventsAPI.getEventStats(),
          eventsAPI.getUpcomingEvents(),
        ]);
        setStats(statsRes.data);
        setUpcomingEvents(eventsRes.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data. Make sure the backend is running.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          px: 2,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 2,
          color: 'white',
          mb: 6,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom fontWeight={700}>
          Welcome to ClubHub
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          Connect, Learn, and Grow Together
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
          Join our vibrant community of students dedicated to learning, networking, and making a difference.
          Explore events, meet our amazing board members, and become part of something special.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/board"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.100' },
            }}
          >
            Meet the Board
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': { borderColor: 'grey.100', bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            View Events
          </Button>
        </Box>
      </Box>

      {/* Stats Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              textAlign: 'center',
              py: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}
          >
            <EventIcon sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="h3" fontWeight={700}>
              {stats.upcoming_events}
            </Typography>
            <Typography variant="h6">Upcoming Events</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              textAlign: 'center',
              py: 3,
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              color: 'white',
            }}
          >
            <GroupIcon sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="h3" fontWeight={700}>
              {stats.total_events}
            </Typography>
            <Typography variant="h6">Total Events</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Upcoming Events Preview */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom fontWeight={700} sx={{ mb: 3 }}>
          Upcoming Events
        </Typography>
        {upcomingEvents.length === 0 ? (
          <Alert severity="info">No upcoming events at the moment. Check back soon!</Alert>
        ) : (
          <Grid container spacing={3}>
            {upcomingEvents.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {event.image && (
                    <CardMedia
                      component="img"
                      height="140"
                      image={event.image}
                      alt={event.title}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={event.event_type_display}
                      size="small"
                      color="primary"
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      📍 {event.location}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default HomePage;
