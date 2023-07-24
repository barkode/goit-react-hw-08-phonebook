import { Navigate } from 'react-router-dom';
import { useAuth } from 'redux/auth/useAuth';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <Navigate to={redirectTo} /> : Component;
};
