import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsSignedIn,
  selectIsRefreshing,
  selectError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  return {
    isSignedIn,
    isRefreshing,
    user,
    error,
  };
};
