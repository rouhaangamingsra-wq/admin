import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  Paper,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Tune as TuneIcon,
  Campaign as CampaignIcon,
  Translate as TranslateIcon,
  Notifications as NotificationsIcon,
  Fullscreen as FullscreenIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

export default function Header({ onMenuClick }) {
  const [search, setSearch] = useState('');

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        height: 76,
        justifyContent: 'center',
      }}
    >
      <Toolbar sx={{ minHeight: 76, justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
          <IconButton
            onClick={onMenuClick}
            sx={{
              color: 'text.secondary',
              bgcolor: '#202b4d',
              borderRadius: 2,
              '&:hover': { bgcolor: '#2b3655' },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Paper
            component="form"
            sx={{
              p: '2px 12px',
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', sm: 420 },
              bgcolor: '#111a38',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 3,
            }}
          >
            <SearchIcon sx={{ color: 'text.disabled' }} />
            <InputBase
              sx={{ ml: 1, flex: 1, color: 'text.primary' }}
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton size="small" sx={{ color: 'text.disabled' }}>
              <TuneIcon />
            </IconButton>
          </Paper>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {[
            <CampaignIcon />,
            <TranslateIcon />,
            <NotificationsIcon />,
            <FullscreenIcon />,
          ].map((icon, i) => (
            <IconButton
              key={i}
              sx={{
                color: 'text.secondary',
                bgcolor: '#202b4d',
                borderRadius: 2,
                '&:hover': { bgcolor: '#2b3655', color: 'secondary.main' },
              }}
            >
              <Badge color="secondary" variant="dot" invisible={i !== 2}>
                {icon}
              </Badge>
            </IconButton>
          ))}
          <Avatar sx={{ bgcolor: 'primary.main', color: '#fff', fontWeight: 700, ml: 1 }}>A</Avatar>
          <IconButton
            sx={{
              color: '#fff',
              bgcolor: 'primary.main',
              borderRadius: 2,
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
