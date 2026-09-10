import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Checkbox,
} from '@mui/material';
import { MoreVert, Search, Download, Add, CloudDownload } from '@mui/icons-material';

const customers = [
  { name: 'Caroline Pandolfi', email: 'caroline1@gmail.com', phone: '6187873453', country: 'United States', status: 'Active', img: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Liam Smith', email: 'liam2@gmail.com', phone: '2125551234', country: 'United States', status: 'Inactive', img: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Emma Johnson', email: 'emma3@gmail.com', phone: '3105555678', country: 'Canada', status: 'Active', img: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Noah Brown', email: 'noah4@gmail.com', phone: '4155559999', country: 'United Kingdom', status: 'Inactive', img: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Olivia Davis', email: 'olivia5@gmail.com', phone: '6465551111', country: 'United States', status: 'Active', img: 'https://i.pravatar.cc/150?u=5' },
];

export default function Customers() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" fontWeight={700}>
          Customer List
        </Typography>
        <Typography color="text.secondary">Home / Customers / List</Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: <InputAdornment position="start"><Search sx={{ color: 'text.disabled' }} /></InputAdornment>,
            }}
            sx={{ flex: 1 }}
          />
          <Button variant="outlined" startIcon={<CloudDownload />}>Download</Button>
          <Button variant="contained" startIcon={<Add />}>Add New</Button>
        </Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: '#111a38' }}>
                <TableCell><Checkbox size="small" /></TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.email} sx={{ '&:nth-of-type(odd)': { bgcolor: 'rgba(255,255,255,0.02)' } }}>
                  <TableCell><Checkbox size="small" /></TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar src={c.img} sx={{ width: 32, height: 32 }} />
                      {c.name}
                    </Box>
                  </TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.phone}</TableCell>
                  <TableCell>{c.country}</TableCell>
                  <TableCell>
                    <Chip label={c.status} size="small" color={c.status === 'Active' ? 'success' : 'error'} />
                  </TableCell>
                  <TableCell>
                    <IconButton size="small">
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
