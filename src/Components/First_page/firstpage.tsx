import React, { useState } from 'react';
// import { BrowserRouter as  useNavigate} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';
// import { Table } from '../node_modules/@mui/material/index';
// import Details from './DetailsModel';

const FirstPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      setIsFormSubmitted(true);
      navigate('/second-page');
    }
    else{
        navigate('/')
        alert("Please Enter the Details")
        
    }
  };

  const handleSnackbarClose = () => {
    setIsFormSubmitted(false);
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component="h2" gutterBottom>
        User Information
      </Typography>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
      <TextField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth margin="normal" />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
      <Button variant="contained" onClick={handleSubmit} color="primary">
        Submit
      </Button>
      <Snackbar open={isFormSubmitted} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Typography variant="body2">User details saved!</Typography>
      </Snackbar>
    </Container>
  );
};
export default FirstPage;