import * as React from 'react';
import { Paper, Box, TextField, MenuItem , Button, Stack, Slider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';

const marks = [
  {
    value: 0,
    label: '19W',
  },
  {
    value: 1,
    label: '20W',
  },
  {
    value: 2,
    label: '21W',
  },
  {
    value: 3,
    label: '22W',
  },
  {
    value: 4,
    label: '23W',
  },
  {
    value: 5,
    label: '24W',
  }
];

export default function SearchArea() {
  return ( 
    <Paper elevation={2} className='article p0'>
      <Box className='search-area'>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Slider
            valueLabelDisplay="auto"
            getAriaValueText={marks.value}
            marks={marks}          
            max={5}
            min={0}
            defaultValue={[2, 3]}
            sx={{ minWidth: 'max(15.6250vw, 300px)', mr: 2 }}
          />
          <TextField
            select
            label="Date Unit"
            defaultValue={2}
            margin="dense"
            size="small"
            sx={{ minWidth: 'max(7.2917vw, 140px)' }}
          >
            <MenuItem value={1}>Month</MenuItem>
            <MenuItem value={2}>Week</MenuItem>
            <MenuItem value={3}>Day</MenuItem>
          </TextField>
          <TextField
            select
            label="Period"
            defaultValue={4}
            margin="dense"    
            size="small"
            sx={{ minWidth: 'max(8.3333vw, 160px)' }}
          >
            <MenuItem value="none"><em>None</em></MenuItem>
            <MenuItem value={1}>Last 7 days</MenuItem>
            <MenuItem value={2}>Last 14 days</MenuItem>
            <MenuItem value={3}>Last 4 weeks</MenuItem>
            <MenuItem value={4}>Last 12 weeks</MenuItem>
          </TextField>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <TextField
            select
            label="Region"
            defaultValue={1}
            margin="dense"
            size="small"
            sx={{ minWidth: 'max(7.2917vw, 140px)' }}
          >
            <MenuItem value={1}>GLOBAL</MenuItem>
            <MenuItem value={2}>Week</MenuItem>
            <MenuItem value={3}>Day</MenuItem>
          </TextField>
          <TextField
            select
            label="Device"
            defaultValue={1}
            margin="dense"
            size="small"
            sx={{ minWidth: 'max(7.2917vw, 140px)' }}
          >
            <MenuItem value={1}>All Device</MenuItem>
            <MenuItem value={2}>H&A</MenuItem>
          </TextField>
          <Button
            color="secondary"
            variant="contained" 
            startIcon={<DownloadIcon />}
          >
            Excel Download
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}