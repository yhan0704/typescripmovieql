import React from 'react';
import { useParams } from "react-router-dom";

type PropsType ={
    id:string
}

const Details = () => {
    const i = useParams();
    console.log(i)
  return <div>details</div>;
};

export default Details;
