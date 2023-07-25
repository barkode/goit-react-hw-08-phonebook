import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from 'redux/auth/useAuth';
import { toast } from 'react-toastify';
import background from '../../images/background.jpg';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#afa',
        backgroundColor: '#afafaf',
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span style={{ color: '#ffffff', padding: '20px', textAlign: 'center' }}>
        Hello my dear friend. This App helps you add contacts to your own phone
        book. Register first. If you registered user, log in to service.
      </span>
    </div>
  );
};

export default Home;
