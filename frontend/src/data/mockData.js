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
    full_description: 'Start the semester off right with our Welcome Back Social! This is the perfect opportunity to reconnect with returning members and meet new faces. We\'ll have plenty of pizza, refreshments, and a variety of board games and card games set up. Come learn about all the exciting events we have planned for this semester, sign up for committees, and make new friends in a relaxed, fun atmosphere.',
    event_type: 'social',
    event_type_display: 'Social',
    date: getDateFromNow(3),
    location: 'Student Union, Room 201',
    image: null,
    attendee_count: 23,
    max_attendees: 50,
    is_active: true,
  },
  {
    id: 2,
    title: 'Python Workshop: Getting Started',
    description: "Learn Python basics and build your first project! Perfect for beginners. We'll cover variables, functions, loops, and create a simple program together.",
    full_description: 'This hands-on workshop is designed for complete beginners to programming. No prior experience required! We\'ll start with Python fundamentals including variables, data types, and basic syntax. Then we\'ll move into functions, conditional statements, and loops. By the end of the workshop, you\'ll have created your own working Python program. Laptops will be provided, but feel free to bring your own. All materials and resources will be shared after the workshop.',
    event_type: 'workshop',
    event_type_display: 'Workshop',
    date: getDateFromNow(7),
    location: 'Computer Lab 3, Engineering Building',
    image: null,
    attendee_count: 18,
    max_attendees: 25,
    is_active: true,
  },
  {
    id: 3,
    title: 'Community Park Cleanup',
    description: "Give back to our community by helping clean up Central Park! We'll provide all supplies - just bring your energy and a positive attitude.",
    full_description: 'Join us for a morning of community service! We\'re partnering with the City Parks Department to help beautify Central Park. Activities include picking up litter, planting flowers, and general park maintenance. All equipment including gloves, trash bags, and tools will be provided. Wear comfortable clothes you don\'t mind getting dirty and closed-toe shoes. We\'ll provide water and snacks. Community service hours will be verified for those who need them.',
    event_type: 'volunteering',
    event_type_display: 'Volunteering',
    date: getDateFromNow(10),
    location: 'Central Park, Main Entrance',
    image: null,
    attendee_count: 15,
    max_attendees: 30,
    is_active: true,
  },
  {
    id: 4,
    title: 'Web Development Bootcamp',
    description: 'Intensive full-day workshop covering HTML, CSS, and JavaScript. Build a complete website from scratch! Perfect for those wanting to learn web development.',
    full_description: 'This comprehensive full-day bootcamp will take you from zero to having your own website deployed online. Morning session covers HTML structure and CSS styling. After lunch, we\'ll dive into JavaScript for interactivity. You\'ll work on a project throughout the day and leave with a complete, functional personal portfolio website. Lunch will be provided. Some basic computer skills helpful but no coding experience required. Limited spots available!',
    event_type: 'workshop',
    event_type_display: 'Workshop',
    date: getDateFromNow(14),
    location: 'Computer Lab 1, Engineering Building',
    image: null,
    attendee_count: 12,
    max_attendees: 20,
    is_active: true,
  },
  {
    id: 5,
    title: 'Game Night Extravaganza',
    description: "Unwind with board games, video games, and friendly competition! We'll have a variety of games available, snacks provided, and prizes for winners.",
    full_description: 'Take a break from studying and join us for an epic game night! We\'ll have popular board games like Codenames, Ticket to Ride, and Catan, plus classic card games and video game tournaments on multiple consoles. Whether you\'re competitive or just want to hang out, there\'s something for everyone. Pizza, snacks, and drinks will be provided throughout the evening. Prizes will be awarded for tournament winners. Bring your friends or come solo and make new ones!',
    event_type: 'social',
    event_type_display: 'Social',
    date: getDateFromNow(17),
    location: 'Recreation Center, Game Room',
    image: null,
    attendee_count: 31,
    max_attendees: 60,
    is_active: true,
  },
  {
    id: 6,
    title: 'Career Panel: Tech Industry Insights',
    description: 'Hear from alumni working at top tech companies! Learn about their career paths, get advice on interviews, and network with professionals.',
    full_description: 'Featuring alumni from Google, Microsoft, Amazon, and startup companies! Our panelists will share their journey from college to their current roles, discuss what they wish they knew as students, and give insider tips on landing internships and full-time positions. Topics include: resume building, technical interview preparation, navigating the job search, and work-life balance in tech. Q&A session and networking reception to follow. Bring your questions and business cards!',
    event_type: 'meeting',
    event_type_display: 'Meeting',
    date: getDateFromNow(21),
    location: 'Auditorium, Business School',
    image: null,
    attendee_count: 45,
    max_attendees: 100,
    is_active: true,
  },
  {
    id: 7,
    title: 'Hackathon 2025: Build the Future',
    description: '24-hour hackathon! Form teams, build amazing projects, and compete for prizes. Food, drinks, and mentorship provided throughout.',
    full_description: 'Our biggest event of the year! Teams of 2-4 will have 24 hours to build a software project from scratch. Categories include: Best Overall, Best UI/UX, Best Use of AI, and Social Impact. Industry mentors will be available throughout the event. All meals, snacks, and energy drinks provided. Prizes include cash awards, tech gadgets, and internship opportunities. Sleeping areas available but optional. All skill levels welcome - we\'ll help you form teams! Sponsors include major tech companies.',
    event_type: 'workshop',
    event_type_display: 'Workshop',
    date: getDateFromNow(28),
    location: 'Innovation Hub, Tech Center',
    image: null,
    attendee_count: 52,
    max_attendees: 80,
    is_active: true,
  },
  {
    id: 8,
    title: 'Study Hall & Exam Prep',
    description: 'Collaborative study session with free snacks and tutoring! Bring your textbooks, assignments, or questions. Peer tutors available for CS, Math, and Engineering.',
    full_description: 'Midterm season can be stressful - let\'s study together! This collaborative study session provides a quiet space to focus, with peer tutors available to help with Computer Science, Mathematics, and Engineering courses. Whether you need help understanding concepts, want to work through practice problems, or just want company while studying, you\'re welcome. We\'ll have whiteboards for group work, coffee and snacks to keep you energized, and a supportive community to help you succeed.',
    event_type: 'meeting',
    event_type_display: 'Meeting',
    date: getDateFromNow(35),
    location: 'Library, Group Study Room A',
    image: null,
    attendee_count: 20,
    max_attendees: 40,
    is_active: true,
  },
  {
    id: 9,
    title: 'Food Bank Volunteer Day',
    description: 'Help sort and distribute food at the local food bank. Make a real difference in our community! Transportation provided from campus.',
    full_description: 'Give back to those in need by volunteering at the City Food Bank. We\'ll be sorting donated food items, packing boxes for families, and helping with distribution. This is a great opportunity to make a tangible impact in our community while bonding with fellow club members. No experience necessary - full training provided on site. We\'ll meet on campus and provide transportation to and from the food bank. Wear comfortable clothes and closed-toe shoes. Community service hours will be documented.',
    event_type: 'volunteering',
    event_type_display: 'Volunteering',
    date: getDateFromNow(42),
    location: 'City Food Bank, 123 Community St',
    image: null,
    attendee_count: 14,
    max_attendees: 25,
    is_active: true,
  },
  {
    id: 10,
    title: 'End of Semester Celebration',
    description: 'Celebrate a successful semester with food, music, awards, and fun! Recognize outstanding members, share memories, and look forward to next semester.',
    full_description: 'We made it through another semester - time to celebrate! Join us for our biggest party of the year featuring catered dinner, live DJ, photo booth, and awards ceremony. We\'ll recognize outstanding members, celebrate our achievements, and share a recap video of all our events this semester. This is also a great time to provide feedback and suggest ideas for next semester. Dress code is semi-formal. Bring your friends, bring your energy, and let\'s end the semester on a high note!',
    event_type: 'social',
    event_type_display: 'Social',
    date: getDateFromNow(49),
    location: 'Student Union Ballroom',
    image: null,
    attendee_count: 67,
    max_attendees: 100,
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
