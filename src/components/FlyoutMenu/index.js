import React, {useEffect} from "react";
import PropTypes from "prop-types"
import { FlyoutMenuContainerStyled, FlyoutMenuItemsStyled } from "./style"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import Text from "../Utilities/TextStyled"
import LocalizedLink from "../LocalizedLink"
import { Escape } from "../Icons/Escape"

const LocaleSwitcherFlyout = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  font-size: 10px;
  z-index: 100000000;
  color: white;

  a {
      color: white;
  }
`

const FlyoutMenu = ({ openMenu, query, setMenuOpen }) => {
  console.log(query)
  console.log(openMenu)

  const clickHandler = () => {
    setMenuOpen(!openMenu)
  }

  return (
    openMenu ? (
            <>
        <FlyoutMenuContainerStyled>
          <FlyoutMenuItemsStyled>
            <LocalizedLink to="/" onClick={() => setMenuOpen(!openMenu)}>
              <Text type="secondary" uppercase whiteText>
                {query.[0].menu_item_1.text}
              </Text>
            </LocalizedLink>
            {/* <LocalizedLink to="/">
              <Text type="secondary" uppercase whiteText>
                {query.[0].menu_item_2.text}
              </Text>
            </LocalizedLink> */}
            <LocalizedLink to="/services" onClick={() => setMenuOpen(!openMenu)}>
              <Text type="secondary" uppercase whiteText>
                {query.[0].menu_item_3.text}
              </Text>
            </LocalizedLink>
            <LocalizedLink to="/car-hunting" onClick={() => setMenuOpen(!openMenu)}>
              <Text type="secondary" uppercase whiteText>
                {query.[0].menu_item_4.text}
              </Text>
            </LocalizedLink>
            <LocalizedLink to="/contact" onClick={() => setMenuOpen(!openMenu)}>
              <Text type="secondary" uppercase whiteText>
                {query.[0].menu_item_5.text}
              </Text>
            </LocalizedLink>
            {/* <LocalizedLink to="/car-hunting" onClick={() => setMenuOpen(!openMenu)}>
              <Text type="secondary" uppercase whiteText>
                {query.[0].menu_item_6.text}
              </Text>
            </LocalizedLink> */}
          </FlyoutMenuItemsStyled>
          <Escape className="flyout-escape" onClick={clickHandler}/>
          <LocaleSwitcherFlyout data-name="locale-switcher">
            <Link hrefLang="en-us" to="/">
              EN
            </Link>
            /{' '}
            <Link hrefLang="fr-fr" to="/fr">
              FR
            </Link>
            /{' '}
            <Link hrefLang="de-de" to="/de">
              DE
            </Link>{' '}
          </LocaleSwitcherFlyout>
        </FlyoutMenuContainerStyled>
        </>
    ) : (<></>)
  )
}

FlyoutMenu.propTypes = {}

export default FlyoutMenu
