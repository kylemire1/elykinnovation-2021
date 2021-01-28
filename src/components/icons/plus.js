import React from 'react'

const Plus = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.012 28"
    >
      <g transform="translate(-170 -559)">
        <path
          d="M16,30A14,14,0,0,1,3.547,9.6a1,1,0,1,1,1.779.915A12.021,12.021,0,1,0,7.515,7.515,1,1,0,0,1,6.1,6.1,14,14,0,1,1,25.9,25.9,13.9,13.9,0,0,1,16,30Z"
          transform="translate(168.012 557)"
          fill="#45888a"
        />
        <path
          d="M16,22a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V21A1,1,0,0,1,16,22Z"
          transform="translate(168.012 557)"
          fill="#45888a"
          className="plus-line"
        />
        <path
          d="M21,17H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
          transform="translate(168.012 557)"
          fill="#45888a"
        />
      </g>
    </svg>
  )
}

export default Plus
