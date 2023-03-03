import styled from "styled-components";

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
`;
