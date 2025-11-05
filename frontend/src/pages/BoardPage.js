import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
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
import { boardAPI } from '../services/api';

function BoardPage() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await boardAPI.getAllMembers();
        setMembers(response.data.results || response.data);
        setFilteredMembers(response.data.results || response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load board members. Make sure the backend is running.');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  useEffect(() => {
    let filtered = members;

    // Apply role filter
    if (roleFilter !== 'all') {
      filtered = filtered.filter((member) => member.role === roleFilter);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.bio.toLowerCase().includes(searchQuery.toLowerCase())
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
      {error && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

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

      {/* Board Members Grid */}
      {filteredMembers.length === 0 ? (
        <Alert severity="info">No board members found matching your criteria.</Alert>
      ) : (
        <Grid container spacing={4}>
          {filteredMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {member.photo ? (
                  <CardMedia
                    component="img"
                    height="250"
                    image={member.photo}
                    alt={member.name}
                    sx={{ objectFit: 'cover' }}
                  />
                ) : (
                  <Box
                    sx={{
                      height: 250,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'grey.200',
                    }}
                  >
                    <Typography variant="h1" color="text.secondary">
                      {member.name.charAt(0)}
                    </Typography>
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {member.name}
                  </Typography>
                  <Chip label={member.role_display} color="primary" size="small" sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {member.bio}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
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
