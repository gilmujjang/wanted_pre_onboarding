import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 36px;
  width: 100%;
`;

export const TaskBox = styled.div`
  margin: 24px auto;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 8px;
  border-radius: 8px;
  width: 50%;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const Date = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export const CompanyName = styled.div`
  margin: 0 12px;
  font-size: 18px;
`;

export const EtcWrapper = styled.div``;

export const Etc = styled.span`
  background-color: #ace5ee;
  padding: 2px 4px;
  border-radius: 12px;
  margin: 4px;
  font-size: 13px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  margin: 8px;
`;

export const Repo = styled.a`
  text-decoration: none;
  color: black;
`;
