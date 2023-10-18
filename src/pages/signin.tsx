import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';
import SignInForm from '@/element/SignInForm';

function SignIn() {
  return (
    <Grid
      container
      sx={{ minHeight: '100vh', width: '100%' }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column" spacing={7}>
        <Stack direction="column" sx={{ textAlign: 'center' }} spacing={2}>
          <Typography variant="h3" component="h2">
            Sign In
          </Typography>
          <Typography variant="body2">
            Just sign in if you have an account in here. Enjoy our Website
          </Typography>
        </Stack>
        <SignInForm />
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Typography variant="caption" display="block">
            Already have an Square account?
          </Typography>
          <Button
            variant="text"
            size="small"
            sx={{ textTransform: 'none', minWidth: '30px' }}
          >
            Log in
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default SignIn;
