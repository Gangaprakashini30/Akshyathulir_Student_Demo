import React from 'react';
import { 
  Box, Typography, Button, Grid, Paper, Card, CardContent, 
  Stepper, Step, StepLabel, Container, Avatar, Stack 
} from '@mui/material';
import { EmojiEvents, Groups, Stars, WorkspacePremium } from '@mui/icons-material';

const CampusAmbassador = () => {
  const steps = ['Application Submitted', 'Interview Rounds', 'Onboarding', 'Active CA'];

  return (
    <Box sx={{ bgcolor: '#f4f7f6', minHeight: '100vh', pb: 10 }}>
      {/* 1. Hero / Banner Section */}
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 4, md: 8 }, 
          bgcolor: '#1a3d35', // Match your dashboard green
          color: 'white',
          borderRadius: 0,
          textAlign: 'center'
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 4, opacity: 0.8 }}>
          Join the Movement
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, mt: 1, mb: 3 }}>
          Campus Ambassador <br/> Program 2026
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 4, opacity: 0.9 }}>
          Represent NEXUS at your college. Build your network, gain industry experience, 
          and earn exclusive rewards while you study.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{ bgcolor: '#64ffda', color: '#1a3d35', fontWeight: 700, px: 6 }}
        >
          Apply Now
        </Button>
      </Paper>

      <Container maxWidth="lg" sx={{ mt: -5 }}>
        {/* 2. Program Progress (For existing applicants) */}
        <Paper sx={{ p: 4, borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.05)', mb: 6 }}>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 700 }}>Your Application Status</Typography>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>

        {/* 3. Perks Grid */}
        <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 800, color: '#1a3d35' }}>
          What's in it for you?
        </Typography>
        
        <Grid container spacing={4}>
          {[
            { title: 'Certificates', icon: <WorkspacePremium fontSize="large" />, desc: 'Official CA certificate from NEXUS.' },
            { title: 'Mentorship', icon: <Groups fontSize="large" />, desc: 'Monthly calls with industry leaders.' },
            { title: 'Swag & Rewards', icon: <EmojiEvents fontSize="large" />, desc: 'Branded T-shirts, bags, and tech gadgets.' },
            { title: 'VIP Access', icon: <Stars fontSize="large" />, desc: 'Priority entry to all tech summits.' }
          ].map((perk, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', borderRadius: 4, transition: '0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: '#1a3d35', mb: 2 }}>{perk.icon}</Box>
                  <Typography variant="h6" fontWeight={700}>{perk.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{perk.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 4. Testimonial / Wall of Fame */}
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 700 }}>Meet Our Top Ambassadors</Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            {[1, 2, 3, 4].map((i) => (
              <Avatar 
                key={i} 
                src={`https://i.pravatar.cc/150?img=${i+10}`} 
                sx={{ width: 60, height: 60, border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
              />
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
                <Typography variant="body2" fontWeight={700}>+ 500 others</Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CampusAmbassador;