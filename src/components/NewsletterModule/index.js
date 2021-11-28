import React, { useState } from "react"

import PropTypes from "prop-types"
import axios from "axios"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { encode } from "../../utils/functions/encode"
import { NewsletterModuleStyled, NewsletterContainer, NewsletterFormStyled } from "./style"
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style"
import { TextStyled } from "../Utilities/TextStyled/style"
import { TitleStyled } from "../Utilities/TitleStyled/style"

const Airtable = require("airtable");


const NewsletterModule = data => {
  const [email, setEmail] = useState("")

  const changeHandler = e => setEmail(e.target.value)

  const submitHandler = async e => {
    e.preventDefault()
    console.log(process.env.AIRTABLE_API_KEY)

    const ApiKey = process.env.AIRTABLE_API_KEY;
    console.log(ApiKey)
    const baseKey = process.env.AIRTABLE_BASE_ID;

    const base = new Airtable({apiKey: ApiKey}).base(baseKey);

    base("OldGear_Newsletter").create(
      [
        {
          fields: {
            Email: email
          }
        }
      ],
      // eslint-disable-next-line no-unused-vars
      function(err, records) {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err)
          return
        }
        setEmail("")
        document.querySelector(".thank-you-message").classList.add("show")
      }
    )
  }

  return (
    <NewsletterModuleStyled>
      <WidthLimiterStyled>
        <NewsletterContainer>
          <TitleStyled as="h2">{data?.data?.title?.text}</TitleStyled>
          <img src={data?.data?.logo?.url} alt="CarHun Newsletter" />
          <NewsletterFormStyled name="contact" id="NewsletterForm" onSubmit={submitHandler}>
            <FormControl>
              <TextField
                id="email"
                name="email"
                placeholder={data?.data?.label_input?.text}
                className="input-newsletter"
                value={email}
                onChange={changeHandler}
              />
            </FormControl>
            <button type="submit" id="btn-submit" className="btn-submit">
              {data?.data?.label_button?.text}
            </button>
          </NewsletterFormStyled>
          <TextStyled type="primary" className="thank-you-message">
            {data?.data?.thank_you_message?.text}
          </TextStyled>
        </NewsletterContainer>
      </WidthLimiterStyled>
    </NewsletterModuleStyled>
  )
}

NewsletterModule.propTypes = {}

export default NewsletterModule
