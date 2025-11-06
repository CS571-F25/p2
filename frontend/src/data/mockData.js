/**
 * Mock data for ClubHub - Frontend only version
 * This allows the frontend to run independently without a backend
 */

// Mock Board Members Data
export const mockBoardMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'president',
    role_display: 'President',
    bio: 'Computer Science major passionate about building community and leading our club to new heights. I love organizing events and bringing people together to learn and grow.',
    photo: null,
    email: 'sarah.johnson@university.edu',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    github: 'https://github.com/sarahjohnson',
    twitter: null,
    order: 1,
    is_active: true,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'vice_president',
    role_display: 'Vice President',
    bio: 'Software Engineering student with a love for organizing events and connecting people. I enjoy helping members achieve their goals and creating memorable experiences.',
    photo: null,
    email: 'michael.chen@university.edu',
    linkedin: null,
    github: 'https://github.com/michaelchen',
    twitter: 'https://twitter.com/michaelchen',
    order: 2,
    is_active: true,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'secretary',
    role_display: 'Secretary',
    bio: 'Data Science enthusiast dedicated to keeping our club organized and efficient. I ensure smooth communication and proper documentation of all our activities.',
    photo: null,
    email: 'emily.rodriguez@university.edu',
    linkedin: 'https://linkedin.com/in/emilyrodriguez',
    github: null,
    twitter: null,
    order: 3,
    is_active: true,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'treasurer',
    role_display: 'Treasurer',
    bio: "Finance and CS double major managing our club's resources with care. I work to ensure we have the budget to make amazing events happen for our members.",
    photo: null,
    email: 'david.kim@university.edu',
    linkedin: 'https://linkedin.com/in/davidkim',
    github: null,
    twitter: null,
    order: 4,
    is_active: true,
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'event_coordinator',
    role_display: 'Event Coordinator',
    bio: 'Event planning enthusiast who loves bringing creative ideas to life. From workshops to social events, I ensure every gathering is engaging and valuable.',
    photo: null,
    email: 'aisha.patel@university.edu',
    linkedin: null,
    github: null,
    twitter: 'https://twitter.com/aishapatel',
    order: 5,
    is_active: true,
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'marketing',
    role_display: 'Marketing Director',
    bio: 'Marketing Director focused on spreading the word about our amazing club. I manage our social media, design promotional materials, and help grow our community.',
    photo: null,
    email: 'james.wilson@university.edu',
    linkedin: 'https://linkedin.com/in/jameswilson',
    github: null,
    twitter: 'https://twitter.com/jameswilson',
    order: 6,
    is_active: true,
  },
  {
    id: 7,
    name: 'Sophia Martinez',
    role: 'member',
    role_display: 'Board Member',
    bio: 'Board member specializing in community outreach and partnerships. I work on building relationships with other organizations and creating collaboration opportunities.',
    photo: null,
    email: 'sophia.martinez@university.edu',
    linkedin: 'https://linkedin.com/in/sophiamartinez',
    github: null,
    twitter: null,
    order: 7,
    is_active: true,
  },
  {
    id: 8,
    name: 'Ryan Thompson',
    role: 'member',
    role_display: 'Board Member',
    bio: 'Tech enthusiast and board member focused on our technical infrastructure. I help maintain our website, manage our tech resources, and provide technical support.',
    photo: null,
    email: 'ryan.thompson@university.edu',
    linkedin: null,
    github: 'https://github.com/ryanthompson',
    twitter: null,
    order: 8,
    is_active: true,
  },
];

// Helper function to get date string
const getDateFromNow = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

