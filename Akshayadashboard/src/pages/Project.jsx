import React, { useState, useEffect } from 'react';
import {
  Chip, Box, Typography, Grid, Paper, TextField, Radio, RadioGroup,
  FormControlLabel, FormControl, FormLabel, Select, MenuItem,
  Button, Card, Stack, Divider
} from '@mui/material';
import axios from 'axios';
import { Delete, Add, Save, RestartAlt } from '@mui/icons-material';
import { blue } from '@mui/material/colors';

export default function Profile() {
  const [eduType, setEduType] = useState('school');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [careerPath, setCareerPath] = useState("");
  const [applyType, setApplyType] = useState('individual');
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedDomains, setSelectedDomains] = useState([]);


  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json')
      .then(res => setStates(res.data.states))
      .catch(err => console.error(err));
  }, []);
  const handleChange = (event) => {
    const { value } = event.target;
    // This logic prevents selecting more than 3 items
    if (value.length <= 3) {
      setSelectedDomains(typeof value === 'string' ? value.split(',') : value);
    }
  };

  const handleStateChange = (e) => {
    const sName = e.target.value;
    setSelectedState(sName);
    const stateObj = states.find(s => s.state === sName);
    setDistricts(stateObj ? stateObj.districts : []);
  };

  const addMember = () => {
    if (teamMembers.length < 5) {
      setTeamMembers([...teamMembers, { id: Date.now(), name: '', email: '', mobile: '', gender: '', institution: '', degree: '', year: '' }]);
    }
  };

  const removeMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  // Common styles to match your design
  const bannerStyle = {
    bgcolor: '#1a3d35',
    color: 'white',
    p: 1.5,
    px: 3,
    fontWeight: 700,
    borderRadius: '4px 4px 0 0',
    mb: 2
  };


  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 2 }}>
      <Typography variant="h4" align="center" sx={{ color: '#2e7d32', fontWeight: 800, mb: 4 }}>
        Student Registration Portal
      </Typography>

      <Paper sx={{ borderRadius: 2, overflow: 'hidden', mb: 4 }}>
        {/* Section 1: Personal Information */}
        <Box sx={bannerStyle}>1. Personal Information</Box>
        <Box sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField  fullWidth label="First Name *" placeholder="First Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Last Name *" placeholder="Last Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Email Address *" type="email" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Mobile Number *" defaultValue="+91" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth label="Date of Birth *" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ fontWeight: 700 }}>Gender *</FormLabel>
                <RadioGroup row name="genderGroup">
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="others" control={<Radio />} label="Others" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <FormLabel sx={{ fontWeight: 700 }}>Community *</FormLabel>
                <Select defaultValue="Choose...">
                  <MenuItem value="Choose...">Choose...</MenuItem>
                  <MenuItem value="OC">OC</MenuItem>
                  <MenuItem value="BC">BC</MenuItem>
                  <MenuItem value="MBC">MBC</MenuItem>
                  <MenuItem value="SC/ST">SC/ST</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Section: School or College */}
        <Box sx={bannerStyle}>Are you in school or college?</Box>
        <Box sx={{ p: 4 }}>
          <RadioGroup row value={eduType} onChange={(e) => setEduType(e.target.value)}>
            <FormControlLabel value="school" control={<Radio />} label="School" />
            <FormControlLabel value="college" control={<Radio />} label="College" />
          </RadioGroup>
        </Box>

        {/* Section 2: Academic Details */}
        <Box sx={bannerStyle}>2. Academic Details</Box>
        <Box sx={{ p: 4 }}>
          {eduType === 'school' ? (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="School Name *" placeholder="Full name of school" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField fullWidth label="Class / Standard *" select defaultValue="Choose...">
                  <MenuItem value="Choose...">Choose...</MenuItem>
                  <MenuItem value="9th Standard">9th Standard</MenuItem>
                  <MenuItem value="10th Standard">10th Standard</MenuItem>
                  <MenuItem value="11th Standard">11th Standard</MenuItem>
                  <MenuItem value="12th Standard">12th Standard</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField fullWidth label="Medium *" select defaultValue="English">
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Tamil">Tamil</MenuItem>
                  <MenuItem value="Hindi">Hindi</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="Board (UDISE)"
                  placeholder="Auto-populated"
                  disabled
                  sx={{ bgcolor: '#f5f5f5' }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="School Type"
                  placeholder="Auto-populated"
                  disabled
                  sx={{ bgcolor: '#f5f5f5' }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="District *" placeholder="School District" />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="College Name *" placeholder="Full name of college" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Department / Branch *" placeholder="e.g. Computer Science" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Degree *" select defaultValue="Choose...">
                  <MenuItem value="Choose...">Choose...</MenuItem>
                  <MenuItem value="B.E / B.Tech">B.E / B.Tech</MenuItem>
                  <MenuItem value="B.A">B.A</MenuItem>
                  <MenuItem value="B.Sc">B.Sc</MenuItem>
                  <MenuItem value="M.E / M.Tech">M.E / M.Tech</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Year of Study *" select defaultValue="Choose...">
                  <MenuItem value="Choose...">Choose...</MenuItem>
                  <MenuItem value="1st Year">1st Year</MenuItem>
                  <MenuItem value="2nd Year">2nd Year</MenuItem>
                  <MenuItem value="3rd Year">3rd Year</MenuItem>
                  <MenuItem value="4th Year">4th Year</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          )}
        </Box>

        {/* Section 3: Guardian & Address Details */}
        <Box sx={bannerStyle}>3. Guardian & Address Details</Box>
        <Box sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Parent / Guardian Name *" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Relationship *" select defaultValue="Choose...">
                <MenuItem value="Choose...">Choose...</MenuItem>
                <MenuItem value="Father">Father</MenuItem>
                <MenuItem value="Mother">Mother</MenuItem>
                <MenuItem value="Guardian">Guardian</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Phone Number *" placeholder="Guardian's mobile" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="Door No. / Street *" />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField fullWidth label="State *" select value={selectedState} onChange={handleStateChange}>
                <MenuItem value="">Select State</MenuItem>
                {states.map((s, i) => <MenuItem key={i} value={s.state}>{s.state}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth label="District *" select disabled={!selectedState}>
                <MenuItem value="">Select District</MenuItem>
                {districts.map((d, i) => <MenuItem key={i} value={d}>{d}</MenuItem>)}
              </TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField fullWidth label="Pincode *" />
            </Grid>
          </Grid>
        </Box>
        {/* Section 4: Career Path */}
        <Box sx={bannerStyle}>4. Career Path</Box>
        <Box sx={{ p: 4 }}>
          <RadioGroup row value={careerPath} onChange={(e) => setCareerPath(e.target.value)}>
            <FormControlLabel value="project" control={<Radio />} label="Project" />
            <FormControlLabel value="internship" control={<Radio />} label="Internship" />
          </RadioGroup>

          {careerPath === "project" && (
            <Box sx={{ mt: 3, p: 3, border: '1px solid #f1f8f6', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#1a3d35' }}>Project Details</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}><TextField fullWidth label="Project Title" /></Grid>
                <Grid item xs={12} md={6}><TextField fullWidth label="Technology Used" /></Grid>
              </Grid>
            </Box>
          )}

          {careerPath === "internship" && (
            <Box sx={{ mt: 3, p: 3, border: '1px solid #f1f8f6', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#1a3d35' }}>Internship Details</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}><TextField fullWidth label="Company Name" /></Grid>
                <Grid item xs={12} md={6}><TextField fullWidth label="Duration (Months)" type="number" /></Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <FormLabel sx={{ fontWeight: 700, mb: 1 }}>Domain (Select up to 3)</FormLabel>
                    <Select
                      multiple
                      value={selectedDomains}
                      onChange={handleChange}
                      // This displays the selected items as Chips, matching your portal style
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip
                              key={value}
                              label={value}
                              sx={{ bgcolor: '#95bce3ff', color: '#1a3d35', fontWeight: 600 }}
                            />
                          ))}
                        </Box>
                      )}
                    >
                      {["IT", "Robotics/AI", "Cybersecurity", "Healthcare", "Agriculture", "FinTech"].map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          sx={{
                            // Highlights the selected row in blue
                            '&.Mui-selected': {
                              bgcolor: '#1a7b50ff !important', // Medium blue
                              color: '#111417ff',
                              fontWeight: 'bold',
                              borderTop:'groove',
                              '&:hover': {
                                bgcolor: '#33b069ff !important', // Darker blue on hover
                              },
                            },
                          }}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>

        {/* Section 5: Startup / Idea Information */}
        <Box sx={bannerStyle}>5. Startup / Idea Information</Box>
        <Box sx={{ p: 4 }}>
          <FormControl component="fieldset" sx={{ mb: 3 }}>
            <FormLabel sx={{ fontWeight: 700, mb: 1 }}>How are you applying? *</FormLabel>
            <RadioGroup row value={applyType} onChange={(e) => setApplyType(e.target.value)}>
              <FormControlLabel value="individual" control={<Radio />} label="Individual" />
              <FormControlLabel value="team" control={<Radio />} label="Team (2-6 Members)" />
            </RadioGroup>
          </FormControl>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}><TextField fullWidth label="Startup/Idea Name *" variant="outlined" /></Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Domain / Sector *" select defaultValue="Choose...">
                <MenuItem value="Choose...">Choose...</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="Robotics/AI">Robotics/AI</MenuItem>
                <MenuItem value="Agriculture">Agriculture</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}><TextField fullWidth multiline rows={2} label="Problem Statement (Max 50 words) *" /></Grid>
            <Grid item xs={12}><TextField fullWidth multiline rows={3} label="Solution Description *" /></Grid>
          </Grid>

          {/* Dynamic Team Members Section */}
          {applyType === 'team' && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 800, mb: 3 }}>
                Team Details
              </Typography>

              {/* Team Leader Card */}
              <Card variant="outlined" sx={{ p: 3, mb: 3, bgcolor: '#f1f8f6', border: '1px solid #1a3d35' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: '#1a3d35' }}>
                  Team Leader (Main Applicant)
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}><TextField fullWidth label="Full Name" disabled defaultValue="Same as Section 1" size="small" /></Grid>
                  <Grid item xs={12} md={4}><TextField fullWidth label="Email" size="small" /></Grid>
                  <Grid item xs={12} md={4}><TextField fullWidth label="Mobile" size="small" /></Grid>
                </Grid>
              </Card>

              {/* Additional Members */}
              {teamMembers.map((member, index) => (
                <Card key={member.id} variant="outlined" sx={{ p: 3, mb: 3, position: 'relative' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Team Member {index + 2}</Typography>
                    <Button
                      startIcon={<Delete />}
                      color="error"
                      size="small"
                      onClick={() => removeMember(member.id)}
                    >
                      Remove
                    </Button>
                  </Stack>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}><TextField fullWidth label="Full Name" size="small" /></Grid>
                    <Grid item xs={12} md={3}><TextField fullWidth label="Email" size="small" /></Grid>
                    <Grid item xs={12} md={3}><TextField fullWidth label="Mobile" size="small" /></Grid>
                    <Grid item xs={12} md={3}>
                      <TextField fullWidth label="Gender" select size="small" defaultValue="">
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={5}><TextField fullWidth label="Institution Name" size="small" /></Grid>
                    <Grid item xs={12} md={4}><TextField fullWidth label="Degree / Class" size="small" /></Grid>
                    <Grid item xs={12} md={3}><TextField fullWidth label="Year" select size="small" defaultValue=""><MenuItem value="1">1st Year</MenuItem></TextField></Grid>
                  </Grid>
                </Card>
              ))}

              <Button
                fullWidth
                variant="outlined"
                startIcon={<Add />}
                onClick={addMember}
                sx={{
                  borderStyle: 'dashed',
                  py: 1.5,
                  color: '#1a3d35',
                  borderColor: '#1a3d35',
                  '&:hover': { borderStyle: 'dashed', bgcolor: '#f1f8f6' }
                }}
              >
                ADD TEAM MEMBER
              </Button>
              <Typography variant="caption" align="center" display="block" sx={{ mt: 1, color: 'text.secondary' }}>
                You can add up to 5 additional members.
              </Typography>
            </Box>
          )}
        </Box>
        {/* Section 6: Upload Documents */}
        <Box sx={bannerStyle}>6. Upload Documents</Box>
        <Box sx={{ p: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Typography variant="caption" fontWeight={700}>Student Photo *</Typography>
              <TextField fullWidth type="file" size="small" helperText="Max 2MB (JPG/PNG)" />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="caption" fontWeight={700}>ID Proof *</Typography>
              <TextField fullWidth type="file" size="small" helperText="College/School ID" />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="caption" fontWeight={700}>Bonafide Cert.</Typography>
              <TextField fullWidth type="file" size="small" helperText="If available (PDF)" />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="caption" fontWeight={700}>Idea PPT/PDF *</Typography>
              <TextField fullWidth type="file" size="small" helperText="Project Abstract" />
            </Grid>
          </Grid>
        </Box>
        {/* Form Actions */}
        <Box sx={{ p: 4, display: 'flex', gap: 2 }}>
          <Button variant="contained" size="large" sx={{ bgcolor: '#2e7d32', px: 6, py: 1.5, borderRadius: 2 }}>
            SUBMIT REGISTRATION
          </Button>
          <Button variant="outlined" color="error" size="large" onClick={() => window.location.reload()} sx={{ px: 6, borderRadius: 2 }}>
            RESET FORM
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}