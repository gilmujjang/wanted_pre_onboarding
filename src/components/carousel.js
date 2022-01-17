import React from "react";

function Carousel(){
  const imageList = [
    {src: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.thumb_1006_280.jpg", title: "포트폴리오를 부탁해", text: "디자이너의 포폴 살펴보기"},
    {src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.thumb_1006_280.jpg", title: "성과를 내는 마케팅", text: "실제 사례를 공개합니다"},
    {src:"https://static.wanted.co.kr/images/banners/1484/b2853456.thumb_1006_280.jpg",title:"성장하는 개발자가 되려면?!", text: "OOO 검색하지 말 것!"},
    {src:"https://static.wanted.co.kr/images/banners/1490/0b775035.thumb_1006_280.jpg",title:"마케팅 주니어를 찾습니다", text: "기업 과제 풀고 취업까지 한번에!"},
    {src:"https://static.wanted.co.kr/images/banners/1489/312a0c29.thumb_1006_280.jpg",title:"2022년 달라지는 노동법령", text: "노무관리 쟁점 한 눈에 파악하기"},
    {src:"https://static.wanted.co.kr/images/banners/1488/baa54448.thumb_1006_280.jpg",title:"UX 디자이너의 커리어 설계", text: "브랜드 가치를 더하는 디자인"},
    {src:"https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",title:"개발자 성장 비결 공개!", text: "Velog, 글 쓰는 개발자들의 이야기"},
    {src:"https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",title:"해, 커리어 EP 02 공개", text: "마지막 관문 2라운드의 승자는?"},
    {src:"https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",title:"개발자 되고싶은 분들!?", text: "프론트엔드 무료 교육과정 참여하기"},
  ]
  return(
    <div>
      {imageList.map(contents => (
        <img alt={contents.src} src={contents.src}/>
      ))}
    </div>
  )
}

export default Carousel;