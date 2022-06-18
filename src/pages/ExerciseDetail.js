import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {fetchData, exerciseOptions, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const exerciseVideosUrl ='https://youtube-search-and-download.p.rapidapi.com';

      const exercisesData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exercisesData);
      
      const youtubeVideosData = await fetchData(`${exerciseVideosUrl}/search?query=${exerciseDetail.name}`, youtubeOptions);
      setYoutubeVideos(youtubeVideosData.contents);
    }

    fetchExerciseData();
  },[id]);

  console.log(youtubeVideos);
  
  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail} />
      <ExerciseVideos youtubeVideos = {youtubeVideos} name = {exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail