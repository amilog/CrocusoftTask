import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FilterIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M6.62 9.929H1.885c-.599 0-1.085.478-1.085 1.066 0 .588.486 1.067 1.085 1.067H6.62c.599 0 1.085-.479 1.085-1.067S7.22 9.93 6.62 9.93ZM15.2 3.033c0-.588-.486-1.066-1.085-1.066H9.381c-.6 0-1.086.478-1.086 1.066 0 .588.487 1.066 1.086 1.066h4.734c.599 0 1.085-.478 1.085-1.066Z"
      opacity={0.4}
    />
    <Path
      fill="#fff"
      d="M5.752 3.032c0 1.344-1.108 2.434-2.476 2.434C1.909 5.466.8 4.376.8 3.032.8 1.69 1.909.6 3.276.6c1.368 0 2.476 1.089 2.476 2.432ZM15.2 10.969c0 1.343-1.108 2.432-2.476 2.432-1.367 0-2.476-1.09-2.476-2.432 0-1.345 1.109-2.434 2.476-2.434 1.368 0 2.476 1.09 2.476 2.434Z"
    />
  </Svg>
)
export default FilterIcon
