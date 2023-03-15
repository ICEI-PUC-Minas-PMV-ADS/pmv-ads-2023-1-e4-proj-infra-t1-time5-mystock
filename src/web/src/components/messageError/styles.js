import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${(props) => {
    if (props.type === "error") return "#f3c6b9";
    else if (props.type === "success") return "#b2d5ba";
    else return "#ccc";
  }};
  display: ${(props) => (props.display ? "flex" : "none")};

  p {
    color: ${(props) => {
      if (props.type === "error") return "#63997a";
      else if (props.type === "success") return "#248f8d";
      else return "#ccc";
    }};
    font-size: 14px;
  }
`;
