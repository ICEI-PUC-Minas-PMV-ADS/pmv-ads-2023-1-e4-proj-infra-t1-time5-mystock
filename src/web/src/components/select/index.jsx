import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { SelectStyle, Container, Drop } from "./styles";

export default function SelectPersonality(props) {
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <Container>
      <SelectStyle onClick={() => setOpenDrop(!openDrop)}>
        {props.value}
        {openDrop ? (
          <MdKeyboardArrowDown className="icon" />
        ) : (
          <MdKeyboardArrowRight className="icon" />
        )}
      </SelectStyle>
      {openDrop && (
        <Drop>
          <ul>
            {props.itensList.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    props.setActualCategory(item.id);
                    setOpenDrop(false);
                  }}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </Drop>
      )}
    </Container>
  );
}
