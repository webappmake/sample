import * as React from 'react';
import { Box, Typography, Button, Paper, Tooltip, Link, Alert } from '@mui/material';
import { Stack } from '@mui/system';
import DialogType1 from '../components/DialogType1';

function TokensCreated() {
	const [open1, setOpen1] = React.useState(false);

	// DialogType1
	const handleClickOpen1 = () => { setOpen1(true); };
	const handleClose1 = () => { setOpen1(false); };

  return (
		<>
			<Box className='contents-header'>
				<Typography className='title' variant='h3'>
					개인 권한 토큰
				</Typography>
				<Stack direction="row">
					<Typography className='desc' variant='body1'>
						LG ThinQ API에 접근할 때 사용하기 위해 만든 토큰입니다.<br/>
						스크립트 또는 테스트를 위해 API 토큰이 필요하나요? LG ThinQ API에 접근하기 위해 필요한 개인 권한 토큰을 만드세요.
					</Typography>
					<Button variant="contained" color="primary" size="large" href="/TokensNew">새 토큰 만들기</Button>
				</Stack>
			</Box>	

			<Box className='contents-alert'>
				{/* <Alert severity="success" variant="filled">
					<span>Test Token Name</span> 삭제를 완료했습니다.
				</Alert> */}
				<div className='custom-info'>
					새 개인 권한 토큰을 복사해 두어야 합니다. 이후에는 다시 확인할 수 없습니다!
				</div>
			</Box>

			<Paper className='contents-summary' sx={{ marginBottom: 5 }}>
				<Stack spacing={1} direction="row" className='copy'>
					<Typography className='token' variant='h5'>
						7dfcd228-9a44-4126-a0a3-7c8a221da533
					</Typography>
					<Tooltip title="Copied to Clipboard!" arrow placement='right'>
						<Link className='copy-link'>토큰 복사</Link>
					</Tooltip>
				</Stack>
			</Paper>
			
			<Paper className='contents-summary'>		
				<Stack spacing={1} direction="column">
					<Typography className='title' variant='h5'>
						Test Token Name 3 --
					</Typography>
					<Typography className='desc' variant='caption'>
						r:installedapps:*,l:installedapps,x:devices:*,l:devices,r:devices:*,w:devices:*,w:installedapps:*
					</Typography>
				</Stack>
				<Button variant="contained" color="error" onClick={handleClickOpen1}>삭제</Button>
			</Paper>
			<Paper className='contents-summary'>		
				<Stack spacing={1} direction="column">
					<Typography className='title' variant='h5'>
						Test Token Name 2 --
					</Typography>
					<Typography className='desc' variant='caption'>
						r:installedapps:*,l:installedapps,x:devices:*,l:devices,r:devices:*,w:devices:*,w:installedapps:*
					</Typography>
				</Stack>
				<Button variant="contained" color="error" onClick={handleClickOpen1}>삭제</Button>
			</Paper>
			<Paper className='contents-summary'>	
				<Stack spacing={1} direction="column">
					<Typography className='title' variant='h5'>
						Test Token Name 1 --
					</Typography>
					<Typography className='desc' variant='caption'>
						r:installedapps:*,l:installedapps,x:devices:*,l:devices,r:devices:*,w:devices:*,w:installedapps:*
					</Typography>
				</Stack>
				<Button variant="contained" color="error"  onClick={handleClickOpen1}>삭제</Button>
			</Paper>

			{/* Dialog */}
      <DialogType1 open={open1} onClose={handleClose1} />
		</>
  );
}
export default TokensCreated;
