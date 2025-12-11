import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Alert,
  CircularProgress,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import SectionHeader from '../components/SectionHeader';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import { mockEvents } from '../data/mockData';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [viewFilter, setViewFilter] = useState('all');
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
      setEvents(mockEvents);
      setFilteredEvents(mockEvents);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = events;

    // Apply view filter (all/bookmarked/rsvped)
    if (viewFilter === 'bookmarked') {
      filtered = filtered.filter((event) => bookmarks.includes(event.id));
    } else if (viewFilter === 'rsvped') {
      filtered = filtered.filter((event) => rsvps.includes(event.id));
    }

    // Apply type filter
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
  }, [searchQuery, typeFilter, viewFilter, events, bookmarks, rsvps]);

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
        <ToggleButtonGroup
          value={viewFilter}
          exclusive
          onChange={(e, newValue) => newValue && setViewFilter(newValue)}
          aria-label="Filter events by status"
          size="small"
          sx={{
            ml: 'auto',
            '& .MuiToggleButton-root': {
              px: 2,
              py: 1,
              fontWeight: 600,
            },
          }}
        >
          <ToggleButton value="all" aria-label="Show all events">
            <EventIcon sx={{ mr: 1 }} />
            All
          </ToggleButton>
          <ToggleButton value="bookmarked" aria-label="Show bookmarked events">
            <BookmarkIcon sx={{ mr: 1 }} />
            Bookmarked ({bookmarks.length})
          </ToggleButton>
          <ToggleButton value="rsvped" aria-label="Show RSVPed events">
            RSVPed ({rsvps.length})
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Results count */}
      {(searchQuery || typeFilter !== 'all' || viewFilter !== 'all') && (
        <Box sx={{ mb: 3 }} role="status" aria-live="polite" aria-atomic="true">
          <Typography variant="body2" color="text.secondary">
            Showing {filteredEvents.length} of {events.length} events
            {viewFilter === 'bookmarked' && ' (Bookmarked)'}
            {viewFilter === 'rsvped' && ' (RSVPed)'}
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

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        open={modalOpen}
        onClose={handleModalClose}
        isRsvped={selectedEvent ? rsvps.includes(selectedEvent.id) : false}
        onRsvp={handleRsvp}
      />
    </Container>
  );
}

export default EventsPage;
