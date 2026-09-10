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
  Chip,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Checkbox,
} from '@mui/material';
import { MoreVert, Search, CloudDownload, Add } from '@mui/icons-material';

const orders = [
  { id: '#790955', customer: 'Joseph William', branch: 'USA', payment: 'Card', qty: 6, date: '09 Sept 2026', status: 'Pending' },
  { id: '#790956', customer: 'Emma Watson', branch: 'Canada', payment: 'Card', qty: 1, date: '08 Sept 2026', status: 'Complete' },
  { id: '#790957', customer: 'Rahul Sharma', branch: 'India', payment: 'UPI', qty: 2, date: '07 Sept 2026', status: 'Pending' },
  { id: '#790958', customer: 'Oliver Smith', branch: 'UK', payment: 'COD', qty: 1, date: '06 Sept 2026', status: 'Cancel' },
  { id: '#790959', customer: 'Liam Brown', branch: 'Australia', payment: 'Card', qty: 1, date: '05 Sept 2026', status: 'Hold' },
  { id: '#790960', customer: 'Hans Muller', branch: 'USA', payment: 'UPI', qty: 1, date: '04 Sept 2026', status: 'Pending' },
];

const statusColor = (s) => {
  if (s === 'Pending') return 'warning';
  if (s === 'Complete') return 'success';
  if (s === 'Cancel') return 'error';
  return 'info';
};

export default function Orders() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" fontWeight={700}>
          Order List
        </Typography>
        <Typography color="text.secondary">Home / Orders / List</Typography>
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
                <TableCell>ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Payment Type</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((o) => (
                <TableRow key={o.id}>
                  <TableCell><Checkbox size="small" /></TableCell>
                  <TableCell>{o.id}</TableCell>
                  <TableCell>{o.customer}</TableCell>
                  <TableCell>{o.branch}</TableCell>
                  <TableCell>{o.payment}</TableCell>
                  <TableCell>{o.qty}</TableCell>
                  <TableCell>{o.date}</TableCell>
                  <TableCell>
                    <Chip label={o.status} size="small" color={statusColor(o.status)} />
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
