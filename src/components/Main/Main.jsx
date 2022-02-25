import React from "react";
import * as S from "./styled";
import TaskData from "./TaskData";

function Main() {
  return (
    <S.MainWrapper>
      {TaskData.map((task) => (
        <S.TaskBox>
          <S.TitleWrapper>
            <S.FlexDiv>
              <S.CompanyName>{task.company}</S.CompanyName>
              <S.EtcWrapper>
                {task.etc.map((etc) => {
                  return <S.Etc>{etc}</S.Etc>;
                })}
              </S.EtcWrapper>
            </S.FlexDiv>
            <div>
              <S.Date>{task.date}</S.Date>
            </div>
          </S.TitleWrapper>
          <S.ContentWrapper>
            <S.Description>{task.description}</S.Description>
            <a href={task.repo}>깃허브 레포지토리 링크</a>
            <a href={task.deploy}>배포 링크</a>
          </S.ContentWrapper>
        </S.TaskBox>
      ))}
    </S.MainWrapper>
  );
}

export default Main;
