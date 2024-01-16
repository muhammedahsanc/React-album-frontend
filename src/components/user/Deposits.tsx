import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>ALBUM COUNTS</Title>
      <Typography component="p" variant="h4">
        11
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 18 Dec, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Albums
        </Link>
      </div>
    </React.Fragment>
  );
}