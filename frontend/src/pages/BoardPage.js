import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
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
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
          Meet Our Board
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Our dedicated team of leaders working to make our club the best it can be
        </Typography>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Search members"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flexGrow: 1, minWidth: 200 }}
          placeholder="Search by name, role, or bio..."
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Role</InputLabel>
          <Select
            value={roleFilter}
            label="Filter by Role"
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <MenuItem value="all">All Roles</MenuItem>
            <MenuItem value="president">President</MenuItem>
            <MenuItem value="vice_president">Vice President</MenuItem>
            <MenuItem value="secretary">Secretary</MenuItem>
            <MenuItem value="treasurer">Treasurer</MenuItem>
            <MenuItem value="event_coordinator">Event Coordinator</MenuItem>
            <MenuItem value="marketing">Marketing Director</MenuItem>
            <MenuItem value="member">Board Member</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Results count */}
      {(searchQuery || roleFilter !== 'all') && (
        <Box sx={{ mb: 3 }}>
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
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { boxShadow: 6 } }}>
                {member.photo ? (
                  <Box
                    component="img"
                    src={member.photo}
                    alt={member.name}
                    sx={{
                      width: '100%',
                      height: 250,
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 250,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${
                        member.role === 'president' ? '#667eea 0%, #764ba2 100%' :
                        member.role === 'vice_president' ? '#f093fb 0%, #f5576c 100%' :
                        member.role === 'secretary' ? '#4facfe 0%, #00f2fe 100%' :
                        member.role === 'treasurer' ? '#43e97b 0%, #38f9d7 100%' :
                        member.role === 'event_coordinator' ? '#fa709a 0%, #fee140 100%' :
                        member.role === 'marketing' ? '#30cfd0 0%, #330867 100%' :
                        '#a8edea 0%, #fed6e3 100%'
                      })`,
                    }}
                  >
                    <Typography variant="h1" sx={{ color: 'white', fontWeight: 700, fontSize: 80 }}>
                      {member.name.charAt(0)}
                    </Typography>
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {member.name}
                  </Typography>
                  <Chip
                    label={member.role_display}
                    color={
                      member.role === 'president' ? 'primary' :
                      member.role === 'vice_president' ? 'secondary' :
                      member.role === 'secretary' ? 'info' :
                      member.role === 'treasurer' ? 'success' :
                      'default'
                    }
                    size="small"
                    sx={{ mb: 2, width: 'fit-content' }}
                  />
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ flexGrow: 1 }}>
                    {member.bio}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                    {member.email && (
                      <IconButton
                        size="small"
                        href={`mailto:${member.email}`}
                        aria-label="Email"
                        color="primary"
                      >
                        <EmailIcon />
                      </IconButton>
                    )}
                    {member.linkedin && (
                      <IconButton
                        size="small"
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        color="primary"
                      >
                        <LinkedInIcon />
                      </IconButton>
                    )}
                    {member.github && (
                      <IconButton
                        size="small"
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        color="primary"
                      >
                        <GitHubIcon />
                      </IconButton>
                    )}
                    {member.twitter && (
                      <IconButton
                        size="small"
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        color="primary"
                      >
                        <TwitterIcon />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default BoardPage;
