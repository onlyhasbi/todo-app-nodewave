import { useHandleChange } from '@/hooks/useHandleChange';
import { AuthPayload } from '@/types/auth';
import {
  Card,
  TextField,
  Stack,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import React from 'react';

const defaultValue = {
  username: '',
  password: '',
};

function SignInForm() {
  const { payload, handleChange } = useHandleChange<AuthPayload>(defaultValue);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(JSON.stringify(payload));
  };

  return (
    <Card sx={{ minWidth: 260, maxWidth: 560, width: 560 }}>
      <form style={{ padding: 30 }} onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2}>
          <TextField
            sx={{ width: '100%' }}
            label="Your Email / Username"
            name="username"
            onChange={handleChange}
            value={payload?.username}
            variant="outlined"
            size="small"
          />
          <TextField
            sx={{ width: '100%' }}
            label="Enter Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={payload?.password}
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
          <Button
            variant="contained"
            sx={{ textTransform: 'none' }}
            type="submit"
          >
            Login
          </Button>
        </Stack>
      </form>
    </Card>
  );
}

export default SignInForm;
