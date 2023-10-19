import React from 'react';
import {Grid, Stack, Typography, Button} from '@mui/material';
import SignInForm from '@/element/SignInForm';
import Title from '@/element/Title';
import {useRouter} from 'next/router';
import {AuthPayload} from "@/types/auth";

function SignIn() {
    const router = useRouter();
    const handleSignUp = () => router.push('/signup');
    const handleSubmit = (payload: AuthPayload) => {
        console.log(payload)
        window.alert(JSON.stringify(payload));
    }

    return (
        <Grid
            container
            sx={{minHeight: '100vh'}}
            justifyContent="center"
            alignItems="center"
        >
            <Stack direction="column" spacing={7}>
                <Title
                    title="Sign In"
                    subtitle="Just sign in if you have an account in here. Enjoy our Website"
                />
                <SignInForm onSubmit={handleSubmit}/>
                <Stack direction="row" alignItems="center" justifyContent="center">
                    <Typography variant="caption" display="block">
                        Do not have an Square account?
                    </Typography>
                    <Button
                        variant="text"
                        size="small"
                        sx={{textTransform: 'none', minWidth: '30px'}}
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Stack>
        </Grid>
    );
}

export default SignIn;
