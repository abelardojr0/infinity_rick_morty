import axios from "axios";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { ContainerCards, Logo, Section } from "../../../GlobalStyles";
import { Card } from "../../components/Card";
export const Localizacoes = () => {
  const [locations, setLocations] = useState();

  async function buscar_jogos() {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    setLocations(data.results);
  }

  useEffect(() => {
    buscar_jogos();
  }, []);

  return (
    <Section>
      <Logo src={logo} />
      <ContainerCards>
        {locations &&
          locations.map((location) => (
            <Card
              key={location.id}
              title={location.name}
              text={location.dimension}
              subtitle={location.type}
            />
          ))}
      </ContainerCards>
    </Section>
  );
};
