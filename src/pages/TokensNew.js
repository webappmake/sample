import * as React from 'react';
import { Box, Typography, Button, Link, Paper, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { Stack } from '@mui/system';

function TokensNew() {
  return (
		<>
			<Box className='contents-header'>
				<Typography className='title' variant='h3'>
					새 권한 토큰
				</Typography>
				<Stack direction="row">
					<Typography className='desc' variant='body1'>
						권한 토큰은 일반적인 OAuth 액세스 토큰과 같은 기능을 합니다.
						HTTPS를 통해 Git에 접속할 때 비밀번호 대신 사용되거나 기본 인증을 통해 API에 접근하는 데 사용됩니다.<br/>
						LG ThinQ API에 접근하는 방법에 대한 자세한 내용은 <Link>thinq.developer.lge.com 페이지를 참조하세요.</Link>					
					</Typography>
					{/* <Button variant="contained" color="primary" size="large">새 토큰 만들기</Button> */}
				</Stack>
			</Box>

			<Paper elevation={2} className='contents-form'>				
				<Stack direction="row" justifyContent="flex-end">
					<Typography variant='caption' className='required'>
						* Required Field
					</Typography>    
				</Stack>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography className='title' variant='h4'>
						토큰 이름 <span className='required'>*</span>	
					</Typography>				
					<TextField
						hiddenLabel
						id="filled-hidden-label-normal"
						variant="outlined"
						placeholder="토큰 이름을 입력해주세요"
					/>
					<Stack direction="row" className='title-wrap'>
						<Typography className='title' variant='h4'>
							권한 범위 <span className='required'>*</span>	
						</Typography>
						<Stack spacing={1} direction="row">
							<Button variant="contained" color="inherit">취소</Button>
							<Button variant="contained" color="primary" href="/TokensCreated">토큰 만들기</Button>
						</Stack>
					</Stack>
					<Box className='contents-form-checkbox'>
						<FormControlLabel
							label="장치"
							control={<Checkbox	color="secondaryLight"/>}
						/>
						<Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
							<FormControlLabel
								label="모든 디바이스 표시"
								control={<Checkbox color="secondaryLight"/>}
							/>
							<FormControlLabel
								label="모든 디바이스 보기"
								control={<Checkbox color="secondaryLight"/>}
							/>
							<FormControlLabel
								label="모든 디바이스 관리"
								control={<Checkbox color="secondaryLight"/>}
							/>
							<FormControlLabel
								label="모든 디바이스 제어"
								control={<Checkbox color="secondaryLight"/>}
							/>
						</Box>
					</Box>
					<Box className='contents-form-checkbox'>
						<FormControlLabel
							label="설치된 앱"
							control={<Checkbox	color="secondaryLight"/>}
						/>
						<Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
							<FormControlLabel
								label="모든 설치된 앱 표시"
								control={<Checkbox color="secondaryLight"/>}
							/>
							<FormControlLabel
								label="모든 설치된 앱 보기"
								control={<Checkbox color="secondaryLight"/>}
							/>
							<FormControlLabel
								label="모든 설치된 앱 관리"
								control={<Checkbox color="secondaryLight"/>}
							/>
						</Box>
					</Box>
				</Box>
			</Paper>
		</>
  );
}
export default TokensNew;

