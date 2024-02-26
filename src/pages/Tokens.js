import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Stack } from '@mui/system';

function Tokens() {
  return (		
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
  );
}
export default Tokens;

