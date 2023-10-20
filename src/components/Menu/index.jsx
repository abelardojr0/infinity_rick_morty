import { MenuItem, MenuLink, MenuLista, MenuNav, MiniLogo } from "./style";
import HomeIcon from "@mui/icons-material/Home";
import PortraitIcon from "@mui/icons-material/Portrait";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import mini_logo from "../../assets/mini-logo.png";
export const Menu = () => {
  return (
    <MenuNav>
      <MiniLogo src={mini_logo} />
      <MenuLista>
        <MenuItem>
          <PortraitIcon style={{ fontSize: "60px" }} />
          <MenuLink to={"/"}>Personargens</MenuLink>
        </MenuItem>
        <MenuItem>
          <PersonPinIcon style={{ fontSize: "60px" }} />
          <MenuLink to={"/localizacoes"}>Localizações</MenuLink>
        </MenuItem>
        <MenuItem>
          <LiveTvIcon style={{ fontSize: "60px" }} />
          <MenuLink to={"/episodios"}>Episódios</MenuLink>
        </MenuItem>
      </MenuLista>
    </MenuNav>
  );
};
