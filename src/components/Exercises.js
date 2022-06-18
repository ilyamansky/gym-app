import React, {useState, useEffect} from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: "smooth"})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if(bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', 
        exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, 
        exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  },[bodyPart])
  return (
    <Box id="exercises" sx={{
      mt: {lg: "110px"},
    }}
    mt = "50px"
    p = "26px"
    >
      <Typography variant="h4" mb="46px">
        Showing results
      </Typography>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" sx={{ gap: {lg: '110px', xs: '50px'}}}>
        {
          currentExercises.map((exercise, index) => 
            <ExerciseCard key={index} exercise={exercise} />
        )}
      </Stack>
      <Stack mt="60px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            count = {Math.ceil(exercises.length / exercisesPerPage)}
            size="large"
            shape="rounded"
            page={currentPage}
            onChange = {paginate}
        />
        )} 
      </Stack>
    </Box>
  )
}

export default Exercises