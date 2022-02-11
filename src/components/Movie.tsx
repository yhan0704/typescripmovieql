import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom"
import { gql, useMutation } from "@apollo/client";

type PropsType = {
    id:number,
    isLiked:boolean
    medium_cover_image:string
}

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;


const Movie = ({id,isLiked,medium_cover_image}:PropsType) => {
    // const [toggleMovie] = useMutation(LIKE_MOVIE, {
    //     variables: { id: Number(id), isLiked }
    //   });
  return <div>
     <Link to={`/${id}`}>{Number(id)}</Link>
     <img src={medium_cover_image} alt="" />
       {/* <Container>
      <Link to={`/${id}`}>
        <Poster  />
      </Link>
      <button onClick={toggleMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </Container> */}
  </div>;
};

export default Movie;
