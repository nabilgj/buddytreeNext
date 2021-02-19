import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
import Copyright from '../src/Copyright';

import Header from '../src/Header';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Better Buy
        </Typography>

        {/* <ProTip /> */}
        <Copyright />
      </Box>
    </Container>
  );
}
