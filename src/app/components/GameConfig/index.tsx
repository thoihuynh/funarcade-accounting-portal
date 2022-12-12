import CommonHr from '../common/CommonHr';
import MuteVolumeIcon from './volume-mute.svg';
import VolumeIcon from './volume.svg';
import MusicIcon from './music-icon.svg';
import MusicMuteIcon from './music-mute-icon.svg';
import { Wrapper } from './style';

interface Props {
  onClickTheme: any;
  onClickVolume: any;
  onClickMusic: any;
  isDarkTheme: boolean;
  isMute: boolean;
  isMuteMusic: boolean;
}

const GameConfig = (props: Props) => {
  const {
    onClickTheme,
    onClickVolume,
    onClickMusic,
    isDarkTheme,
    isMute,
    isMuteMusic,
  } = props;

  return (
    <Wrapper isDarkTheme={isDarkTheme} isMute={isMute}>
      <div className="theme-switch" onClick={onClickTheme}>
        <div className="icon-wrap">
          <div className="moon" />
        </div>
      </div>

      <CommonHr marginTop={8} marginBottom={8} />

      <div className="volume-switch" onClick={onClickVolume}>
        <div className="icon icon-wrap">
          <div
            className="speaker-icon"
            style={{
              background: `url(${isMute ? MuteVolumeIcon : VolumeIcon})`,
            }}
          />
          <img
            src={MuteVolumeIcon}
            width="0"
            height="0"
            alt="Mute Volume Icon Preload"
            style={{ display: 'none' }}
          />
        </div>
      </div>

      <CommonHr marginTop={8} marginBottom={8} />

      <div className="volume-switch" onClick={onClickMusic}>
        <div className="icon-wrap">
          <div
            className="icon music-icon"
            style={{
              background: `url(${isMuteMusic ? MusicMuteIcon : MusicIcon})`,
            }}
          />
          <img
            src={MusicMuteIcon}
            width="0"
            height="0"
            alt="Mute Music Icon Preload"
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default GameConfig;
