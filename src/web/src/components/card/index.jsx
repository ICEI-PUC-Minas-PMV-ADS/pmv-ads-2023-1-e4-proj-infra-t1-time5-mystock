import { DivRow } from "../../styleGlobal/styles";
import { CardStyle } from "./styles";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Card(props) {
  return (
    <CardStyle {...props}>
      <div>
        <h2>{props.name}</h2>
        {props.amount && <p>Quantidade: {props.amount}</p>}
      </div>
      <DivRow justifyContent="space-between">
        <div>
          <p>Ataulizado em: {props.updatedAt}</p>
          <p>Criado em: {props.createdAt}</p>
        </div>
        <DivRow gap="10px">
          <FiEdit style={{ fontSize: "25px", cursor: "pointer" }} />
          <RiDeleteBin6Line style={{ fontSize: "25px", cursor: "pointer" }} />
        </DivRow>
      </DivRow>
    </CardStyle>
  );
}
