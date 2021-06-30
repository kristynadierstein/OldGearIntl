/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import LocaleContext from '../../context/LocaleProvider'
import StyleContext from '../../context/StyleProvider'
import { getQuery } from '../../utils/functions/getQuery'
import { NavigationContainer, MenuItemsContainer, Logo, BurgerMenuContainer } from './style'
import Title from '../Utilities/TitleStyled'
import LocalizedLink from '../LocalizedLink'
import { BurgerMenu } from '../Icons/Hamburger'

const Navigation = props => {
  const data = useStaticQuery(graphql`
    {
      navigation: allPrismicNavigation {
        nodes {
          lang
          data {
            main_meta_info_seo {
              text
            }
            menu_item_1 {
              text
            }
            menu_item_2 {
              text
            }
            menu_item_3 {
              text
            }
            menu_item_4 {
              text
            }
            menu_item_5 {
              text
            }
            menu_item_6 {
              text
            }
            navigation_logo_white {
              url
            }
            navigation_logo_red {
              url
            }
          }
        }
      }
    }
  `)

  console.log(data)
  const lang = useContext(LocaleContext)
  const styleContext = useContext(StyleContext)
  const [openMenu, setMenuOpen] = useState(false)

  const i18n = lang.i18n[lang.locale]
  const navigation = data.navigation.nodes.filter(node => node.lang === i18n.locale).map(r => r.data)

  const navigationQuery = getQuery(['navigation', 'nodes', 0, 'data'], data)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('769'))

  const handleOpen = () => {
    setMenuOpen(!openMenu)
  }
  const color = styleContext?.colorWhite

  return isDesktop ? (
    <NavigationContainer>
      <MenuItemsContainer fontColor={color}>
        <LocalizedLink to="/">
          <Title type="h6" uppercase>
            {navigation.[0].menu_item_1.text}
          </Title>
        </LocalizedLink>
        <LocalizedLink to="/">
          <Title type="h6" uppercase>
            {navigation.[0].menu_item_2.text}
          </Title>
        </LocalizedLink>
        <LocalizedLink to="/">
          <Title type="h6" uppercase>
            {navigation.[0].menu_item_3.text}
          </Title>
        </LocalizedLink>
      </MenuItemsContainer>
      <Logo>
        <img src={styleContext?.colorWhite === 1 ? navigationQuery.navigation_logo_red.url : navigationQuery.navigation_logo_white.url} alt="" style={{ width: '150px' }} />
      </Logo>
      <MenuItemsContainer fontColor={color}>
        <LocalizedLink to="/">
          <Title type="h6" uppercase>
            {navigation.[0].menu_item_4.text}
          </Title>
        </LocalizedLink>
        <LocalizedLink to="/">
          <Title type="h6" uppercase>
            {navigation.[0].menu_item_5.text}
          </Title>
        </LocalizedLink>
        <LocalizedLink to="/">
          <Title type="h6" uppercase>
            {navigation.[0].menu_item_6.text}
          </Title>
        </LocalizedLink>
      </MenuItemsContainer>
    </NavigationContainer>
  ) : (
    <BurgerMenuContainer onClick={handleOpen} openMenu={openMenu}>
      <BurgerMenu openMenu={openMenu}  />
    </BurgerMenuContainer>
  )
}

export default Navigation
