import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  margin-bottom: 10px;

  p {
    color: #fff;
    font-weight: 400;
  }
  button {
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    p {
      font-weight: 300;
      font-size: 15px;
      :hover {
        color: #ccc;
      }
    }

    .icon {
      font-size: 30px;
      color: #fff;
    }

    @media (max-width: 700px) {
      p {
        display: none;
      }
    }
  }
`;
