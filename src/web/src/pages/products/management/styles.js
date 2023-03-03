import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 62px);

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  gap: 1%;
  overflow-y: auto;
  height: calc(100vh - 140px);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    :hover {
      background-color: #1bbbff;
    }
  }
`;

export const CardSubcategorys = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #fff3;
  border-radius: 5px;
  cursor: pointer;
  .icon {
    font-size: 25px;
    color: ${(props) => (props.active ? "#1bbbff" : "#fff")};
  }

  h2 {
    color: ${(props) => (props.active ? "#1bbbff" : "#fff")};
    font-weight: 500;
  }
`;

export const ContentCards = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  margin-top: 20px;
  gap: 10px;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    :hover {
      background-color: #1bbbff;
    }
  }
`;
export const ButtonBack = styled.div`
  display: none;
  cursor: pointer;

  .icon {
    font-size: 25px;
    color: #fff;
  }

  @media (max-width: 700px) {
    display: flex;
  }
`;