import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';
import SignInForm from '@/element/SignInForm';
import Title from '@/element/Title';
import { useRouter } from 'next/router';
import { AuthPayload } from '@/types/auth';
import { post } from '@/services/axios';
import { config, url } from '@/utils/config';
import { isAuthenticated, setLocalStorage } from '@/utils/storage';
import Browser from '@/utils/browser';
function SignIn() {
  const router = useRouter();
  const handleSignUp = () => router.push('/signup');
  const handleSubmit = async (payload: AuthPayload) => {
    await post({ url: url.login, data: payload })
      .then(({ data }) => {
        const user = { ...data.content.user };
        const token = data.content.token;
        delete user.id;
        config.token_name && setLocalStorage(config.token_name, token);
        setLocalStorage(config.user, user);
        router.push('/');
      })
      .catch((e) => console.log(e));
  };

  const authenticated = isAuthenticated();

  React.useEffect(() => {
    if (authenticated) {
      router.push('/');
    }
  }, [authenticated, router.push]);

  if (authenticated) return null;

  return (
    <Browser>
      <Grid
        container
        sx={{ minHeight: '100vh' }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="column" spacing={7}>
          <Title
            title="Sign In"
            subtitle="Just sign in if you have an account in here. Enjoy our Website"
          />
          <SignInForm onSubmit={handleSubmit} />
          <Stack direction="row" alignItems="center" justifyContent="center">
            <Typography variant="caption" display="block">
              Do not have an Square account?
            </Typography>
            <Button
              variant="text"
              size="small"
              sx={{ textTransform: 'none', minWidth: '30px' }}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Browser>
  );
}

export default SignIn;
