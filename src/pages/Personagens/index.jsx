import axios from "axios";
import { useEffect, useState } from "react";
import { CardImage } from "../../components/CardImage";
import logo from "../../assets/logo.png";
import { ContainerCards, Logo, Section } from "../../../GlobalStyles";
import { Carregar, DivFilters, FilterSearch, SelectFilter } from "./style";
export const Personagens = () => {
  const [persons, setPersons] = useState("");
  const [name, setName] = useState("");
  const [especies, setEspecies] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  async function buscar() {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character?name=${name}&species=${especies}&gender=${gender}&status=${status}&page=${page}`
    );
    if (page > 1) {
      setPersons([...persons, ...data.results]);
    } else {
      setPersons(data.results);
    }
  }

  useEffect(() => {
    buscar();
    setPage(1);
  }, [name, especies, gender, status]);

  useEffect(() => {
    buscar();
  }, [page]);

  return (
    <Section>
      <Logo src={logo} />
      <DivFilters>
        <FilterSearch
          type="text"
          id="name"
          placeholder="Filter by name..."
          onChange={(e) => setName(e.target.value)}
        />
        <SelectFilter
          name="species"
          id="species"
          onChange={(e) => setEspecies(e.target.value)}
        >
          <option value="" default>
            Species
          </option>
          <option value="animal">Animal</option>
          <option value="alien">Alien</option>
          <option value="disease">Doença</option>
          <option value="unknown">Desconhecido</option>
          <option value="human">Humano</option>
          <option value="humanoid">Humanoide</option>
          <option value="mythological">Mitologico</option>
          <option value="poopybutthole">Poopybutthole</option>
          <option value="robot">Robo</option>
        </SelectFilter>

        <SelectFilter
          name="gender"
          id="gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Genero</option>
          <option value="female">Feminino</option>
          <option value="male">Masculino</option>
          <option value="genderless">Sem Genero</option>
          <option value="unknown">Desconhecido</option>
        </SelectFilter>

        <SelectFilter
          name="status"
          id="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="alive">Vivo</option>
          <option value="dead">Morto</option>
          <option value="unknown">Desconhecido</option>
        </SelectFilter>
      </DivFilters>

      <ContainerCards>
        {persons &&
          persons.map((person) => (
            <CardImage
              id={person.id}
              name={person.name}
              image={person.image}
              specie={person.species}
              status={person.status}
              localizacao={person.location.name}
            />
          ))}
      </ContainerCards>
      <Carregar onClick={() => setPage(page + 1)}>Carregar mais</Carregar>
    </Section>
  );
};
