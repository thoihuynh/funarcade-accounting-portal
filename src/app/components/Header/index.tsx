import { HeaderWrap } from './style';
import { Container } from '@mui/system';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'app/hooks/useQuery';

const Header = () => {
  const { pathname } = useLocation();

  let query = useQuery();

  const getTitle = () => {
    if (pathname === '/') return 'Dashboard';
    if (pathname.includes('games')) return 'Report';
    return '';
  };

  return (
    <HeaderWrap>
      <Container>
        <div className="d-flex row">
          <div className="title">
            {query.get('username')} {getTitle()}
          </div>
        </div>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
