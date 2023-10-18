import React from 'react';
import {
  Grid,
  Card,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useToggle } from '@/hooks/useToggle';
import { useRouter } from 'next/router';
import { useHandleChange } from '@/hooks/useHandleChange';
import { SignUpPayload } from '@/types/signup';

const defaultValue = {
  first_name: '',
  last_name: '',
  country_code: '+62',
  phone_number: '',
  country: '',
  email: '',
  password: '',
  confirm_password: '',
  about: '',
};

function SignUpForm() {
  const { payload, setPayload, handleChange } =
    useHandleChange<SignUpPayload>(defaultValue);

  const handleSelectChange = (e: SelectChangeEvent) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const password = useToggle();
  const confirmPassword = useToggle();

  const router = useRouter();
  const handleSignIn = () => router.push('/signin');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(JSON.stringify(payload));
    setPayload(defaultValue);
  };

  return (
    <Card sx={{ minWidth: 260, maxWidth: 560, width: 560 }}>
      <form style={{ padding: 30 }} onSubmit={handleSubmit}>
        <Grid container columnSpacing={{ xs: 1, md: 2 }} rowSpacing={3}>
          <Grid item md={6}>
            <TextField
              variant="outlined"
              size="small"
              name="first_name"
              value={payload.first_name}
              onChange={handleChange}
              label="First Name"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              variant="outlined"
              size="small"
              name="last_name"
              value={payload.last_name}
              onChange={handleChange}
              label="Last Name"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" spacing={1}>
              <TextField
                variant="outlined"
                size="small"
                name="country_code"
                value={payload.country_code}
                onChange={handleChange}
                sx={{ width: '30%' }}
              />
              <TextField
                variant="outlined"
                size="small"
                name="phone_number"
                value={payload.phone_number}
                onChange={handleChange}
                label="Phone Number"
                sx={{ xs: { width: '70%' }, md: { width: '100%' } }}
              />
            </Stack>
          </Grid>
          <Grid item md={6}>
            <FormControl size="small" sx={{ width: '100%' }}>
              <InputLabel id="country">Country</InputLabel>
              <Select
                labelId="country"
                id="countries"
                value={payload.country}
                name="country"
                label="Country"
                onChange={handleSelectChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="indonesia">Indonesia</MenuItem>
                <MenuItem value="palestina">Palestina</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <FormControl sx={{ width: '100%' }} variant="outlined" size="small">
              <InputLabel htmlFor="email">Mail Address</InputLabel>
              <OutlinedInput
                id="email"
                label="Mail Address"
                type="text"
                name="email"
                value={payload.email}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    @squareteam.com
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl sx={{ width: '100%' }} variant="outlined" size="small">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={password.showPassword ? 'text' : 'password'}
                name="password"
                value={payload.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={password.handleClickShowPassword}
                      onMouseDown={password.handleMouseDownPassword}
                      edge="end"
                    >
                      {password.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControl sx={{ width: '100%' }} variant="outlined" size="small">
              <InputLabel htmlFor="confirm-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirm-password"
                type={confirmPassword.showPassword ? 'text' : 'password'}
                name="confirm_password"
                value={payload.confirm_password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={confirmPassword.handleClickShowPassword}
                      onMouseDown={confirmPassword.handleMouseDownPassword}
                      edge="end"
                    >
                      {confirmPassword.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <Stack direction="column" spacing={1}>
              <Typography variant="body2" component="label">
                Tell us about yourself
              </Typography>
              <TextField
                placeholder="Hello my name"
                name="about"
                value={payload.about}
                onChange={handleChange}
                size="small"
                multiline
                rows={4}
                maxRows={6}
                sx={{ width: '100%' }}
              />
            </Stack>
          </Grid>
          <Grid item md={12}>
            <Stack direction="row" spacing={2} sx={{ paddingTop: '1.5rem' }}>
              <Button
                color="inherit"
                variant="contained"
                sx={{ width: '25%', textTransform: 'none' }}
                onClick={handleSignIn}
              >
                Login
              </Button>
              <Button
                variant="contained"
                type="submit"
                sx={{ width: '75%', textTransform: 'none' }}
              >
                Register
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

export default SignUpForm;
