import React, { useState } from 'react';
import { 
  Box, Typography, Paper, TextField, InputAdornment, 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  IconButton, Button, Chip 
} from '@mui/material';
import { Search, PictureAsPdf, OpenInNew } from '@mui/icons-material';

export default function ResearchPapers() {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data reflecting the portal's focus on Technology and Agriculture
  const papers = [
    { id: 1, title: "AI in Precision Agriculture", author: "Dr. Arulmani", domain: "Agri-Tech", year: "2025" },
    { id: 2, title: "Low-Cost Drone Swarm Logistics", author: "Team Thulir", domain: "Technology", year: "2024" },
    { id: 3, title: "Renewable Energy in Rural India", author: "S. Meena", domain: "Energy", year: "2025" },
    { id: 4, title: "Water Scarcity Solutions using IoT", author: "Startup Lab B", domain: "Sustainability", year: "2023" },
  ];

  const filteredPapers = papers.filter(paper => 
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, color: '#1a3d35' }}>
        Research Papers
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Access peer-reviewed papers and academic abstracts from fellow student innovators.
      </Typography>

      {/* Search Bar Section */}
      <Paper sx={{ p: 3, borderRadius: 5, mb: 4, boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by title or domain (e.g., Agri-Tech)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#1a3d35' }} />
              </InputAdornment>
            ),
            sx: { borderRadius: 3 }
          }}
        />
      </Paper>

      {/* Data Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 5, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#f1f8f6' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Title</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Author</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Domain</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Year</TableCell>
              <TableCell sx={{ fontWeight: 700 }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPapers.length > 0 ? (
              filteredPapers.map((paper) => (
                <TableRow key={paper.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <PictureAsPdf sx={{ color: '#d32f2f', fontSize: 24 }} />
                      <Typography variant="body2" fontWeight={600} sx={{ color: '#1a3d35' }}>
                        {paper.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{paper.author}</TableCell>
                  <TableCell>
                    <Chip 
                      label={paper.domain} 
                      size="small" 
                      sx={{ 
                        bgcolor: '#e8f5e9', 
                        color: '#2e7d32', 
                        fontWeight: 700,
                        borderRadius: 1.5
                      }} 
                    />
                  </TableCell>
                  <TableCell>{paper.year}</TableCell>
                  <TableCell align="center">
                    <IconButton 
                      color="primary" 
                      size="small"
                      sx={{ 
                        color: '#1a3d35',
                        '&:hover': { bgcolor: 'rgba(26, 61, 53, 0.08)' } 
                      }}
                    >
                      <OpenInNew />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 3 }}>
                  <Typography variant="body2" color="text.secondary">
                    No papers found matching your search.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}