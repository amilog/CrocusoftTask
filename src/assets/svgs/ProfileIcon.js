import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProfileIcon = ({ fill, width, height }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={width} height={height} viewBox="0 0 13 16">
    <Path
      fillRule="evenodd"
      d="M6.398 10.54c-3.45 0-6.398.543-6.398 2.72C0 15.435 2.929 16 6.398 16c3.45 0 6.397-.544 6.397-2.72 0-2.178-2.928-2.74-6.397-2.74Z"
      clipRule="evenodd"
    />
    <Path
      fillRule="evenodd"
      d="M6.398 8.467a4.219 4.219 0 0 0 4.233-4.233A4.219 4.219 0 0 0 6.398 0a4.22 4.22 0 0 0-4.234 4.234 4.22 4.22 0 0 0 4.234 4.233Z"
      opacity={0.4}
      clipRule="evenodd"
    />
  </Svg>
);

export default ProfileIcon;
