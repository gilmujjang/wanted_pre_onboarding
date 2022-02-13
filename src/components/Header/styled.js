import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 48px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #efefef;
`;

export const TextBox = styled.div`
  width: 50%;
  min-width: 240px;
  max-width: 540px;
`;

export const Name = styled.h1``;

export const Descriptions = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Link = styled.a`
  color: #4682b4;
  text-decoration: none;
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 50%;
  min-width: 240px;
  max-width: 360px;
`;
