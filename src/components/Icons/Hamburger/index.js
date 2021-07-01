import React from 'react'

export const BurgerMenu = ({ openMenu, className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={openMenu ? '28' : '56'}
        height={openMenu ? '28' : '42'}
        viewBox="0 0 56 42"
        id="burger-menu"
        className={className ? className : ''}
      >
        <g fill="none" fillRule="evenodd" strokeLinecap="square">
          <g strokeWidth="2">
            <g>
              <g>
                <g>
                  <path
                    stroke='#8C120F'
                    d={openMenu ? 'M9 2L46.3876 39.3876' : 'M0.499 0.5L53.373 0.5'}
                    transform="translate(-1524 -58) translate(1525.36 59)"
                    id="line1"
                    style={{ transition: 'all 0.25s ease-out' }}
                  />
                  <path
                    stroke="#FFC71F"
                    d="M0.499 21.5L53.373 21.5"
                    transform="translate(-1524 -58) translate(1525.36 59)"
                    id="line2"
                    style={{ display: openMenu ? 'none' : 'block' }}
                  />
                  <path
                    stroke='#8C120F'
                    d={openMenu ? 'M9 39.3876L46.3876 2.00001' : 'M0.499 39.5L53.373 39.5'}
                    transform="translate(-1524 -58) translate(1525.36 59)"
                    id="line3"
                    style={{ transition: 'all 0.25s ease-out' }}
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
