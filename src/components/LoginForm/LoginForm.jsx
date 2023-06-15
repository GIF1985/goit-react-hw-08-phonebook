import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField, Box, Container, Typography } from '@mui/material';

import { useState } from 'react';

export function LoginForm({ onData }) {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { email, password } = state;
  const [error, setError] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
    setError(prevError => ({
      ...prevError,
      [name]: '',
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email) {
      setError(prevError => ({
        ...prevError,
        email: 'Email is required',
      }));
    }
    if (!password) {
      setError(prevError => ({
        ...prevError,
        password: 'Password is required',
      }));
    }
    if (email && password) {
      onData({ ...state });
      setState({ ...initialState });
      setError({ email: '', password: '' });
    }
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
        <Typography variant="h4">Log In</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            variant="standard"
            error={!!error.email}
            helperText={error.email}
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
            error={!!error.password}
            helperText={error.password}
            onChange={handleChange}
          />

          <Button type="submit" variant="contained" size="small">
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
