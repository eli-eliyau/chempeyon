import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h4">Welcome to the Stock Portfolio</Typography>
      <Button variant="contained" onClick={() => navigate('/portfolio')}>
        Go to Portfolio
      </Button>
    </div>
  );
};

export default Home;
