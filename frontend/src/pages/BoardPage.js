import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Alert,
  CircularProgress,
} from '@mui/material';
import BoardMemberCard from '../components/BoardMemberCard';
import SectionHeader from '../components/SectionHeader';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import { mockBoardMembers, filterBoardMembersByRole, searchBoardMembers } from '../data/mockData';

function BoardPage() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for realistic feel
    setTimeout(() => {
      setMembers(mockBoardMembers);
      setFilteredMembers(mockBoardMembers);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = members;

    // Apply role filter first
    if (roleFilter !== 'all') {
      filtered = filterBoardMembersByRole(roleFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(lowerQuery) ||
          member.bio.toLowerCase().includes(lowerQuery) ||
          member.role_display.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredMembers(filtered);
  }, [searchQuery, roleFilter, members]);

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
        title="Meet Our Board"
        subtitle="Our dedicated team of leaders working to make our club the best it can be"
        gradient="linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)"
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
          label="Search members"
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by name, role, or bio..."
        />
        <FilterDropdown
          label="Filter by Role"
          value={roleFilter}
          onChange={setRoleFilter}
          options={[
            { value: 'all', label: 'All Roles' },
            { value: 'president', label: 'President' },
            { value: 'vice_president', label: 'Vice President' },
            { value: 'secretary', label: 'Secretary' },
            { value: 'treasurer', label: 'Treasurer' },
            { value: 'event_coordinator', label: 'Event Coordinator' },
            { value: 'marketing', label: 'Marketing Director' },
            { value: 'member', label: 'Board Member' },
          ]}
        />
      </Box>

      {/* Results count */}
      {(searchQuery || roleFilter !== 'all') && (
        <Box sx={{ mb: 3 }} role="status" aria-live="polite" aria-atomic="true">
          <Typography variant="body2" color="text.secondary">
            Showing {filteredMembers.length} of {members.length} members
          </Typography>
        </Box>
      )}

      {/* Board Members Grid */}
      {filteredMembers.length === 0 ? (
        <Alert severity="info">
          No board members found matching your criteria. Try adjusting your search or filters.
        </Alert>
      ) : (
        <Grid container spacing={4}>
          {filteredMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <BoardMemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default BoardPage;
