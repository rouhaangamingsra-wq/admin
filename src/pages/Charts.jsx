import { Box, Paper, Typography, Grid, Chip } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  TrendingUp,
  TrendingDown,
  Facebook,
  Twitter,
  YouTube,
} from '@mui/icons-material';

const lineData = [
  { x: 1, y: 30 },
  { x: 2, y: 45 },
  { x: 3, y: 35 },
  { x: 4, y: 55 },
  { x: 5, y: 40 },
  { x: 6, y: 60 },
];

const barData = Array.from({ length: 30 }, (_, i) => ({
  x: i,
  y: Math.floor(Math.random() * 80) + 20,
}));

const marketData = [
  { x: 1, y1: 20, y2: 35 },
  { x: 2, y1: 40, y2: 30 },
  { x: 3, y1: 30, y2: 45 },
  { x: 4, y1: 55, y2: 40 },
  { x: 5, y1: 45, y2: 55 },
];

const satisfactionData = [
  { name: 'Extremely Satisfied', value: 35.5 },
  { name: 'Satisfied', value: 26.9 },
  { name: 'Poor', value: 21.5 },
  { name: 'Very Poor', value: 16.1 },
];

const ORANGES = ['#f59e0b', '#fbbf24', '#d97706', '#92400e'];

const StatMini = ({ value, label, percent, color, fill }) => (
  <Paper sx={{ p: 2.5, bgcolor: color, color: '#fff', position: 'relative', overflow: 'hidden' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h4" fontWeight={700}>
        {value}
      </Typography>
      <Chip label={percent} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: '#fff' }} />
    </Box>
    <Typography sx={{ opacity: 0.8 }}>{label}</Typography>
    <Box sx={{ height: 60, mt: 1 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={lineData}>
          <Area type="monotone" dataKey="y" stroke="#fff" fill={fill} />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  </Paper>
);

export default function Charts() {
  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" fontWeight={700}>
          Chart
        </Typography>
        <Typography color="text.secondary">Home / Chart</Typography>
      </Box>

      <Grid container spacing={3}>
        {[
          { value: '4000', label: 'Total Sales', percent: '42%', color: '#2563eb', fill: 'rgba(255,255,255,0.25)' },
          { value: '2500', label: 'Total Comment', percent: '15%', color: '#ef4444', fill: 'rgba(255,255,255,0.25)' },
          { value: '2500', label: 'Total Status', percent: '95%', color: '#22c55e', fill: 'rgba(255,255,255,0.25)' },
          { value: '12500', label: 'Total Visitors', percent: '75%', color: '#7c3aed', fill: 'rgba(255,255,255,0.25)' },
        ].map((s, i) => (
          <Grid item xs={12} sm={6} lg={3} key={i}>
            <StatMini {...s} />
          </Grid>
        ))}

        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box>
                <Typography variant="h6" fontWeight={700}>Market Share</Typography>
                <Typography color="text.secondary" variant="body2">Department wise monthly sales report</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'error.main' }}>
                <TrendingDown />
                <Typography fontWeight={700}>27,695.65</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, mb: 2, color: 'text.secondary' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Facebook color="primary" /> +45.36%</Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Twitter color="secondary" /> -50.69%</Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><YouTube sx={{ color: '#ef4444' }} /> +16.85%</Box>
            </Box>
            <Box sx={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="x" stroke="rgba(255,255,255,0.3)" />
                  <YAxis stroke="rgba(255,255,255,0.3)" />
                  <Area type="monotone" dataKey="y1" stroke="#7c3aed" fill="rgba(124,58,237,0.2)" />
                  <Area type="monotone" dataKey="y2" stroke="#06b6d4" fill="rgba(6,182,212,0.2)" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={700} align="left">Total Revenue</Typography>
            <Box sx={{ height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={satisfactionData} innerRadius={60} outerRadius={90} dataKey="value" stroke="none">
                    {satisfactionData.map((_, i) => <Cell key={i} fill={['#7c3aed', '#06b6d4', '#f59e0b', '#10b981'][i]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" fontWeight={700}>New Stock</Typography>
              <Typography color="text.secondary">(Purchased)</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="h4" fontWeight={700} color="primary.main">0.85%</Typography>
              <TrendingUp sx={{ color: '#06b6d4' }} />
              <Typography color="text.secondary">0.50%</Typography>
            </Box>
            <Box sx={{ height: 220 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <Bar dataKey="y" fill="#7c3aed" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
              Customer Satisfaction
            </Typography>
            <Box sx={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={satisfactionData} dataKey="value" outerRadius={80} stroke="none">
                    {satisfactionData.map((_, i) => <Cell key={i} fill={ORANGES[i]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ mt: 2 }}>
              {satisfactionData.map((d, i) => (
                <Box key={d.name} sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                  <Typography variant="body2">{d.name}</Typography>
                  <Typography variant="body2" fontWeight={700} color={ORANGES[i]}>{d.value}%</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
