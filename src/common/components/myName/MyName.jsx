import { useState, useEffect } from "react";

const MyName = (props) => {
  const { title } = props;

  return (        
    <>
      <h1 className="name" > {props.nombre} </h1>
      <h3 className="title"> Software Developer  </h3>
    </>
  );
};

export default MyName;
