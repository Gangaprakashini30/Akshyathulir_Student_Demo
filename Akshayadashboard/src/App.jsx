import React, { useState } from 'react';
import Dashboard from './dashboard';
import Internships from './pages/Career/Internships';
import StartupProjects from './pages/Career/StartupProjects';
import ProjectDetail from './pages/Career/ProjectDetail';
import PartTimeJobs from './pages/Career/PartTimeJobs';
import JobDetail from './pages/Career/JobDetail';
import InternshipDetail from './pages/Career/InternshipDetail';
import Profile from './pages/Project';
import CampusAmbassador from './pages/CampusAmbassador';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Box, CssBaseline, Drawer, AppBar, Toolbar, List, Typography,
  ListItemButton, ListItemIcon, ListItemText, Collapse, ThemeProvider, IconButton, Badge
} from '@mui/material';
import {
  ExpandLess, ExpandMore, Home, Dashboard as DashboardIcon, Person, School, Work,
  Assignment, EmojiEvents, Groups, Folder, Settings, Notifications, Star, Search
} from '@mui/icons-material';
import theme from './theme';


const drawerWidth = 280;


const menuStructure = [
  { text: 'Home', icon: <Home />, type: 'single', path: '/' },
  { text: 'Dashboard', icon: <DashboardIcon />, type: 'single', path: '/dashboard' },
  { text: 'Profile', icon: <Person />, type: 'single', path: '/profile' },
  {
    text: 'Learning', icon: <School />, type: 'nested',
    children: [
      { text: 'My Courses', path: '/learning/my-courses' },
      { text: 'Skill Development', path: '/learning/skills' },
      { text: 'Certifications', path: '/learning/certifications' },
      { text: 'Webinars', path: '/learning/webinars' },
      { text: 'Learning Path', path: '/learning/path' }
    ]
  },
  {
    text: 'Career', icon: <Work />, type: 'nested',
    children: [
      { text: 'Internships', path: '/career/internships' },
      { text: 'Startup Projects', path: '/career/startups' },
      { text: 'Part-time Jobs', path: '/career/jobs' }
    ]
  },
  {
    text: 'Applications', icon: <Assignment />, type: 'nested',
    children: [
      { text: 'My Applications', path: '/applications/my-apps' },
      { text: 'Student Grants', path: '/applications/grants' },
      { text: 'Project Funding', path: '/applications/funding' }
    ]
  },
  {
    text: 'Competitions', icon: <EmojiEvents />, type: 'nested',
    children: [
      { text: 'Hackathons', path: '/competitions/hackathons' },
      { text: 'Competitions', path: '/competitions/list' },
      { text: 'Idea Submission', path: '/competitions/ideas' }
    ]
  },
  {
    text: 'Network', icon: <Groups />, type: 'nested',
    children: [
      { text: 'Mentorship', path: '/network/mentorship' },
      { text: 'Student Network', path: '/network/peers' },
      { text: 'Events', path: '/network/events' },
      { text: 'Discussion Forum', path: '/network/forum' }
    ]
  },
  {
    text: 'Resources', icon: <Folder />, type: 'nested',
    children: [
      { text: 'Templates Library', path: '/resources/templates' },
      { text: 'Toolkits', path: '/resources/toolkits' },
      { text: 'Case Studies', path: '/resources/cases' },
      { text: 'Research Papers', path: '/resources/papers' }
    ]
  },
  { text: 'Campus Ambassador', icon: <Star />, type: 'single', path: '/ambassador', highlight: '#ffeb3b' },
  { text: 'Settings', icon: <Settings />, type: 'single', path: '/settings' },
];

function NavItem({ item, openMenus, handleToggle }) {
  const location = useLocation();
  const isNested = item.type === 'nested';

  const isActive = item.path === location.pathname;

  return (
    <>
      <ListItemButton
        component={isNested ? 'div' : Link}
        to={isNested ? undefined : item.path}
        onClick={() => isNested ? handleToggle(item.text) : null}
        selected={isActive}
        sx={{
          borderRadius: '8px',
          mb: 0.5,
          mx: 1,
          '&.Mui-selected': { bgcolor: 'rgba(255,255,255,0.2)' },
          '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
        }}
      >
        <ListItemIcon sx={{ color: item.highlight || 'white', minWidth: 40 }}>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
        {isNested && (openMenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {isNested && (
        <Collapse in={openMenus[item.text]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((subItem) => (
              <ListItemButton
                key={subItem.text}
                component={Link}
                to={subItem.path}
                selected={location.pathname === subItem.path}
                sx={{
                  pl: 7, py: 0.5, borderRadius: '8px', mx: 1,
                  '&.Mui-selected': { color: '#81c784', bgcolor: 'transparent' },
                  '&:hover': { color: '#81c784' }
                }}
              >
                <ListItemText primary={subItem.text} primaryTypographyProps={{ fontSize: '0.85rem' }} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default function App() {
  const [openMenus, setOpenMenus] = useState({});

  const handleToggle = (text) => {
    setOpenMenus(prev => ({ ...prev, [text]: !prev[text] }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'primary.main', boxShadow: 'none' }}>
            <Toolbar>
              <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontWeight: 700 }}>
                STUDENT PORTAL
              </Typography>
              <IconButton color="inherit"><Search /></IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error"><Notifications /></Badge>
              </IconButton>
              <IconButton color="inherit"><Person /></IconButton>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'primary.main', color: 'white' },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto', mt: 2 }}>
              <List>
                {menuStructure.map((item) => (
                  <NavItem key={item.text} item={item} openMenus={openMenus} handleToggle={handleToggle} />
                ))}
              </List>
            </Box>
          </Drawer>

          <Box component="main" sx={{ flexGrow: 1, p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
            <Toolbar />
            <Routes>
              {/* Dashboard & Home */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/profile" element={<Profile />} />

              {/* Learning Section (Placeholders for now) */}
              <Route path="/learning/my-courses" element={<Typography variant="h4">My Courses Page</Typography>} />
              <Route path="/learning/skills" element={<Typography variant="h4">Skill Development Page</Typography>} />

              {/* Career Section - Live Components */}
              <Route path="/career/internships" element={<Internships />} />
             <Route path="internship/:id" element={<InternshipDetail />} />
              <Route path="/career/startups" element={<StartupProjects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/career/jobs" element={<PartTimeJobs />} />
              <Route path="/job/:id" element={<JobDetail />} />

              <Route path="/campus-ambassador" element={<CampusAmbassador />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}