import React, {useState} from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  object-fit: cover;
`;

const ElseImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 4px;
  object-fit: cover;
`;

const SubImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  object-fit: cover;
  filter: brightness(50%);
`;

const ElseSubImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 4px;
  object-fit: cover;
  filter: brightness(50%);
`;

const SelfCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const TextBox = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 124px;
  left: 32px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
`;

const Title = styled.div`
  margin: 0;
  font-size: 20px;
  font-weight: 550;
  padding: 20px 20px 0 20px;
`;

const Text = styled.div`
  margin: 0;
  padding: 8px 20px;
  height: 36px;
  font-size: 14px;
`;

const Link = styled.div`
  border-top: 1px solid #cccccc;
  padding: 12px;
  color: #3366FF;
  font-weight: 600;
  font-size: 14px;
  display: flex;
`;

const Arrow = styled.div`
  width: 14px;
  height: 14px;
  color: #3366FF;
`;

const MoveArrow = styled.div`
  width: 24px;
  height: 24px;
  background-color: #cfcfcf;
  padding: 20px 4px;
  border-radius: 24px;
  opacity: 0.7;
  position: absolute;
  top: 100px;
  z-index: 1;
`;

const SubContent = styled.div`
  width: 19vw;
`;
const MainContent = styled.div`
  width: 60vw;
  position: relative;
  margin: 0 24px;
`;

function Carousel(props){
  const {size} = props;
  const [state, setState] = useState(1);
  const imageList = [
    {src:"https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",title:"개발자 되고싶은 분들!?", text: "프론트엔드 무료 교육과정 참여하기"},
    {src: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.thumb_1006_280.jpg", title: "포트폴리오를 부탁해!", text: "디자이너의 포폴 살펴보기"},
    {src: "https://static.wanted.co.kr/images/banners/1486/fba2df30.thumb_1006_280.jpg", title: "성과를 내는 마케팅", text: "실제 사례를 공개합니다"},
    {src:"https://static.wanted.co.kr/images/banners/1484/b2853456.thumb_1006_280.jpg",title:"성장하는 개발자가 되려면?!", text: "OOO 검색하지 말 것!"},
    {src:"https://static.wanted.co.kr/images/banners/1490/0b775035.thumb_1006_280.jpg",title:"마케팅 주니어를 찾습니다", text: "기업 과제 풀고 취업까지 한번에!"},
    {src:"https://static.wanted.co.kr/images/banners/1489/312a0c29.thumb_1006_280.jpg",title:"2022년 달라지는 노동법령", text: "노무관리 쟁점 한 눈에 파악하기"},
    {src:"https://static.wanted.co.kr/images/banners/1488/baa54448.thumb_1006_280.jpg",title:"UX 디자이너의 커리어 설계", text: "브랜드 가치를 더하는 디자인"},
    {src:"https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",title:"개발자 성장 비결 공개!", text: "Velog, 글 쓰는 개발자들의 이야기"},
    {src:"https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",title:"해, 커리어 EP 02 공개", text: "마지막 관문 2라운드의 승자는?"},
    {src:"https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",title:"개발자 되고싶은 분들!?", text: "프론트엔드 무료 교육과정 참여하기"},
  ]
  function Next(){
    if(state === 8){
      setState(1)
    } else{
      setState(state + 1);
    }
  }
  function Prev(){
    if(state === 1){
      setState(8)
    } else {
      setState(state - 1);
    }
  }

  setTimeout(() => Next(), 5000)

  function PcCarousel(){
    return(
      <div>
        <SelfCarousel>
          <SubContent>
            <SubImage alt={imageList[state-1].src} src={imageList[state-1].src}/>
          </SubContent>
          <MainContent>
            <MoveArrow onClick={Prev} style={{left: "-100px"}}>
              <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"/>
              </svg>
            </MoveArrow>
            <Image alt={imageList[state].src} src={imageList[state].src}/>
            <TextBox>
              <Title>{imageList[state].title}</Title>
              <Text>{imageList[state].text}</Text>
              <Link>
                바로가기
                <Arrow>
                  <svg viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"/>
                  </svg>
                </Arrow>
              </Link>
            </TextBox>
            <MoveArrow onClick={Next}  style={{right: "-100px"}}>
              <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"/>
              </svg>
            </MoveArrow>
          </MainContent>
          <SubContent>
            <SubImage alt={imageList[state+1].src} src={imageList[state+1].src}/>
          </SubContent>
        </SelfCarousel>
      </div>
    )
  }

  function ElseCarousel(){
    return(
      <>
        <div>
          <SelfCarousel>
            <SubContent>
              <ElseSubImage alt={imageList[state-1].src} src={imageList[state-1].src}/>
            </SubContent>
            <MainContent>
              <ElseImage alt={imageList[state].src} src={imageList[state].src}/>
            </MainContent>
            <SubContent>
              <ElseSubImage alt={imageList[state+1].src} src={imageList[state+1].src}/>
            </SubContent>
          </SelfCarousel>
        </div>
        <div style={{width: "300px", margin:"auto", textAlign: "center"}}>
          <Title>{imageList[state].title}</Title>
          <Text>{imageList[state].text}</Text>
          <div style={{ color: "#3366FF",fontWeight: "600",fontSize: "14px", display: "flex", margin: "auto", justifyContent:"center"}}>
            바로가기
            <Arrow>
              <svg viewBox="0 0 18 18">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"/>
              </svg>
            </Arrow>
          </div>
      </div>
      </>
    )
  }

  if(size > 993){ return <PcCarousel/>}

  return (
    <ElseCarousel/>
  );
}

export default Carousel;