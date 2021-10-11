import React from "react"
import PropTypes from "prop-types"
import { ContentServicesBlockStyled, BlockContainerStyled, ContentBlockSmall } from "./style"
import Text from "../Utilities/TextStyled"
import Title from "../Utilities/TitleStyled"
import LocalizedLink from "../LocalizedLink"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"

const ContentServicesBlock = ({ data }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("900"))
  const injectHTML = (text) => {
    return { __html: text };
  };
  return (
    <ContentServicesBlockStyled>
      <Title as="h2" withTitleDecoration>
      {data?.content_block_title?.text}
      </Title>
      {data?.content_block?.map((block, index) => {
        let image = getImage(block?.block_image?.localFile)
        return (
          <>
            <BlockContainerStyled order={index}>
              <ContentBlockSmall>
                <Title type="h4" whiteTitle uppercase className="title-content-block">
                  {block?.title?.text}
                </Title>
                <Text type="primary-small" as="div" whiteText dangerouslySetInnerHTML={injectHTML(block?.text.html)}></Text>
                <LocalizedLink to="/">{block?.link_label?.text}</LocalizedLink>
              </ContentBlockSmall>
              <GatsbyImage image={image} alt="" className="image-content-block" />
            </BlockContainerStyled>
          </>
        )
      })}
    </ContentServicesBlockStyled>
  )
}

ContentServicesBlock.propTypes = {}

export default ContentServicesBlock
