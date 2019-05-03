import React from 'react'
import PropTypes from 'prop-types'

const Crossair = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
  </svg>
)
const Email = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 6l-10 7L2 6"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const DesignPen = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
)
const Zap = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)
const ChevronsRight = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M13 17l5-5-5-5M6 17l5-5-5-5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ChevronRight = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M9 17.5l5-5-5-5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Checkmark = ({ scale, color }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M16.667 5l-9.166 9.167L3.334 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Barchart = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M12 20V10M18 20V4M6 20v-4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Award = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const ArrowRight = ({ scale, color }) => (
  <svg
    width="27"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M16.375 18.333L25 10l-8.625-8.333M2 10h23"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Activity = ({ scale, color }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `scale(${scale}, ${scale})` }}
  >
    <path
      d="M22 12h-4l-3 9L9 3l-3 9H2"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function Svg({
  icon = 'ChevronRight',
  scale = 1,
  color = 'var(--orange-color)',
} = {}) {
  const components = {
    Crossair,
    Email,
    ChevronsRight,
    ChevronRight,
    Checkmark,
    Barchart,
    DesignPen,
    Zap,
    Award,
    ArrowRight,
    Activity,
  }

  const Icon = components[icon]
  return <Icon scale={scale} color={color} />
}

Svg.propTypes = {
  /** Transform scale value */
  scale: PropTypes.number,
  /** Color of SVG */
  color: PropTypes.string,
  /** Name of SVG Icon to use */
  icon: PropTypes.string.isRequired,
}

Svg.defaultProps = {
  scale: 1,
  color: 'var(--orange-color)',
  icon: 'ChevronRight',
}

export default Svg
