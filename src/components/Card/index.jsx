import { CardDiv, SpecieCard, TextCard, TitleCard } from "./style";

export const Card = ({ title, subtitle, text }) => {
  return (
    <CardDiv>
      <TitleCard>{title}</TitleCard>
      <SpecieCard>{subtitle}</SpecieCard>
      <TextCard>{text}</TextCard>
    </CardDiv>
  );
};
