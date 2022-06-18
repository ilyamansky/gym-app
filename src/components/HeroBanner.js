import React from 'react';
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroImageBanner from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {
        lg: "212px",
        xs: "70px"
      },
      ml: {
        sm: "50px",
      }
    }} position = "relative" p="20px">
      <Typography 
        color="FF2625"
        fontWeight="600"
        fontSize="26px"
      >
        Fitness Club
      </Typography>
      <Typography fontWeight={700} mb="23px" mt="30px" sx={{
        lg: {
          fontSize: "44px",
        },
        xs: {
          fontSize: "40px"
        }
      }}>
        Sweat, smile <br /> and  repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={20}>
        Check out the most effective exercises
      </Typography>
      <Button 
        variant="contained"
        color="error"
        href="#exercises"
      >
          Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        sx={{
          display: { lg: "block", xs: "none"},
          opacity: 0.1,
          color: "#FF2625",
        }}
      >
        Exercises
      </Typography>
      <img src={HeroImageBanner} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner