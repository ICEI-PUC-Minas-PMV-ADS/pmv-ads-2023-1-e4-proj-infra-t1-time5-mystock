import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import {
  CardSubcategorys,
  ModalCategoryCard,
  TitleCategoryCard,
} from "./styles";

export default function Selector(props) {
  const [openSubcategorys, setOpenSubcategorys] = useState({
    open: false,
    item: null,
  });
  return (
    <CardSubcategorys>
      <TitleCategoryCard
        onClick={() => {
          props.setActualCategory(props.category.id);
          setOpenSubcategorys({
            open: !openSubcategorys.open,
            item: props.category.id,
          });
        }}
      >
        <h2>{props.category && props.category.nome}</h2>
        {!props.subCategorys && <MdKeyboardArrowRight className="icon" />}
        {props.subCategorys && (
          <>
            {openSubcategorys.open &&
            openSubcategorys.item === props.category.id ? (
              <MdKeyboardArrowDown className="icon" />
            ) : (
              <MdKeyboardArrowRight className="icon" />
            )}
          </>
        )}
      </TitleCategoryCard>
      {props.subCategorys && (
        <ModalCategoryCard
          display={
            openSubcategorys.open && openSubcategorys.item === props.category.id
          }
        >
          {props.subCategorys.map((item, index) => {
            return (
              <>
                {item.categoryId === props.category.id && (
                  <h3
                    key={index}
                    onClick={() => {
                      props.setActualSubCategory(item.id);
                      props.setShowProducts(true);
                    }}
                  >
                    {item.nome}
                  </h3>
                )}
              </>
            );
          })}
        </ModalCategoryCard>
      )}
    </CardSubcategorys>
  );
}
