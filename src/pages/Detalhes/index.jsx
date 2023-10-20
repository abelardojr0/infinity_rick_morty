import axios from "axios";
import { useEffect, useState } from "react";
import { CardImage } from "../../components/CardImage";
import logo from "../../assets/logo.png";
import { ContainerCards, Logo, Section } from "../../../GlobalStyles";
import { useParams } from "react-router-dom";
import {
  DetalheInfosList,
  DetalhesImg,
  DetalhesItemTexto,
  DetalhesItemTitulo,
  DetalhesSection,
  Divisoria,
  Subtitulo,
  Titulo,
} from "./style";

export const Detalhes = () => {
  const [person, setPerson] = useState("");

  const { id } = useParams();

  async function buscar() {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setPerson(data);
  }

  useEffect(() => {
    buscar();
  }, []);

  return (
    <Section>
      <Logo src={logo} />
      {person && (
        <DetalhesSection>
          <Divisoria>
            <DetalhesImg src={person.image} />
            <Titulo>{person.name}</Titulo>
          </Divisoria>
          <Divisoria>
            <Subtitulo>Informações</Subtitulo>
            <DetalheInfosList>
              <DetalhesItemTitulo>
                Gênero <DetalhesItemTexto>{person.species}</DetalhesItemTexto>
              </DetalhesItemTitulo>
              <DetalhesItemTitulo>
                Status <DetalhesItemTexto>{person.status}</DetalhesItemTexto>
              </DetalhesItemTitulo>
              <DetalhesItemTitulo>
                Localização
                <DetalhesItemTexto>{person.location.name}</DetalhesItemTexto>
              </DetalhesItemTitulo>
              <DetalhesItemTitulo>
                Origem
                <DetalhesItemTexto>{person.origin.name}</DetalhesItemTexto>
              </DetalhesItemTitulo>
              <DetalhesItemTitulo>
                Tipo
                <DetalhesItemTexto>
                  {person.type ? person.type : "Desconhecido"}
                </DetalhesItemTexto>
              </DetalhesItemTitulo>
            </DetalheInfosList>
          </Divisoria>
        </DetalhesSection>
      )}
    </Section>
  );
};
