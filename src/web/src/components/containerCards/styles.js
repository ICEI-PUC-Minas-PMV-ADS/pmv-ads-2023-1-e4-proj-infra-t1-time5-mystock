import styled from "styled-components";

export const ContainerCardStyle = styled.div`
  background-color: #454545;
  flex: 2;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  height: 100%;
  gap: 0;
  justify-content: none;
  position: relative;

  @media (max-width: 700px) {
    position: absolute;
    display: ${(props) => (props.show ? "flex" : "none")};
  }
`;
