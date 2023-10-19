import Title from '@/element/Title';
import React from 'react';
import {Grid, Stack} from '@mui/material';
import SignUpForm from '@/element/SignUpForm';
import {SignUpPayload} from "@/types/signup";
import {post} from "@/services/axios";
import {config, url} from "@/utils/config";
import {setLocalStorage} from "@/utils/storage";
import {useRouter} from 'next/router';

function Register() {
    const router = useRouter();
    const handleSubmit = async (payload: SignUpPayload) => {
        const formatPayload = {
            email:`${payload.email}@squareteam.com`,
            fullName: `${payload.first_name} ${payload.last_name}`,
            password: payload.password
        }

        await post({url: url.register, data: formatPayload}).then(({data}) => {
            const user = {...data.content.user};
            const token = data.content.token;
            delete user.id;
            config.token_name && setLocalStorage(config.token_name, token);
            setLocalStorage(config.user, user);
            router.push('/')
        }).catch(e => console.log(e))
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
