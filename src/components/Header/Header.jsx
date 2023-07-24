import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { selectIsSignedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return (
    <header>
      <Header>
        <Navigation />
        {isSignedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </header>
  );
};

export default Header;
