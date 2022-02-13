import React from "react";
import * as S from "./styled";

function index() {
  return (
    <S.HeaderWrapper>
      <S.TextBox>
        <S.Name>민무길</S.Name>
        <S.Descriptions>
          원티드 프리온보딩 프론트엔드 코스에 참여했습니다
          <br />
          <S.Link href="https://www.wanted.co.kr/events/pre_onboarding_course_6">
            코스 정보 링크
          </S.Link>
          <br />
        </S.Descriptions>
      </S.TextBox>
      <S.ProfileImage
        src="https://avatars.githubusercontent.com/u/40172373?v=4"
        alt="profile image"
      />
    </S.HeaderWrapper>
  );
}

export default index;