// Mock Events Data
export const mockEvents = [
  {
    id: 1,
    title: 'Welcome Back Social',
    description: 'Join us for pizza, games, and networking to kick off the new semester! Meet fellow members, learn about upcoming events, and enjoy some free food.',
    event_type: 'social',
    event_type_display: 'Social',
    date: getDateFromNow(3),
    location: 'Student Union, Room 201',
    image: null,
    attendee_count: 23,
    is_active: true,
  },
  {
    id: 2,
    title: 'Python Workshop: Getting Started',
    description: "Learn Python basics and build your first project! Perfect for beginners. We'll cover variables, functions, loops, and create a simple program together.",
    event_type: 'workshop',
    event_type_display: 'Workshop',
    date: getDateFromNow(7),
    location: 'Computer Lab 3, Engineering Building',
    image: null,
    attendee_count: 18,
    is_active: true,
  },
  {
    id: 3,
    title: 'Community Park Cleanup',
    description: "Give back to our community by helping clean up Central Park! We'll provide all supplies - just bring your energy and a positive attitude.",
    event_type: 'volunteering',
    event_type_display: 'Volunteering',
    date: getDateFromNow(10),
    location: 'Central Park, Main Entrance',
    image: null,
    attendee_count: 15,
    is_active: true,
  },
  {
    id: 4,
    title: 'Web Development Bootcamp',
    description: 'Intensive full-day workshop covering HTML, CSS, and JavaScript. Build a complete website from scratch! Perfect for those wanting to learn web development.',
    event_type: 'workshop',
    event_type_display: 'Workshop',
    date: getDateFromNow(14),
    location: 'Computer Lab 1, Engineering Building',
    image: null,
    attendee_count: 12,
    is_active: true,
  },
  {
    id: 5,
    title: 'Game Night Extravaganza',
    description: "Unwind with board games, video games, and friendly competition! We'll have a variety of games available, snacks provided, and prizes for winners.",
    event_type: 'social',
    event_type_display: 'Social',
    date: getDateFromNow(17),
    location: 'Recreation Center, Game Room',
    image: null,
    attendee_count: 31,
    is_active: true,
  },
  {
    id: 6,
    title: 'Career Panel: Tech Industry Insights',
    description: 'Hear from alumni working at top tech companies! Learn about their career paths, get advice on interviews, and network with professionals.',
    event_type: 'meeting',
    event_type_display: 'Meeting',
    date: getDateFromNow(21),
    location: 'Auditorium, Business School',
    image: null,
    attendee_count: 45,
    is_active: true,
  },
  {
    id: 7,
    title: 'Hackathon 2025: Build the Future',
    description: '24-hour hackathon! Form teams, build amazing projects, and compete for prizes. Food, drinks, and mentorship provided throughout.',
    event_type: 'workshop',
    event_type_display: 'Workshop',
    date: getDateFromNow(28),
    location: 'Innovation Hub, Tech Center',
    image: null,
    attendee_count: 52,
    is_active: true,
  },
  {
    id: 8,
    title: 'Study Hall & Exam Prep',
    description: 'Collaborative study session with free snacks and tutoring! Bring your textbooks, assignments, or questions. Peer tutors available for CS, Math, and Engineering.',
    event_type: 'meeting',
    event_type_display: 'Meeting',
    date: getDateFromNow(35),
    location: 'Library, Group Study Room A',
    image: null,
    attendee_count: 20,
    is_active: true,
  },
  {
    id: 9,
    title: 'Food Bank Volunteer Day',
    description: 'Help sort and distribute food at the local food bank. Make a real difference in our community! Transportation provided from campus.',
    event_type: 'volunteering',
    event_type_display: 'Volunteering',
    date: getDateFromNow(42),
    location: 'City Food Bank, 123 Community St',
    image: null,
    attendee_count: 14,
    is_active: true,
  },
  {
    id: 10,
    title: 'End of Semester Celebration',
    description: 'Celebrate a successful semester with food, music, awards, and fun! Recognize outstanding members, share memories, and look forward to next semester.',
    event_type: 'social',
    event_type_display: 'Social',
    date: getDateFromNow(49),
    location: 'Student Union Ballroom',
    image: null,
    attendee_count: 67,
    is_active: true,
  },
];

// Mock Event Stats
export const mockEventStats = {
  total_events: mockEvents.length,
  upcoming_events: mockEvents.length, // All events are in the future for demo
};

// Helper function to filter events
export const getUpcomingEvents = (limit = 5) => {
  return mockEvents.slice(0, limit);
};

// Helper function to filter board members by role
export const filterBoardMembersByRole = (role) => {
  if (role === 'all') return mockBoardMembers;
  return mockBoardMembers.filter((member) => member.role === role);
};

// Helper function to search board members
export const searchBoardMembers = (query) => {
  const lowerQuery = query.toLowerCase();
  return mockBoardMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(lowerQuery) ||
      member.bio.toLowerCase().includes(lowerQuery) ||
      member.role_display.toLowerCase().includes(lowerQuery)
  );
};

// Helper function to filter events by type
export const filterEventsByType = (type) => {
  if (type === 'all') return mockEvents;
  return mockEvents.filter((event) => event.event_type === type);
};

// Helper function to search events
export const searchEvents = (query) => {
  const lowerQuery = query.toLowerCase();
  return mockEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(lowerQuery) ||
      event.description.toLowerCase().includes(lowerQuery) ||
      event.location.toLowerCase().includes(lowerQuery)
  );
};
