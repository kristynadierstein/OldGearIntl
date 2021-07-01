import React from 'react'

export const Escape = ({ openMenu, className, onClick }) => {




  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width='28'
        height='28'
        viewBox="0 0 56 42"
        id="burger-menu"
        className={className ? className : ''}
        onClick={onClick}
      >
        <g fill="none" fillRule="evenodd" strokeLinecap="square">
          <g strokeWidth="2">
            <g>
              <g>
                <g>
                  <path
                    stroke='white'
                    d='M9 2L46.3876 39.3876'
                    transform="translate(-1524 -58) translate(1525.36 59)"
                    id="line1"
                  />
                  <path
                    stroke='white'
                    d='M9 39.3876L46.3876 2.00001' 
                    transform="translate(-1524 -58) translate(1525.36 59)"
                    id="line3"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}
