import { useMediaQuery } from '@mui/material';
import { GameProps } from 'app/appTypes';
import { MOBILE_QUERY } from 'styles/variables';
import CommonLink from '../common/CommonLink';
import { GameList } from './style';

interface Props {
  gameList: GameProps[];
}

const GameGrid = (props: Props) => {
  const isMobile = useMediaQuery(MOBILE_QUERY);

  return (
    <GameList>
      {props.gameList.map(item => (
        <CommonLink key={item.url} to={item.url}>
          <img
            className="global_transition"
            src={isMobile ? item.cardImageMobile : item.cardImage}
            alt={item.name}
          />
        </CommonLink>
      ))}
    </GameList>
  );
};

export default GameGrid;
