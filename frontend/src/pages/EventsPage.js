import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
  CircularProgress,
} from '@mui/material';
import EventCard from '../components/EventCard';
import { mockEvents } from '../data/mockData';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for realistic feel
    setTimeout(() => {
      setEvents(mockEvents);
      setFilteredEvents(mockEvents);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = events;

    // Apply type filter first
    if (typeFilter !== 'all') {
      filtered = filtered.filter((event) => event.event_type === typeFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(lowerQuery) ||
          event.description.toLowerCase().includes(lowerQuery) ||
          event.location.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredEvents(filtered);
  }, [searchQuery, typeFilter, events]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 6,
          py: 6,
          px: 3,
          background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
          borderRadius: 5,
          color: 'white',
          boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom fontWeight={800}>
          All Events
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', opacity: 0.95 }}>
          Discover all the amazing events our club has to offer
        </Typography>
      </Box>

      {/* Search and Filter */}
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          p: 3,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRadius: 4,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        <TextField
          label="Search events"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            flexGrow: 1,
            minWidth: 200,
            '& .MuiOutlinedInput-root': {
              bgcolor: 'white',
            },
          }}
          placeholder="Search by title, description, or location..."
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Type</InputLabel>
          <Select
            value={typeFilter}
            label="Filter by Type"
            onChange={(e) => setTypeFilter(e.target.value)}
            sx={{
              bgcolor: 'white',
            }}
          >
            <MenuItem value="all">All Types</MenuItem>
            <MenuItem value="workshop">Workshop</MenuItem>
            <MenuItem value="social">Social</MenuItem>
            <MenuItem value="volunteering">Volunteering</MenuItem>
            <MenuItem value="meeting">Meeting</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Results count */}
      {(searchQuery || typeFilter !== 'all') && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Showing {filteredEvents.length} of {events.length} events
          </Typography>
        </Box>
      )}

      {/* Events Grid */}
      {filteredEvents.length === 0 ? (
        <Alert severity="info">
          No events found matching your criteria. Try adjusting your search or filters.
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {filteredEvents.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default EventsPage;
