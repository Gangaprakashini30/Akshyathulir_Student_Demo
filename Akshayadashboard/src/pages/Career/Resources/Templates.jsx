import React from 'react';
import { Box, Typography, Grid, Paper, Button, Stack, Avatar } from '@mui/material';
import { InsertDriveFile, Download } from '@mui/icons-material';

const ResourceCard = ({ title, type, size }) => (
  <Paper 
    sx={{ 
      p: 3, 
      borderRadius: 4, 
      border: '1px solid #f1f8f6', 
      transition: '0.3s', 
      '&:hover': { 
        boxShadow: '0 8px 24px rgba(26, 61, 53, 0.08)',
        borderColor: '#1a3d35'
      } 
    }}
  >
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar sx={{ bgcolor: '#f1f8f6', color: '#1a3d35' }}>
          <InsertDriveFile />
        </Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#1a3d35' }}>
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {type} • {size}
          </Typography>
        </Box>
      </Stack>
      
      <Button 
        variant="outlined" 
        startIcon={<Download />} 
        sx={{ 
          borderRadius: 2, 
          textTransform: 'none',
          fontWeight: 700,
          borderColor: '#1a3d35',
          color: '#1a3d35',
          '&:hover': {
            bgcolor: '#1a3d35',
            color: '#fff',
            borderColor: '#1a3d35'
          }
        }}
      >
        Download
      </Button>
    </Stack>
  </Paper>
);

export default function Templates() {
  const templateList = [
    { title: "Standard Student Resume Template", type: "DOCX", size: "1.2 MB" },
    { title: "Startup Pitch Deck Template", type: "PPTX", size: "4.5 MB" },
    { title: "Final Year Project Report Format", type: "PDF", size: "800 KB" },
    { title: "Internship Completion Report", type: "DOCX", size: "1.1 MB" }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#1a3d35' }}>
        Templates Library
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Professional blueprints to help you structure your academic and career documents.
      </Typography>

      <Grid container spacing={2}>
        {templateList.map((template, index) => (
          <Grid item xs={12} key={index}>
            <ResourceCard 
              title={template.title} 
              type={template.type} 
              size={template.size} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}