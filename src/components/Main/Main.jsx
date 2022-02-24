import React from "react";
import * as S from "./styled";
import TaskData from "./TaskData";

function Main() {
  return (
    <S.MainWrapper>
      {TaskData.map((task) => (
        <>
          <div>{task.company}</div>
          <div>{task.repo}</div>
          <div>{task.deploy}</div>
          <div>{task.description}</div>
        </>
      ))}
    </S.MainWrapper>
  );
}

export default Main;
