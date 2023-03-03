import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  max-width: ${(props) => (props.m3 ? "30%" : "49%")};
  width: 100%;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #fff3;
  border-radius: 5px;

  h2 {
    font-weight: 500;
  }

  p {
    font-weight: 300;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
`;
