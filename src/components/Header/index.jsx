import React from "react";
import * as S from "./styled";

function index() {
  return (
    <S.HeaderWrapper>
      <S.TextIconWrapper>
        <S.TextBox>
          <S.Name>민무길</S.Name>
          <S.Descriptions>
            원티드 프리온보딩 프론트엔드 코스에 참여했습니다
            <br />
            <S.Link href="https://www.wanted.co.kr/events/pre_onboarding_course_6">
              코스 정보 링크
            </S.Link>
            <br />이 페이지는 코스에 참여하면서 수행한 과제들을 정리하기 위한
            페이지 입니다
          </S.Descriptions>
        </S.TextBox>
        <div>
          <S.Link href="https://github.com/pre-onboarding-course-team-6">
            <S.Logo
              src="https://avatars.githubusercontent.com/u/98318176?s=200&v=4"
              alt="my team logo"
            />
            팀 깃허브 링크
          </S.Link>
        </div>
      </S.TextIconWrapper>
      <S.ProfileImage
        src="https://avatars.githubusercontent.com/u/40172373?v=4"
        alt="profile image"
      />
    </S.HeaderWrapper>
  );
}

export default index;
