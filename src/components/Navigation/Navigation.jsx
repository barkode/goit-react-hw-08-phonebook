import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from 'redux/auth/useAuth';
import { Button } from '@mui/material';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav
      style={{
        display: 'flex',
        gap: 20,
      }}
    >
      <StyledLink to="/">
        <Button variant="outlined">Home</Button>
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <Button variant="outlined">Contacts</Button>
        </StyledLink>
      )}
    </nav>
  );
};

export default Navigation;
