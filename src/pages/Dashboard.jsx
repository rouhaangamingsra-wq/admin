import { Box, Grid, Paper, Typography, IconButton, Button } from '@mui/material';
import {
  MoreVert,
  AccountBalanceWallet,
  ShoppingBag,
  CreditCard,
  Store,
  TrendingUp,
  TrendingDown,
  ArrowDropDown,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const orderData = [
  { x: 1, y: 40 },
  { x: 2, y: 55 },
  { x: 3, y: 45 },
  { x: 4, y: 70 },
  { x: 5, y: 60 },
  { x: 6, y: 80 },
];

const growthData = [
  { month: 'Jan', value: 4000 },
  { month: 'Feb', value: 3000 },
  { month: 'Mar', value: 5000 },
  { month: 'Apr', value: 4500 },
  { month: 'May', value: 6000 },
  { month: 'Jun', value: 5500 },
];

const stockData = [
  { name: 'Bajaj Finery', price: 1839, profit: 10 },
  { name: 'BTC', price: 9500, profit: -5 },
  { name: 'ETH', price: 3200, profit: 8 },
];

const pieData = [
  { name: 'Growth', value: 35 },
  { name: 'Ads', value: 25 },
  { name: 'Sales', value: 40 },
];

const PIE_COLORS = ['#7c3aed', '#06b6d4', '#f59e0b'];

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', position: 'relative', overflow: 'hidden', minHeight: 180 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                <AccountBalanceWallet sx={{ color: '#fff' }} />
              </Box>
              <IconButton size="small" sx={{ color: '#fff' }}>
                <MoreVert />
              </IconButton>
            </Box>
            <Box sx={{ mt: 4, position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" fontWeight={700} color="#fff">
                  $500.00
                </Typography>
                <TrendingUp sx={{ color: '#fff', fontSize: 20 }} />
              </Box>
              <Typography color="rgba(255,255,255,0.8)">Total Earning</Typography>
            </Box>
            <Box sx={{ position: 'absolute', right: -30, top: -30, width: 160, height: 160, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.08)' }} />
            <Box sx={{ position: 'absolute', right: 10, bottom: -40, width: 120, height: 120, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)' }} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 3, bgcolor: '#2563eb', position: 'relative', overflow: 'hidden', minHeight: 180 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
                <ShoppingBag sx={{ color: '#fff' }} />
              </Box>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <Button size="small" sx={{ color: 'rgba(255,255,255,0.7)', borderRadius: 1, minWidth: 0, px: 1 }}>Month</Button>
                <Button size="small" sx={{ color: '#fff', bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 1, minWidth: 0, px: 1 }}>Year</Button>
              </Box>
            </Box>
            <Box sx={{ mt: 4, position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" fontWeight={700} color="#fff">
                  $961
                </Typography>
                <TrendingDown sx={{ color: '#fff', fontSize: 20 }} />
              </Box>
              <Typography color="rgba(255,255,255,0.8)">Total Order</Typography>
            </Box>
            <Box sx={{ height: 60, mt: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={orderData}>
                  <Line type="monotone" dataKey="y" stroke="#fff" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper sx={{ p: 2.5, bgcolor: '#06b6d4', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <CreditCard sx={{ color: '#fff' }} />
                <IconButton size="small" sx={{ color: '#fff' }}>
                  <MoreVert />
                </IconButton>
              </Box>
              <Typography variant="h5" fontWeight={700} color="#fff" sx={{ mt: 2 }}>
                $203k
              </Typography>
              <Typography color="rgba(255,255,255,0.8)">Total Income</Typography>
              <Box sx={{ position: 'absolute', right: -20, bottom: -20, width: 80, height: 80, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
            </Paper>
            <Paper sx={{ p: 2.5, bgcolor: '#1e3a8a', position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Store sx={{ color: '#fbbf24' }} />
                <IconButton size="small" sx={{ color: '#fff' }}>
                  <MoreVert />
                </IconButton>
              </Box>
              <Typography variant="h5" fontWeight={700} color="#fff" sx={{ mt: 2 }}>
                $203k
              </Typography>
              <Typography color="rgba(255,255,255,0.8)">Total Income</Typography>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Paper sx={{ p: 2.5, textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={700}>
              Total Revenue
            </Typography>
            <Box sx={{ height: 160 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={45} outerRadius={70} dataKey="value" stroke="none">
                    {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Total Growth
                </Typography>
                <Typography variant="h4" fontWeight={700} color="primary.main" sx={{ mt: 0.5 }}>
                  $2,324.00
                </Typography>
              </Box>
              <Button variant="outlined" size="small" endIcon={<ArrowDropDown />} sx={{ borderRadius: 2 }}>
                Today
              </Button>
            </Box>
            <Box sx={{ height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" />
                  <YAxis stroke="rgba(255,255,255,0.3)" />
                  <Tooltip contentStyle={{ backgroundColor: '#202b4d', border: 'none' }} />
                  <Bar dataKey="value" fill="#7c3aed" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h6" fontWeight={700}>
                Popular Stocks
              </Typography>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </Box>
            <Paper sx={{ p: 2, mb: 2, bgcolor: '#7c3aed' }}>
              <Typography fontWeight={700}>Bajaj Finery</Typography>
              <Typography variant="h5" fontWeight={700}>
                $1839.00
              </Typography>
              <Typography color="success.light">10% Profit</Typography>
              <Box sx={{ height: 80, mt: 1 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={orderData}>
                    <Area type="monotone" dataKey="y" stroke="#fff" fill="rgba(255,255,255,0.2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
            {stockData.map((stock) => (
              <Box key={stock.name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <Typography fontWeight={600}>{stock.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography>${stock.price}</Typography>
                  <Typography color={stock.profit > 0 ? 'success.main' : 'error.main'} sx={{ display: 'flex', alignItems: 'center' }}>
                    {stock.profit > 0 ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                    {stock.profit}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, p: 2, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', color: 'text.disabled', fontSize: 12 }}>
        <span>© All rights reserved CodedThemes</span>
        <span>License &nbsp; Hire us &nbsp; Terms &nbsp; Figma Design System</span>
      </Box>
    </Box>
  );
}
