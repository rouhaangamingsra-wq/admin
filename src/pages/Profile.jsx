import {
  Box,
  Paper,
  Typography,
  Avatar,
  Button,
  Tabs,
  Tab,
  Grid,
  Card,
  TextField,
  IconButton,
} from '@mui/material';
import {
  Message,
  PersonAdd,
  MoreVert,
  PhotoLibrary,
  People,
  Group,
} from '@mui/icons-material';
import { useState } from 'react';

function TabPanel({ children, value, index }) {
  if (value !== index) return null;
  return <Box sx={{ pt: 2 }}>{children}</Box>;
}

export default function Profile() {
  const [tab, setTab] = useState(0);
  const [post, setPost] = useState('');

  return (
    <Box>
      <Paper sx={{ position: 'relative', overflow: 'hidden', mb: 3 }}>
        <Box sx={{ height: 200, bgcolor: '#2b3655' }} />
        <Box sx={{ px: 3, pb: 3, display: 'flex', alignItems: 'end', gap: 2, mt: -5 }}>
          <Avatar sx={{ width: 110, height: 110, bgcolor: '#f59e0b', fontSize: 40, border: '4px solid #202b4d' }}>
            J
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" fontWeight={700}>
              JWT User
            </Typography>
            <Typography color="text.secondary">Android Developer</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" startIcon={<Message />}>
              Message
            </Button>
            <Button variant="contained" startIcon={<PersonAdd />}>
              Send Request
            </Button>
          </Box>
        </Box>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} textColor="primary" indicatorColor="primary" sx={{ px: 3 }}>
          <Tab label="Profile" />
          <Tab label="Followers" />
          <Tab label="Friends" />
          <Tab label="Gallery" />
          <Tab label="Friend Requests" />
        </Tabs>
      </Paper>

      <TabPanel value={tab} index={0}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3 }}>
              <Card sx={{ bgcolor: '#06b6d4', p: 2, mb: 2, color: '#fff' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <People />
                  <Typography fontWeight={700}>239k</Typography>
                </Box>
                <Typography>Friends</Typography>
              </Card>
              <Card sx={{ bgcolor: '#7c3aed', p: 2, color: '#fff' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Group />
                  <Typography fontWeight={700}>234k</Typography>
                </Box>
                <Typography>Followers</Typography>
              </Card>
              <Paper sx={{ p: 2, mt: 2 }}>
                <Typography variant="h6" fontWeight={700}>
                  About
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  Experienced Android developer with a passion for building beautiful and performant mobile applications.
                </Typography>
              </Paper>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="What's on your mind, Larry?"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button variant="outlined" startIcon={<PhotoLibrary />}>
                  Gallery
                </Button>
                <Button variant="contained">Post</Button>
              </Box>
            </Paper>
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>J</Avatar>
                  <Box>
                    <Typography fontWeight={700}>JWT User</Typography>
                    <Typography variant="caption" color="text.secondary">now</Typography>
                  </Box>
                </Box>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <Typography sx={{ mt: 2 }}>Just shipped a new dashboard update! 🚀</Typography>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}
