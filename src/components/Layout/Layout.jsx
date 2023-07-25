import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useAuth } from 'redux/auth/useAuth';

const Layout = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Header />
      <div>{children}</div>
      {!isLoggedIn}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
