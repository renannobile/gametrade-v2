import Container from "components/Container";
import Flex from "components/Flex";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Header as Head, Navigation } from "./Styles";

const Menu = [
  {
    title: "Home",
    path: "/",
  },
];

const Header = () => {
  return (
    <Head>
      <Container noVerticalPadding>
        <Flex justifyContent="space-between" alignItems="center" fullHeight>
          <h2>Gametrade</h2>

          <Navigation>
            {Menu.map(({ title, path }) => (
              <li key={title}>
                <NavLink exact activeClassName="active" to={path}>
                  {title}
                </NavLink>
              </li>
            ))}
          </Navigation>

          <div>
            <Link to="/login">Login</Link>
          </div>
        </Flex>
      </Container>
    </Head>
  );
};

export default Header;
