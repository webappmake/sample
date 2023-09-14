import * as React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material/';

export default function DialogType1(props) {
	const { onClose, open } = props;

	const handleClose = () => {
		onClose();
	};
	
return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			className='experiment-dialog type1'
			sx={{ '& .MuiDialog-paper': { width: '80%', minHeight: '80%'} }}
      componentsProps={{ backdrop: { style: { backgroundColor: "transparent" } } }}
			maxWidth="xs"
      // TransitionProps={{ onEntering: handleEntering }}
		>
			<DialogTitle>Phone Ringtone</DialogTitle>

			<DialogContent dividers>
				<DialogContentText sx={{ my:1 }}>
					Are you sure you want to delete this item?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Submit</Button>
			</DialogActions>
		</Dialog>
	);
}