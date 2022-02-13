import styled from "styled-components";

export const HeaderWrapper = styled.div`
  padding: 48px 8px 24px 8px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #efefef;
`;

export const TextIconWrapper = styled.div`
  width: 50%;
  min-width: 240px;
  max-width: 540px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
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

export const Logo = styled.img`
  width: 36px;
`;

export const ProfileImage = styled.img`
  width: 50%;
  min-width: 240px;
  max-width: 360px;
`;
