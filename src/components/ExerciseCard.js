import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercises/${exercise.id}`}>
        <img src={exercise.gifUrl} alt = {exercise.name} loading="lazy" />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: '#ffa9a9',
              textTransform: "capitalize",
              fontSize: "14px",
              borderRadius: "20px"
            }}
          >{exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: '#fcc757',
              textTransform: "capitalize",
              fontSize: "14px",
              borderRadius: "20px"
            }}
          >{exercise.target}
          </Button>
        </Stack>
        <Typography ml="21px" color="#000" textTransform="capitalize" pb="10px" mt="20px"
            fontWeight="bold" fontSize="18px"
          >
            {exercise.name}
          </Typography>
    </Link>
  )
}

export default ExerciseCard