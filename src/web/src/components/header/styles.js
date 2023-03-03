import styled from "styled-components";

export const HeaderStyles = styled.div`
  background-color: #454545;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  color: #fff;
  border-bottom: 1px solid #fff3;
  position: relative;
  align-items: center;

  h2 {
    font-weight: 400;
    margin: 0;
    cursor: pointer;
    flex: 1;
  }
`;

export const ContentNav = styled.nav`
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;

    li {
      list-style: none;
      position: relative;

      a {
        font-size: 14px;
        font-weight: 300;
        cursor: pointer;
        :hover {
          color: #ccc;
        }
      }
    }
  }
`;

export const DropDown = styled.div`
  background-color: #454545;
  width: 170px;
  padding: 10px 15px;
  max-width: 400px;
  overflow: auto;
  border-radius: 5px;
  border: 1px solid #fff3;
  position: absolute;
  margin-top: 10px;
  z-index: 1000;

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;

    li {
      margin: 0;
      padding: 0;

      a {
        font-size: 14px;
        margin: 0;
      }
    }
  }
`;

export const DataUser = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid #fff3;
  padding-left: 20px;
`;

export const NameUser = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 400;
    font-size: 14px;
  }

  p {
    font-weight: 300;
    font-size: 12px;
    color: #ccc;
  }
`;

export const ImageUser = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
`;
