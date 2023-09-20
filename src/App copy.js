import * as React from 'react';
import { Box, Paper, Stack, Button, Typography, Popover } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
// import DialogType1 from './components/DialogType1';
// import DialogType2 from './components/DialogType2';

function App() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  // DialogType1
  const handleClickOpen1 = () => { setOpen1(true); };
  const handleClose1 = () => { setOpen1(false); };
  // DialogType2
  const handleClickOpen2 = () => { setOpen2(true); };
  const handleClose2 = () => { setOpen2(false); };



  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ m: 3, p: 2 }}>
        <Typography variant="caption" sx={{ marginBottom: 1, fontWeight: 600 }}>Sample Preview</Typography>
        <Typography variant="subtitle1" mb={2}>Intellytics Dashboard 다중 선택 기능 Dialog</Typography>
        <Stack spacing={1} direction="row">
          <Button 
            variant="outlined" 
            color="primary" 
            size="small"
            aria-describedby={id} 
            onClick={handleClick}
          >
            DialogType1: New Users/Registered
          </Button>
          <Popover
            className='experiment-popover type1'
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box className='experiment-popover-header'>
              <Typography variant='body1'>
                선택된 정보를 #Tag 와 하위 chip으로 보여줌 
                Tag : 그룹
                chip: 세부사항  
              </Typography>
            </Box>
            <PerfectScrollbar className='experiment-popover-body'>
              <Typography>The content of the Popover.</Typography>
            </PerfectScrollbar>              
          </Popover>
          <Button
            variant="outlined" 
            color="primary" 
            size="small"
          >
            DialogType2: Global
          </Button>
        </Stack>
      </Paper>
    </Box>  
  );
}

export default App;
