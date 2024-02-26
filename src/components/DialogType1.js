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
			sx={{ '& .MuiDialog-paper': { width: '70%', maxWidth: 'max(31.25vw, 600px)'} }}
		>
			<DialogTitle id="alert-dialog-title">
				토큰 삭제
			</DialogTitle>
			<DialogContent>
				<DialogContentText sx={{ marginBottom: 1 }}>
					<span className='token-name'>Test Token Name</span>
					이 토큰을 삭제할까요?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" color="gray" onClick={handleClose}>취소</Button>
				<Button variant="contained" color="error" onClick={handleClose}>삭제</Button>
			</DialogActions>
		</Dialog>
	);
}