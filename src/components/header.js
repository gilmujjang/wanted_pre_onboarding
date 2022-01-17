import React from "react";

function Header(){
  return(
    <nav>
      <div>
        <img alt="menu button" src="https://static.wanted.co.kr/images/icon-menu.png"></img>
        <span>wanted</span>
      </div>
      <ul>
        <li>홈</li>
        <li>채용</li>
        <li>이벤트</li>
        <li>직군별 연봉</li>
        <li>이력서</li>
        <li>커뮤니티<em><svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">New</tspan></text></g></g></g></g></g></g></g></g></svg></em></li>
        <li>프리랜서</li>
        <li>AI 합격예측<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11"><g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g><text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)"><tspan x="0" y="8">Beta</tspan></text></g></g></g></g></g></g></g></g></svg></span></li>
      </ul>
        <ul>
          <li><svg xmlns="https://www.w3.org/2000/svg" xlink="https://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18"><defs><path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path></defs><g fill="none" fill-rule="evenodd"><use fill="#333" fill-rule="nonzero" stroke="#333" stroke-width=".3" href="#qt2dnsql4a"></use></g></svg></li>
          <li>회원가입/로그인</li>
          <li>기업 서비스</li>
        </ul>
    </nav>
  )
}

export default Header;