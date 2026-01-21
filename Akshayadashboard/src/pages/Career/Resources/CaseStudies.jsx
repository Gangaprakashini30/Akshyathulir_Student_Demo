import React from 'react';
import { Box, Typography, Grid, Paper, Button, Stack, Chip } from '@mui/material';
import { MenuBook, Visibility } from '@mui/icons-material';

const CaseStudyCard = ({ title, sector, author, description, tags }) => (
  <Paper 
    sx={{ 
      p: 0, 
      borderRadius: 5, 
      overflow: 'hidden', 
      border: '1px solid #f1f8f6', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 10px 25px rgba(26, 61, 53, 0.1)'
      }
    }}
  >
    {/* Banner Section */}
    <Box 
      sx={{ 
        height: 140, 
        bgcolor: '#1a3d35', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white' 
      }}
    >
      <MenuBook sx={{ fontSize: 60, opacity: 0.3 }} />
    </Box>

    <Box sx={{ p: 3, flexGrow: 1 }}>
      <Stack direction="row" spacing={1} mb={2}>
        {tags.map(tag => (
          <Chip 
            key={tag} 
            label={tag} 
            size="small" 
            sx={{ 
              bgcolor: '#f1f8f6', 
              color: '#1a3d35', 
              fontWeight: 700, 
              fontSize: '0.7rem' 
            }} 
          />
        ))}
      </Stack>

      <Typography variant="h6" fontWeight={800} gutterBottom sx={{ color: '#1a3d35', lineHeight: 1.3 }}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: '40px' }}>
        {description}
      </Typography>

      <Typography variant="caption" display="block" color="text.disabled" mb={3}>
        By {author} • {sector}
      </Typography>

      <Button 
        variant="outlined" 
        fullWidth 
        startIcon={<Visibility />}
        sx={{ 
          borderRadius: 3, 
          fontWeight: 700, 
          borderColor: '#1a3d35', 
          color: '#1a3d35',
          textTransform: 'none',
          '&:hover': {
            borderColor: '#1a3d35',
            bgcolor: 'rgba(26, 61, 53, 0.04)'
          }
        }}
      >
        VIEW CASE STUDY
      </Button>
    </Box>
  </Paper>
);

export default function CaseStudies() {
  const cases = [
    {
      title: "Zero-Waste Campus Initiative",
      sector: "Environment",
      author: "Aditi Sharma",
      description: "How a 3rd-year student reduced campus plastic waste by 60% through a custom logistics app.",
      tags: ["Sustainability", "Logistics"]
    },
    {
      title: "FinTech for Rural Markets",
      sector: "Finance",
      author: "Rahul Varma",
      description: "A case study on developing offline payment solutions for low-connectivity regions.",
      tags: ["FinTech", "Innovation"]
    },
    {
      title: "Agri-Drone Implementation",
      sector: "Agriculture",
      author: "Startup Team A",
      description: "Scaling the drone solution to help over 500 local farmers optimize irrigation.",
      tags: ["AgriTech", "Drones"]
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#1a3d35' }}>
        Success Case Studies
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Learn from the journeys of successful student-led projects.
      </Typography>

      <Grid container spacing={3}>
        {cases.map((item, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <CaseStudyCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}