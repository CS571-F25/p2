import React, { useState, useEffect, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Alert,
  CircularProgress,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import HeroSection from '../components/HeroSection';
import { mockEventStats, getUpcomingEvents } from '../data/mockData';

function HomePage() {
  const [stats, setStats] = useState({ total_events: 0, upcoming_events: 0 });
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('eventBookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [rsvps, setRsvps] = useState(() => {
    const saved = localStorage.getItem('eventRsvps');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('eventBookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('eventRsvps', JSON.stringify(rsvps));
  }, [rsvps]);

  const handleBookmark = useCallback((eventId) => {
    setBookmarks((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  }, []);

  const handleRsvp = useCallback((eventId) => {
    setRsvps((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  useEffect(() => {
    // Simulate loading delay for realistic feel
    setTimeout(() => {
      setStats(mockEventStats);
      setUpcomingEvents(getUpcomingEvents(6)); // Show 6 events on home page
      setLoading(false);
    }, 500);
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
      {/* Hero Section */}
      <HeroSection
        title="Welcome to ClubHub"
        subtitle="Connect, Learn, and Grow Together"
        description="Join our vibrant community of students dedicated to learning, networking, and making a difference. Explore events, meet our amazing board members, and become part of something special."
        primaryButton={{ label: 'Meet the Board', to: '/board' }}
        secondaryButton={{ label: 'View All Events', to: '/events' }}
      />

      {/* Stats Section */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              textAlign: 'center',
              py: 4,
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 48px rgba(99, 102, 241, 0.4)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              },
            }}
          >
            <EventIcon sx={{ fontSize: 56, mb: 1, position: 'relative', zIndex: 1, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }} />
            <Typography variant="h3" component="p" fontWeight={800} sx={{ position: 'relative', zIndex: 1 }}>
              {stats.upcoming_events}
            </Typography>
            <Typography variant="h6" component="p" fontWeight={600} sx={{ position: 'relative', zIndex: 1 }}>Upcoming Events</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              textAlign: 'center',
              py: 4,
              background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(236, 72, 153, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 48px rgba(236, 72, 153, 0.4)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              },
            }}
          >
            <GroupIcon sx={{ fontSize: 56, mb: 1, position: 'relative', zIndex: 1, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }} />
            <Typography variant="h3" component="p" fontWeight={800} sx={{ position: 'relative', zIndex: 1 }}>
              8
            </Typography>
            <Typography variant="h6" component="p" fontWeight={600} sx={{ position: 'relative', zIndex: 1 }}>Board Members</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Club Mission Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
          Our Mission
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 3 }}>
          ClubHub is dedicated to fostering a supportive community where students can develop their skills,
          build meaningful connections, and make a positive impact. Through workshops, social events, and
          volunteer opportunities, we create experiences that help our members grow both personally and professionally.
        </Typography>
      </Box>

      {/* Upcoming Events Preview */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight={700} sx={{ mb: 3 }}>
          Upcoming Events
        </Typography>
        {upcomingEvents.length === 0 ? (
          <Alert severity="info">No upcoming events at the moment. Check back soon!</Alert>
        ) : (
          <Grid container spacing={3}>
            {upcomingEvents.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <EventCard
                  event={event}
                  onClick={() => handleEventClick(event)}
                  isBookmarked={bookmarks.includes(event.id)}
                  isRsvped={rsvps.includes(event.id)}
                  onBookmark={handleBookmark}
                  onRsvp={handleRsvp}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          px: 4,
          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
          borderRadius: 5,
          color: 'white',
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
            background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)',
            animation: 'shimmer 5s ease-in-out infinite',
          },
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom fontWeight={800} sx={{ position: 'relative', zIndex: 1 }}>
          Ready to Get Involved?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 600, mx: 'auto', fontSize: '1.1rem', opacity: 0.95, position: 'relative', zIndex: 1 }}>
          Join us today and become part of an amazing community of learners, leaders, and changemakers!
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to="/board"
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 700,
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            '&:hover': {
              bgcolor: 'grey.50',
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
            },
          }}
        >
          Meet Our Team
        </Button>
      </Box>

      {/* Event Details Modal */}
      <EventModal event={selectedEvent} open={modalOpen} onClose={handleModalClose} />
    </Container>
  );
}

export default HomePage;
