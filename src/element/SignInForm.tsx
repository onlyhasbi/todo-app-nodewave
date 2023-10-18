import {
  Card,
  TextField,
  Stack,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import React from 'react';

function SignInForm() {
  return (
    <Card sx={{ minWidth: 260, maxWidth: 560, width: 560 }}>
      <form style={{ padding: 30 }}>
        <Stack direction="column" spacing={2}>
          <TextField
            sx={{ width: '100%' }}
            label="Your Email / Username"
            variant="outlined"
            size="small"
          />
          <TextField
            sx={{ width: '100%' }}
            label="Enter Password"
            variant="outlined"
            size="small"
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <FormControlLabel
              value="remember"
              control={<Checkbox />}
              label="Remember Me"
              labelPlacement="end"
            />
            <Button variant="text" sx={{ textTransform: 'none' }}>
              Forgot Password
            </Button>
          </Stack>
          <Button variant="contained" sx={{ textTransform: 'none' }}>
            Login
          </Button>
        </Stack>
      </form>
    </Card>
  );
}

export default SignInForm;
