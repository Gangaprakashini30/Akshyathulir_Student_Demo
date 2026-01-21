import React from 'react';
import { 
  Box, Grid, Typography, Card, Stack, Avatar, Button, useTheme, IconButton 
} from '@mui/material';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, AreaChart, Area, Cell 
} from 'recharts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Mock Data for the Graphs
const applicationData = [
  { name: 'Jan', apps: 4 },
  { name: 'Feb', apps: 7 },
  { name: 'Mar', apps: 5 },
  { name: 'Apr', apps: 12 },
  { name: 'May', apps: 18 },
  { name: 'Jun', apps: 15 },
];

const skillData = [
  { subject: 'IT', level: 85 },
  { subject: 'Robotics', level: 60 },
  { subject: 'Cyber', level: 75 },
  { subject: 'AI/ML', level: 40 },
];

const weeklyLearning = [
  { day: 'Mon', hrs: 2 },
  { day: 'Tue', hrs: 5 },
  { day: 'Wed', hrs: 3 },
  { day: 'Thu', hrs: 8 },
  { day: 'Fri', hrs: 4 },
  { day: 'Sat', hrs: 1 },
  { day: 'Sun', hrs: 2 },
];

const DashboardWithGraphs = () => {
  const brandDark = '#1a3e2f';
  const brandVibrant = '#61de5dff';

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f4f7f5', minHeight: '100vh' }}>
      
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: brandDark }}>Analytics Hub</Typography>
        <Button startIcon={<AssessmentIcon />} variant="contained" sx={{ bgcolor: brandDark, borderRadius: 2 }}>
          Download Report
        </Button>
      </Stack>

      <Grid container spacing={3}>
        
        {/* 1. Main Line Chart: Application Activity */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, borderRadius: 4, height: '400px', boxShadow: '0px 4px 20px rgba(0,0,0,0.03)' }}>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Application Activity</Typography>
                <Typography variant="caption" color="textSecondary">Monthly trend of internship & project applications</Typography>
              </Box>
              <IconButton><MoreVertIcon /></IconButton>
            </Stack>
            
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }} />
                <Line 
                  type="monotone" 
                  dataKey="apps" 
                  stroke={brandDark} 
                  strokeWidth={4} 
                  dot={{ r: 6, fill: brandDark, strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        {/* 2. Bar Chart: Skill Proficiency */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: 4, height: '400px' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Domain Proficiency</Typography>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={skillData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="subject" type="category" axisLine={false} tickLine={false} tick={{fontWeight: 700, fontSize: 12}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="level" radius={[0, 10, 10, 0]} barSize={20}>
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? brandDark : brandVibrant} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        {/* 3. Area Chart: Weekly Learning Hours */}
        <Grid item xs={12}>
          <Card sx={{ p: 3, borderRadius: 4, bgcolor: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Engagement Pulse</Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>Time spent on Learning & Resources this week</Typography>
            
            <Box sx={{ height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyLearning}>
                  <defs>
                    <linearGradient id="colorHrs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={brandVibrant} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={brandVibrant} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area 
                    type="smooth" 
                    dataKey="hrs" 
                    stroke={brandVibrant} 
                    fillOpacity={1} 
                    fill="url(#colorHrs)" 
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default DashboardWithGraphs;