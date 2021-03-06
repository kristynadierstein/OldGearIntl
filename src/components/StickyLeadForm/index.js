import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import emailjs from "emailjs-com"
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage, setQuickButtons } from "react-chat-widget"
import "react-chat-widget/lib/styles.css"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import { TextStyled } from "../Utilities/TextStyled/style"
import { TitleStyled } from "../Utilities/TitleStyled/style"
import { StickyLeadFormWrapper, StickyContent } from "./style"

const StickyLeadForm = data => {

  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!")
  })

  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`)
    // Now send the message throught the backend API
    emailjs.sendForm("service_a9diak7", "template_kgekjh6", newMessage, "user_lSDAaVjtFvjltbGikHHpJ").then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return (
    <StickyLeadFormWrapper>
      <StickyContent>
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <TitleStyled whiteTitle uppercase as="h2" type="h2">
              {data.data.title.text}
            </TitleStyled>
            <TextStyled whiteText as="p" type="super-small">
              {data.data.subtitle.text}
            </TextStyled>
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </StickyContent>
    </StickyLeadFormWrapper>
  )
}

StickyLeadForm.propTypes = {}

export default StickyLeadForm
