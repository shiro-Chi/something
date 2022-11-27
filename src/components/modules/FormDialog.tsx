import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

/**
 * @interface FormDialogProps
 */
interface FormDialogProps {
  dialogActivated: boolean;
  onClose: () => void;
}

/**
 * 入力ダイアログコンポーネント
 * @return {React.ReactElement}
 */
const FormDialog: React.FC<FormDialogProps> = (props: FormDialogProps): React.ReactElement => {
  const { dialogActivated, onClose } = props;

  // ダイアログの開閉
  const [active, setActive] = React.useState(false);

  /**
   * ダイアログクローズ時の動作
   */
  const handleClose = (): void => {
    setActive(false);
    onClose();
  };

  /**
   * 「OK」時の動作
   */
  const handleAccept = (): void => {
    handleClose();
  };

  React.useEffect(() => setActive(dialogActivated), [dialogActivated]);

  return (
    <Dialog open={active} onClose={handleClose}>
      <DialogTitle>タイトル</DialogTitle>
      <DialogContent>
        <DialogContentText>本文</DialogContentText>
        <TextField autoFocus margin="dense" id="name" label="Your Name" type="text" fullWidth variant="standard" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAccept}>OK</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
