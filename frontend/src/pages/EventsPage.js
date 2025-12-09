import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Alert,
  CircularProgress,
} from '@mui/material';
import EventCard from '../components/EventCard';
import SectionHeader from '../components/SectionHeader';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
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
      <SectionHeader
        title="All Events"
        subtitle="Discover all the amazing events our club has to offer"
        gradient="linear-gradient(135deg, #6366f1 0%, #ec4899 100%)"
      />

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
        <SearchBar
          label="Search events"
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by title, description, or location..."
        />
        <FilterDropdown
          label="Filter by Type"
          value={typeFilter}
          onChange={setTypeFilter}
          options={[
            { value: 'all', label: 'All Types' },
            { value: 'workshop', label: 'Workshop' },
            { value: 'social', label: 'Social' },
            { value: 'volunteering', label: 'Volunteering' },
            { value: 'meeting', label: 'Meeting' },
            { value: 'other', label: 'Other' },
          ]}
        />
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
