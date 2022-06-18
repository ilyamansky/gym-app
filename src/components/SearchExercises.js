import React, {useState, useEffect} from 'react';
import {Box, Stack, Typography, Button, TextField} from '@mui/material';
//import { borderRadius, textTransform } from '@mui/system';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  //const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);  
    }
    fetchExercisesData();
    //console.log(bodyParts);
  },[])

  const handleSearch = async () => {
    if(search) {
      const exercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises', 
      exerciseOptions);
      const searchedExercises = exercises.filter((exercise) => 
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)   
      )
      console.log(searchedExercises);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt="37px"
      p="20px"
    >
      <Typography fontWeight={700} sx ={{ fontSize: {lg: "44px", xs: "30px"}}} mb="30px" textAlign="center">
        Awesome exercises <br /> You should know
      </Typography>
      <Box position = "relative" mb="72px">
        <TextField
          sx = {{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "800px", xs: "330px"
            },
            backgroundColor: "#fff",
            borderRadius: '40px'
          }}
          height="76px"
          placeholder="Search Exercises"
          onChange = {(e) => {setSearch(e.target.value.toLowerCase())}}
          value = {search}
          type="text"
        />
        <Button className='search-btn'sx={{
          bgcolor: '#ff2625',
          width: {lg: "175px", xs: "80px"},
          textTransform: "none",
          color: '#fff',
          height: "56px",
          position: "absolute",
          right: "0"

        }}
        onClick = {handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{width: '100%', position: "relative", p: "20px"}}>
        <HorizontalScrollBar data = {bodyParts} bodyParts bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises