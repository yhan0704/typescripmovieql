import React from 'react';
import {gql, useQuery} from '@apollo/client'

interface Movies{
    id:number;
    title:string;
}

interface MoviesData{
    movies:Movies[];
}

const GET_MOVIES = gql`
   query movies{
       movies{
           id
           title
       }
   }
`

const Home = () => {
    const {loading, data} = useQuery<MoviesData>(
        GET_MOVIES
    )
    console.log(data)
  return <div>home</div>;
};

export default Home;
