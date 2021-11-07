import React from "react"
import PropTypes from "prop-types"
import { HeroComponentContainer, HeroVideoContainer } from "./style"
import Title from "../Utilities/TitleStyled"
import ReactPlayer from "react-player";


const HeroComponentLarge = ({ image, title, video }) => {
  const injectHTML = text => ({ __html: text })

  return video ? (
    <HeroVideoContainer>
 <ReactPlayer
                className="react-player"
                height="100%"
                muted
                playing
                loop
                playsinline
                url={image}
              />
        <Title
          uppercase
          className="hero-title"
          as="span"
          type="h1-secondary-large"
          dangerouslySetInnerHTML={injectHTML(title)}
        >
          {" "}
        </Title>
    </HeroVideoContainer>
  ) : (
    <>
      <HeroComponentContainer style={{ backgroundImage: `url(${image})` }}>
        <Title
          uppercase
          className="hero-title"
          as="span"
          type="h1-secondary-large"
          dangerouslySetInnerHTML={injectHTML(title)}
        >
          {" "}
        </Title>
      </HeroComponentContainer>
    </>
  )
}

HeroComponentLarge.propTypes = {}

export default HeroComponentLarge
