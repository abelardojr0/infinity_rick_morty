import { useNavigate } from "react-router-dom";
import {
  CardDiv,
  CardInfos,
  ImgCard,
  ItemCard,
  SpanCard,
  TitleCard,
} from "./style";

export const CardImage = ({ id, image, name, specie, status, localizacao }) => {
  const navigate = useNavigate();

  return (
    <CardDiv onClick={() => navigate(`/personagem/${id}`)}>
      <ImgCard src={image} />
      <CardInfos>
        <TitleCard>
          Nome: <SpanCard>{name}</SpanCard>
        </TitleCard>
        <ItemCard>
          Espécie: <SpanCard>{specie}</SpanCard>
        </ItemCard>
        <ItemCard>
          Status: <SpanCard>{status}</SpanCard>
        </ItemCard>
        <ItemCard>
          Localização: <SpanCard>{localizacao}</SpanCard>
        </ItemCard>
      </CardInfos>
    </CardDiv>
  );
};
