import { Container } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";

export default function SideManager(props) {
  return (
    <Container>
      <p>
        Total de {props.type}: {props.amount}
      </p>
      <button>
        <p>Novo {props.type.replace("s", "")}</p>
        <AiOutlinePlus className="icon" />
      </button>
    </Container>
  );
}
