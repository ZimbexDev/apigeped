import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from '@/components/base/IconifyIcon';
import Avatar from '@mui/material/Avatar';

interface MenuItems {
  id: number;
  title: string;
  icon: string;
}

const menuItems: MenuItems[] = [
  {
    id: 1,
    title: 'Ver perfil',
    icon: 'mdi:user-circle-outline',
  },
  {
    id: 2,
    title: 'Configuração',
    icon: 'mdi:account-cog-outline',
  },
  {
    id: 3,
    title: 'Notificações',
    icon: 'mdi:bell-outline',
  },
  {
    id: 4,
    title: 'Mudar de conta',
    icon: 'mdi:account-box-multiple-outline',
  },
  {
    id: 5,
    title: 'Ajuda',
    icon: 'mdi:help-circle-outline',
  },
  {
    id: 6,
    title: 'Encerrar',
    icon: 'mdi:logout',
  },
];

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase
        sx={{ ml: 1 }}
        onClick={handleProfileClick}
        aria-controls={open ? 'account-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        disableRipple
      >
       <Avatar 
              />

      </ButtonBase>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleProfileMenuClose}
        onClick={handleProfileMenuClose}
        sx={{
          mt: 1.5,
          '& .MuiList-root': {
            p: 0,
            width: 230,
          },
          '& .MuiMenu-paper': { p: '0 !important' },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box p={1}>
          <MenuItem onClick={handleProfileMenuClose} sx={{ '&:hover': { bgcolor: 'info.main' } }}>
          <Avatar  />
            <Stack direction="column">
              <Typography variant="body2" color="text.primary" fontWeight={600}>
                Martins Zimba
              </Typography>
              <Typography variant="caption" color="text.secondary" fontWeight={400}>
                martinszimba@gmail.com
              </Typography>
            </Stack>
          </MenuItem>
        </Box>

        <Divider sx={{ my: 0 }} />

        <Box p={1}>
          {menuItems.map((item) => {
            return (
              <MenuItem key={item.id} onClick={handleProfileMenuClose} sx={{ py: 1 }}>
                <ListItemIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 'h5.fontSize' }}>
                  <IconifyIcon icon={item.icon} />
                </ListItemIcon>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
        </Box>
      </Menu>
    </>
  );
};

export default ProfileMenu;
