import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from 'redux/auth/useAuth';
import { toast } from 'react-toastify';

const Home = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isSignedIn) {
      navigate('/contacts');
    } else {
      // alert('Please login or register');
      toast.info('Please login or register');
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleButtonClick}>
        Get started
      </Button>
    </div>
  );
};

export default Home;
