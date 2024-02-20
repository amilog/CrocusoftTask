import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LeftArrowIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 10}
    height={props.height || 15}
    fill="none"
    viewBox="0 0 7 12"
    {...props}
  >
    <Path
      fill="#fff"
      d="M6 11.307.692 5.999 6 .691l.708.708-4.6 4.6 4.6 4.6-.708.708Z"
    />
  </Svg>
)

export default LeftArrowIcon
