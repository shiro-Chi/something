import React from 'react';
import AppBar from '@mui/material/AppBar';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

/** @type {SxProps} ヘッダーコンポーネントのスタイル定義 */
const style: SxProps<Theme> = {
  textAlign: 'center',
  bgcolor: 'background.paper',
};

/**
 * ヘッダーコンポーネント
 * @return {React.ReactElement}
 */
const Header: React.FC = (): React.ReactElement => {
  return (
    <Box sx={{ ...style, flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            hogehoge
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
