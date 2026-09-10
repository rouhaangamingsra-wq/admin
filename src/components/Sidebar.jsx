import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  BarChart as ChartIcon,
  People as UsersIcon,
  Person as CustomerIcon,
  ShoppingCart as OrderIcon,
  Chat as ChatIcon,
  ViewKanban as KanbanIcon,
  Mail as MailIcon,
  Analytics as AnalyticsIcon,
  Receipt as InvoiceIcon,
  Newspaper as BlogIcon,
  Widgets as WidgetIcon,
  TrendingUp as StatsIcon,
  Dataset as DataIcon,
  ShowChart as MiniChartIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

const groups = [
  {
    title: 'Dashboard',
    items: [
      { label: 'Default', to: '/', icon: <DashboardIcon /> },
      { label: 'Analytics', to: '/charts', icon: <AnalyticsIcon /> },
      { label: 'Invoice', to: '/orders', icon: <InvoiceIcon /> },
      { label: 'CRM', to: '/customers', icon: <CustomerIcon /> },
      { label: 'Blog', to: '/profile', icon: <BlogIcon /> },
    ],
  },
  {
    title: 'Widget',
    items: [
      { label: 'Statistics', to: '/charts', icon: <StatsIcon /> },
      { label: 'Data', to: '/customers', icon: <DataIcon /> },
      { label: 'Chart', to: '/charts', icon: <MiniChartIcon /> },
    ],
  },
  {
    title: 'Application',
    items: [
      { label: 'Users', to: '/customers', icon: <UsersIcon /> },
      { label: 'Customer', to: '/customers', icon: <CustomerIcon /> },
      { label: 'Order', to: '/orders', icon: <OrderIcon /> },
      { label: 'Chat', to: '/profile', icon: <ChatIcon /> },
      { label: 'Kanban', to: '/orders', icon: <KanbanIcon /> },
      { label: 'Mail', to: '/profile', icon: <MailIcon /> },
    ],
  },
];

export default function Sidebar({ onClose }) {
  const { pathname } = useLocation();
  const [openGroups, setOpenGroups] = useState({ Dashboard: true });

  const toggle = (title) => {
    setOpenGroups((g) => ({ ...g, [title]: !g[title] }));
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'conic-gradient(from 45deg, #7c3aed, #06b6d4, #f59e0b, #7c3aed)',
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.5 }}>
          BERRY
        </Typography>
      </Box>

      <Box sx={{ flex: 1, overflow: 'auto', px: 1.5, pb: 2 }}>
        {groups.map((group, gi) => (
          <Box key={group.title}>
            {gi > 0 && <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.05)' }} />}
            <ListItemButton
              onClick={() => toggle(group.title)}
              sx={{
                borderRadius: 2,
                py: 0.8,
                color: 'text.secondary',
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, color: 'text.disabled' }}>
                    {group.title}
                  </Typography>
                }
              />
              {openGroups[group.title] ? <ExpandLess sx={{ fontSize: 18 }} /> : <ExpandMore sx={{ fontSize: 18 }} />}
            </ListItemButton>

            <Collapse in={openGroups[group.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding dense>
                {group.items.map((item) => {
                  const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
                  return (
                    <ListItem key={item.label} disablePadding>
                      <NavLink to={item.to} onClick={onClose} style={{ textDecoration: 'none', width: '100%' }}>
                        <ListItemButton
                          selected={active}
                          sx={{
                            borderRadius: 2,
                            mb: 0.3,
                            py: 0.9,
                            pl: 2,
                            color: active ? '#fff' : 'text.secondary',
                            bgcolor: active ? 'primary.main' : 'transparent',
                            '&:hover': { bgcolor: active ? 'primary.main' : 'rgba(255,255,255,0.04)' },
                            '& .MuiListItemIcon-root': { color: active ? '#fff' : 'text.secondary' },
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: 34, color: active ? '#fff' : 'text.secondary' }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }} />
                        </ListItemButton>
                      </NavLink>
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
