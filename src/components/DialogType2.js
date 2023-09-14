import * as React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, ListSubheader, MenuItem } from '@mui/material/';

export default function DialogType2(props) {
	const { onClose, open } = props;

	const handleClose = () => {
		onClose();
	};
	
return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{ '& .MuiDialog-paper': { width: '80%'} }}
      maxWidth="sm"
		>
			<DialogTitle id="alert-dialog-title">
				DialogType2: Add VTN
			</DialogTitle>
			<DialogContent>
				{/* 안내글이 필요할 경우 DialogContentText 사용 */}
				<DialogContentText sx={{ marginBottom: 1 }}>
					아래 TextField의 Input/Select를 사용하시면 됩니다.<br/>
					TextField 사용 시 margin은 dense, InputLabelProps는 shrink: true를 공통으로 적용 부탁드립니다.
				</DialogContentText>
				<TextField
					label="VTN ID"
					variant="standard"
					InputLabelProps={{
            shrink: true,
          }}
					margin="dense"										
					placeholder='공백, 특수문자(-, _ 제외) 입력 불가'
					fullWidth
					required
					focused
				/>
				<TextField
					label="VTN Name"
					variant="standard"
					InputLabelProps={{
            shrink: true,
          }}
					margin="dense"
					fullWidth					
				/>
				<TextField
					select
					label="Basic-select"
					defaultValue="none"
					margin="dense"
					fullWidth
				>
					<MenuItem value="none"><em>None</em></MenuItem>
					<MenuItem value={1}>Option 1</MenuItem>
					<MenuItem value={2}>Option 2</MenuItem>
					<MenuItem value={3}>Option 3</MenuItem>
					<MenuItem value={4}>Option 4</MenuItem>
				</TextField>
				<TextField
					select
					label="Grouped-select"
					defaultValue="none"
					margin="dense"
					fullWidth
				>
					<MenuItem value="none"><em>None</em></MenuItem>
					<ListSubheader>Category 1</ListSubheader>
					<MenuItem value={1}>Option 1</MenuItem>
					<MenuItem value={2}>Option 2</MenuItem>
					<ListSubheader>Category 2</ListSubheader>
					<MenuItem value={3}>Option 3</MenuItem>
					<MenuItem value={4}>Option 4</MenuItem>
				</TextField>
				<TextField
					label="VTN Name"
					variant="standard"
					InputLabelProps={{
            shrink: true,
          }}
					margin="dense"
					fullWidth					
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleClose}>Submit</Button>
			</DialogActions>
		</Dialog>
	);
}