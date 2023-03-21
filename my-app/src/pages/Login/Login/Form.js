import {useState} from 'react';
import {Alert, Box, Button, FormHelperText, Link, Stack, TextField, Typography} from "@mui/material";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    flex: '1 1 auto',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box
                    sx={{
                        maxWidth: 550,
                        px: 3,
                        py: '100px',
                        width: '100%'
                    }}
                >
                    <div>
                        <Stack
                            spacing={1}
                            sx={{ mb: 3 }}
                        >
                            <Typography variant="h4">
                                Вход
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                            >
                                Create by
                                &nbsp;
                                <Link
                                    href="/auth/register"
                                    underline="hover"
                                    variant="subtitle2"
                                >
                                    Fronto
                                </Link>
                            </Typography>
                        </Stack>
                        <form
                            noValidate
                        >
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email"
                                />
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    placeholder="password"
                                />
                            </Stack>
                            <FormHelperText sx={{ mt: 1 }}>
                                Только для зарегистрированных пользователей!
                            </FormHelperText>
                            <Button
                                onClick={() => handleClick(email, pass)}
                            >
                                {title}
                            </Button>
                            <Alert
                                color="primary"
                                severity="info"
                                sx={{ mt: 3 }}
                            >
                                <div>
                                    Тестовый вход <b>demo@fronto.kz</b> и <b>Password123</b>
                                </div>
                            </Alert>
                        </form>
                    </div>
                </Box>
            </Box>
        </>
    );
}

export default Form;