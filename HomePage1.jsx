import {
    AppBar,
    CssBaseline,
    Grid,
    Toolbar,
    Typography,
    Link,
    TextField,
    Button,
    Box,Container
  } from "@mui/material";
  import React from "react";
  import InfoIcon from "@mui/icons-material/Info";
  import SearchIcon from "@mui/icons-material/Search";
  
  const HomePage1 = () => {
    return (
      <>
        <CssBaseline />
        <AppBar color="primary" position="fixed">
                  <Toolbar>
                      <Grid container spacing={30} alignItems="center">
                          <Grid item>
                              <Grid container alignItems="center" spacing={2}>
                                  <Grid item>
                                      <InfoIcon/>
                                  </Grid>
                               </Grid>
                          </Grid>
                          <Grid item>
                              <Grid container justifyContent="space-between" spacing={15}>
                                  <Grid item>
                                      <Link component="button" variant="body2" underline="hover" color="black">
                                         <Typography variant="h6">Home</Typography>
                                      </Link>
                                  </Grid>
                                  <Grid item>
                                      <Link component="button" variant="body2" underline="hover" color="black" >
                                         <Typography variant="h6">About</Typography>
                                      </Link>
                                  </Grid>
                                  <Grid item>
                                      <Link component="button" variant="body2" underline="hover" color="black">
                                         <Typography variant="h6">Contact</Typography>
                                      </Link>
                                  </Grid>
                              </Grid>
                          </Grid>
                          <Grid item>
                              <Grid container alignItems="center">
                                  <Grid item mr={2}>
                                      <TextField variant="standard" placeholder="Search" color="secondary"/>
                                  </Grid>
                                  <Grid item>
                                      <Button variant="inlined">
                                          <SearchIcon />
                                      </Button>
                                  </Grid>
                                  <Grid item>
                                      <Link component="button" variant="body2" underline="hover" color="black">
                                         <Button variant="contained"><Typography variant="h6">Login</Typography></Button>
                                      </Link>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Toolbar>
              </AppBar>
              <main>
                  <Grid>
                  <Box sx={{ backgroundImage:'url(https://education.tamu.edu/wp-content/uploads/2020/04/iStock-1132973727-2048x1367.jpg)', height: '75vh',backgroundSize: '100% 100%',}}>
                          <Grid py={5} container justifyContent="center" sx={{ height: '100%' }} alignItems="center">
                              <Grid item>
                                  <Typography
                                      variant="h5"
                                      sx={{ color: 'white', fontWeight: 'bold' }}>Vrit Technologies<br/>
                                  </Typography>
                              </Grid>
                           
                          </Grid>
                      </Box>
                      <Container maxWidth="md">
                          <Grid container spacing={3} py={5}>
                              <Grid item lg={6} md={12} sm={12}>
                                  <Typography variant="h4" text-align='center'>
                                      About Vrit Technologies.
                                  </Typography>
                              </Grid>
                          </Grid>
                      </Container>
                      <Container>
                          <Typography color="textSecondary" align="left" py={2}>
                              Vrit Technologies is believed to be one of the
                              popular providers of IT services in Nepal. The
                              company is equipped with fine infrastructure and
                              ideal technology support. Vrit Tech has a broader
                              distribution network so that the business
                              requirements of the partners can be satisfied. Our
                              primary asset is our team of talented, enthusiastic
                              and committed individuals.
                          </Typography>
                      </Container>
                      <Container>
                          <Typography color="textSecondary" align="left" py={2}>
                              Bibek and Umesh Subedi the two co-founders started
                              Vrit Technologies as an information technology
                              startup in 2019. Since the last three years, Vrit
                              technology has helped numerous startups and
                              businesses grow and scale by delivering digital
                              services such as web development, digital marketing,
                              cybersecurity solutions, IoT and business
                              automation, and more.
                          </Typography>
                      </Container>
                  </Grid>
              </main>
      </>
    );
  };
  
  export default HomePage1;