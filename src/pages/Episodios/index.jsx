import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import logo from "../../assets/logo.png";
import { ContainerCards, Logo, Section } from "../../../GlobalStyles";
export const Episodios = () => {
  const [episodies, setEpisodies] = useState();

  async function buscar_jogos() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
    setEpisodies(data.results);
  }

  useEffect(() => {
    buscar_jogos();
  }, []);

  return (
    <Section>
      <Logo src={logo} />
      <ContainerCards>
        {episodies &&
          episodies.map((person) => (
            <Card
              key={person.id}
              title={person.name}
              text={person.air_date}
              subtitle={person.episode}
            />
          ))}
      </ContainerCards>
    </Section>
  );
};
