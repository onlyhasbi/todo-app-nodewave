import Title from '@/element/Title';
import React from 'react';
import {Grid, Stack} from '@mui/material';
import SignUpForm from '@/element/SignUpForm';
import {SignUpPayload} from "@/types/signup";

function Register() {
    const handleSubmit = (payload: SignUpPayload) => {
        console.log(payload)
        window.alert(JSON.stringify(payload));
    }

    return (
        <Grid
            container
            sx={{
                minHeight: '100vh',
                width: '100%',
                paddingTop: '4rem',
                paddingBottom: '7rem',
            }}
            justifyContent="center"
            alignItems="center"
        >
            <Stack direction="column" spacing={7}>
                <Title
                    title="Register"
                    subtitle="Let’s Sign up first for enter into Square Website. Uh She Up!"
                />
                <SignUpForm onSubmit={handleSubmit}/>
            </Stack>
        </Grid>
    );
}

export default Register;
