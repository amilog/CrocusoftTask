import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const VerifiedIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={10} r={10} fill="#000" />
    <Path
      fill="#fff"
      d="M15.353 5.68c-.74-.548-1.82-.434-2.409.254L8.491 11.13 6.843 9.79c-.712-.578-1.795-.511-2.419.15-.623.662-.551 1.668.161 2.247l2.325 1.889c1.104.897 2.791.756 3.705-.31l5.012-5.849c.59-.688.467-1.69-.274-2.237Z"
    />
  </Svg>
)
export default VerifiedIcon
