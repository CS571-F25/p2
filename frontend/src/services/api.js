import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Board Members API
export const boardAPI = {
  getAllMembers: () => api.get('/board/members/'),
  getMemberById: (id) => api.get(`/board/members/${id}/`),
  searchMembers: (query) => api.get('/board/members/', { params: { search: query } }),
  filterByRole: (role) => api.get('/board/members/', { params: { role } }),
};

// Events API
export const eventsAPI = {
  getAllEvents: () => api.get('/events/'),
  getEventById: (id) => api.get(`/events/${id}/`),
  getUpcomingEvents: () => api.get('/events/upcoming/'),
  getEventStats: () => api.get('/events/stats/'),
  filterByType: (type) => api.get('/events/', { params: { type } }),
  searchEvents: (query) => api.get('/events/', { params: { search: query } }),
};

export default api;
