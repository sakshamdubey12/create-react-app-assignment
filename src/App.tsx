
  // Define a type for the user details (replace with your actual data structure)
  // interface UserDetails {
  //   name: string;
  //   email: string;
  //   phonenumber: number;
  //   // Add other necessary fields
  // }
  
  // // FirstPage: Where the user enters their details
  // const FirstPage: React.FC = () => {
  //   const [userDetails, setUserDetails] = useState<UserDetails>({
  //     name: '',
  //     email: '',
  //     phonenumber:0,
  //     // Initialize other necessary fields
  //   });
  //   const history = useHistory();
  
  //   const handleSubmit = () => {
  //     // Assuming the user has provided the necessary details and the form is valid
  //     setUserDetails({ name: 'John Doe', email: 'john@example.com',phonenumber:0 });
  //     history.push('/second-page'); // Redirect to the second page after successful form submission
  //   };
  
  //   return (
  //     <div>
  //       {/* Your form goes here */}
  //       <button onClick={handleSubmit}>Submit</button>
  //     </div>
  //   );
  // };
  
  // // SecondPage: Where the user should not access without providing the necessary information
  // const SecondPage: React.FC = () => {
  //   const [userDetails] = useState<UserDetails | null>({ name: 'John Doe', email: 'john@example.com',phonenumber:0 }); // Replace with the actual state variable for details provided
  
  //   // Redirect back to the first page if details are not provided
  //   if (!userDetails) {
  //     return (
  //       <div>
  //         <p>You must enter your details before accessing this page.</p>
  //         <Link to="/">Go back to the first page</Link>
  //       </div>
  //     );
  //   }
  
  //   return <div>Second Page Content</div>;
  // };
  
  // const App: React.FC = () => {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route exact path="/" component={FirstPage} />
  //         <Route exact path="/second-page" component={SecondPage} />
  //       </Routes>
  //     </Router>
  //   );
  // };
  
  // export default App;
  
  import * as React from 'react';
  import Avatar from '@mui/material/Avatar';
  import Button from '@mui/material/Button';
  import CssBaseline from '@mui/material/CssBaseline';
  import TextField from '@mui/material/TextField';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Checkbox from '@mui/material/Checkbox';
  import Link from '@mui/material/Link';
  import Grid from '@mui/material/Grid';
  import Box from '@mui/material/Box';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import { createTheme, ThemeProvider } from '@mui/material/styles';
  
  function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();
  
  export default function SignIn() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }


