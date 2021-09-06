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
import { NavigationContainer, MenuItemsContainer, Logo, BurgerMenuContainer, NavigationWidthLimiter } from './style'
import Text from '../Utilities/TextStyled'
import LocalizedLink from '../LocalizedLink'
import { BurgerMenu } from '../Icons/Hamburger'
import FlyoutMenu from "../FlyoutMenu"

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
  const isDesktop = useMediaQuery(theme.breakpoints.up('900'))

  const handleOpen = () => {
    setMenuOpen(!openMenu)
  }
  const color = styleContext?.colorWhite

  return (
    isDesktop ? (
      <NavigationContainer>
        <NavigationWidthLimiter>
        <MenuItemsContainer fontColor={color}>
          <LocalizedLink to="/">
            <Text type="primary-small" uppercase className='menu-items'>
              
            </Text>
          </LocalizedLink>
          <LocalizedLink to="/">
            <Text type="primary-small" uppercase className='menu-items'>
            {navigation.[0].menu_item_1.text}
            </Text>
          </LocalizedLink>
          <LocalizedLink to="/services">
            <Text type="primary-small" uppercase className='menu-items'>
              {navigation.[0].menu_item_3.text}
            </Text>
          </LocalizedLink>
        </MenuItemsContainer>
        <Logo>
          <img src={navigationQuery.navigation_logo_red.url} alt="" style={{ width: '150px' }} />
        </Logo>
        <MenuItemsContainer fontColor={color}>
          <LocalizedLink to="/">
            <Text type="primary-small" uppercase className='menu-items'>
              {navigation.[0].menu_item_4.text}
            </Text>
          </LocalizedLink>
          <LocalizedLink to="/">
            <Text type="primary-small" uppercase className='menu-items'>
              {navigation.[0].menu_item_5.text}
            </Text>
          </LocalizedLink>
          <LocalizedLink to="/">
            <Text type="primary-small" uppercase className='menu-items'>
            </Text>
          </LocalizedLink>
        </MenuItemsContainer>
        </NavigationWidthLimiter>
      </NavigationContainer>
    ) : (
    <>
    <BurgerMenuContainer onClick={handleOpen} openMenu={openMenu}>
      <BurgerMenu openMenu={openMenu}  />
      <Logo>
        <img src={navigationQuery.navigation_logo_red.url} alt=""  />
      </Logo>
    </BurgerMenuContainer>
    <FlyoutMenu openMenu={openMenu} query={navigation} setMenuOpen={setMenuOpen}/>
    </>
    )
  )
}

export default Navigation
