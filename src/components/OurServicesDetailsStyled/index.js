import React from "react"
import PropTypes from "prop-types"
import { TextStyled } from "../Utilities/TextStyled/style"
import { TitleStyled } from "../Utilities/TitleStyled/style"
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style"
import { OurServicesDetailsStyledContainer, ServicesContainer } from "./style"

const OurServicesDetailsStyled = data => {

  const injectHTML = text => {
    return { __html: text }
  }
  return (
    <OurServicesDetailsStyledContainer>
      <WidthLimiterStyled>
        <TitleStyled withTitleDecoration as="h2">
          {data?.data?.section_heading_export?.text}
        </TitleStyled>
        <TextStyled
          type="primary"
          as="div"
          className="subtitle-services-page"
          dangerouslySetInnerHTML={injectHTML(data?.data?.section_subheading_export?.html)}
        ></TextStyled>
        {data?.data?.services_list?.length > 0 ? (
          data?.data?.services_list.map(service => {
            return (
              <ServicesContainer>
                <TitleStyled type="h5" uppercase className="title-services-page">
                  {service?.services_title?.text}
                </TitleStyled>
                <TextStyled
                  type="primary-small"
                  as="div"
                  dangerouslySetInnerHTML={injectHTML(service?.services_description?.html)}
                >
                  {}
                </TextStyled>
              </ServicesContainer>
            )
          })
        ) : (
          <></>
        )}
      </WidthLimiterStyled>
    </OurServicesDetailsStyledContainer>
  )
}

OurServicesDetailsStyled.propTypes = {}

export default OurServicesDetailsStyled
