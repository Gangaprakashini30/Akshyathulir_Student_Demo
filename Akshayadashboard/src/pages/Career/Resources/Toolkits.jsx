import React from 'react';
import { Box, Typography, Grid, Button, Avatar, Card, CardHeader } from '@mui/material';
import { DesignServices, Assessment, MonetizationOn } from '@mui/icons-material';

const ToolkitCard = ({ title, desc, icon, color }) => (
  <Card 
    sx={{ 
      borderRadius: 4, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      border: '1px solid #f1f8f6',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 24px rgba(26, 61, 53, 0.12)',
        borderColor: '#1a3d35'
      }
    }}
  >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: color, width: 48, height: 48 }}>
          {icon}
        </Avatar>
      }
      title={
        <Typography variant="h6" fontWeight={700} sx={{ color: '#1a3d35' }}>
          {title}
        </Typography>
      }
    />
    <Box sx={{ px: 2, pb: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
        {desc}
      </Typography>
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ 
          borderRadius: 2, 
          bgcolor: '#1a3d35',
          textTransform: 'none',
          fontWeight: 'bold',
          py: 1,
          '&:hover': { bgcolor: '#122b21' }
        }}
      >
        Access Toolkit
      </Button>
    </Box>
  </Card>
);

export default function Toolkits() {
  const toolkitData = [
    {
      title: "Business Model Canvas",
      desc: "A strategic management template for developing new or documenting existing business models.",
      icon: <DesignServices />,
      color: "#2e7d32"
    },
    {
      title: "Market Analysis Bot",
      desc: "Analyze your domain and sector data to identify potential competitors and market size.",
      icon: <Assessment />,
      color: "#1a3d35"
    },
    {
      title: "Financial Forecaster",
      desc: "Predict your startup's cash flow and burn rate based on your solution description.",
      icon: <MonetizationOn />,
      color: "#d32f2f"
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#1a3d35' }}>
        Startup Toolkits
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Essential tools to help build, launch, and scale your student startup.
      </Typography>

      <Grid container spacing={3}>
        {toolkitData.map((toolkit, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ToolkitCard 
              title={toolkit.title} 
              desc={toolkit.desc} 
              icon={toolkit.icon} 
              color={toolkit.color} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}