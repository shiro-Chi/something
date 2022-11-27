import React from 'react';
import Header from '../modules/Header';
import { SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FloatingActionButton from '../modules/FloatingActionButton';

/** @type {SxProps} トップページコンテンツのスタイル定義 */
const style: SxProps<Theme> = {
  margin: 0,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  WebkitFontSmoothing: 'never',
  MozOsxFontSmoothing: 'auto',
  textAlign: 'center',
  bgcolor: 'background.paper',
};

/**
 * トップページコンポーネント
 * @return {React.ReactElement}
 */
const Top: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Box sx={{ ...style }}>
        <p>コンテンツ</p>
        <FloatingActionButton />
      </Box>
    </>
  );
};

export default Top;
