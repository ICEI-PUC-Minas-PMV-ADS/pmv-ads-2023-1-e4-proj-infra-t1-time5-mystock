import {
  DescriptionPages,
  TitlePages,
  InputsContent,
} from "../../styleGlobal/styles";
import FilledButton from "../filledButton";
import { Overlay, CardDelete } from "./styles";

export default function ModalDelete(props) {
  return (
    <Overlay>
      <CardDelete>
        <TitlePages>
          Deletar <span>{props.type}</span>
        </TitlePages>
        <DescriptionPages>
          Ao clicar em deletar, o item será excluído permanentemente do banco de
          dados.
        </DescriptionPages>
        <DescriptionPages>
          Tem certeza que deseja deletar o item: {props.item}?
        </DescriptionPages>
        <InputsContent>
          <FilledButton delete>Deletar</FilledButton>
          <FilledButton type="button" onClick={() => props.closeModal(false)}>
            Cancelar
          </FilledButton>
        </InputsContent>
      </CardDelete>
    </Overlay>
  );
}
