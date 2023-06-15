import { Button, TextField, Box, Container, Typography } from '@mui/material';

import { useState } from 'react';

export function RegisterForm({ onData }) {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, email, password } = state;
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Invalid email address',
      }));
      return;
    }

    if (!validatePassword(password)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Password must have at least 8 characters',
      }));
      return;
    }

    onData({ ...state });
    setState({ ...initialState });
    setErrors({ email: '', password: '' });
  };

  const validateEmail = email => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    // Password must have at least 8 characters
    return password.length >= 8;
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',

          padding: '20px',
          boxShadow:
            '0px 4px 10px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Typography variant="h4">Sign Up</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="User name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            variant="standard"
            error={!!errors.email}
            helperText={errors.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            variant="standard"
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleChange}
          />

          <Button type="submit" variant="outlined" size="small">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
