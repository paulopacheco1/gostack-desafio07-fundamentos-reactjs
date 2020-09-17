import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  return (
    <Container size={size} location={location.pathname}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className="dash" to="/">
            Listagem
          </Link>
          <Link className="import" to="/import">
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
