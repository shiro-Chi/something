import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from './FormDialog';
import { SxProps, Theme } from '@mui/material/styles';

/**
 * @interface FloatingActionButtonProps
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FloatingActionButtonProps {}

/** @type {SxProps} フローティングアクションボタンコンポーネントのスタイル定義 */
const style: SxProps<Theme> = {
  position: 'absolute',
  bottom: 20,
  right: 20,
};

/**
 * フローティングアクションボタンコンポーネント
 * @return {React.ReactElement}
 */
const FloatingActionButton: React.FC<FloatingActionButtonProps> = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _props?: FloatingActionButtonProps
): React.ReactElement => {
  // ダイアログの開閉
  const [dialogActivated, setDialogActivated] = React.useState(false);

  return (
    <>
      <FormDialog dialogActivated={dialogActivated} onClose={() => setDialogActivated(false)} />
      <Fab sx={{ ...style }} size="medium" color="secondary" aria-label="add" onClick={() => setDialogActivated(true)}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default FloatingActionButton;
