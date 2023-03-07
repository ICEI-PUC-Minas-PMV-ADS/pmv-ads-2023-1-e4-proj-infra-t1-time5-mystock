import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 62px);

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const DivRow = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "none"};
  justify-content: ${(props) => props.justifyContent || "none"};
  align-items: center;
`;

export const TitlePages = styled.h1`
  font-weight: 400;
  margin-top: ${(props) => props.marginTop || "none"};

  span {
    color: #1bbbff;
  }
`;

export const DescriptionPages = styled.p`
  font-weight: 300;
  font-size: 14px;
`;
