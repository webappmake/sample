import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Stack, Button, Typography, Popover, Badge, List, ListItem, ListItemText, Divider, Link } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import PerfectScrollbar from 'react-perfect-scrollbar';


const theme = createTheme({
  //기존에 전달해드린 파일은 React 적용 전으로 palette 설정이 안되어 있음, 충돌 시 다른 이름으로 변경하시기 바랍니다.
  palette: { 
    primary: { // = _var.scss/$Core
      main: '#5851df',
      contrastText: '#ffffff',
    },
    submit: {
      main: '#ADA7EB',  // 신규색상
    }
  },  
});

function App() {
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
    <ThemeProvider theme={theme}>
      <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: 3, p: 2 }} >
        <Stack>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>Sample Preview</Typography>
          <Typography variant="subtitle1">Intellytics Dashboard Notification</Typography>
        </Stack>      
        <Button
          color="primary" //color는 배경색에 맞게 변경하여 사용
          size="small"
          aria-describedby={id} 
          onClick={handleClick}
        >
          <Badge color="error" badgeContent={100}>
            <NotificationsIcon/>
          </Badge>
        </Button>
        <Popover
          className='custom-popover'
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
          <List className='notification'>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography variant='h6' noWrap>Notification Title</Typography>
                    <Typography variant='caption'>2023/01/01</Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography variant='body2' noWrap>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit officiis, ab saepe iste distinctio architecto, odit dolores doloribus quae veritatis animi quidem. Perferendis quia sit recusandae praesentium, laborum iusto.
                    </Typography>
                    <Button variant="outlined" size='small' color='submit' endIcon={<NavigateNextRoundedIcon/>}>More</Button>
                  </>
                }
              />
            </ListItem>
            <Divider/>
            <ListItem>
              <ListItemText
                primary={
                  <>
                    <Typography variant='h6' noWrap>Notification Title Notification Title Notification Title</Typography>
                    <Typography variant='caption'>2023/01/01</Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography variant='body2' noWrap>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugit officiis, ab saepe iste distinctio architecto, odit dolores doloribus quae veritatis animi quidem. Perferendis quia sit recusandae praesentium, laborum iusto.
                    </Typography>
                    <Button variant="outlined" size='small' color='submit' endIcon={<NavigateNextRoundedIcon/>}>More</Button>
                  </>
                }
              />
            </ListItem>
          </List>          
        </Popover>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
