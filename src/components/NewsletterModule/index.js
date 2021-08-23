import React, { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios";
import { encode } from "../../utils/functions/encode"
import { NewsletterModuleStyled, NewsletterContainer } from "./style"
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style"
import { TextStyled } from "../Utilities/TextStyled/style"
import { TitleStyled } from "../Utilities/TitleStyled/style"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import { createMuiTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"

const NewsletterModule = data => {
  const [email, setEmail] = useState("")
  console.log("data from newsletter", data)

  const changeHandler = e => setEmail(e.target.value)

  const submitHandler = async e => {
    e.preventDefault()
    console.log('HEllo')
    // const Airtable = require("airtable")
    // const base = new Airtable({ apiKey: "keyItT7KyJ8jjlQyQ" }).base("appWAQdbhT8ASBIC2")

    // base("Table 1").create(
    //   [
    //     {
    //       fields: {
    //         email: 'kristynahorankova@gmail.com'
    //       }
    //     },
    //     {
    //       fields: {}
    //     }
    //   ],
    //   function(err, records) {
    //     if (err) {
    //       console.error(err)
    //       return
    //     }
    //     records.forEach(function(record) {
    //       console.log(record.getId())
    //     })
    //   }
    // )
    
    const body = encode({ "email": email });

    try {
      const form = await axios.post("https://api.airtable.com/v0/appWAQdbhT8ASBIC2/Table%201", body, {
        headers: {
          "Authorization": "Bearer keyItT7KyJ8jjlQyQ",
          "Content-Type": "application/json"
        }
      })
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error, index) => {
          // eslint-disable-next-line no-console
          console.error(`error.param ${index}`, error.param);
          // eslint-disable-next-line no-console
          console.error(`error.msg ${index}`, error.msg);
        });
      }
    }
  }

  return (
    <NewsletterModuleStyled>
      <WidthLimiterStyled>
        <NewsletterContainer>
          <TitleStyled as="h2">{data?.data?.title?.text}</TitleStyled>
          <img src={data?.data?.logo?.url} alt="CarHun Newsletter" />
          {/* <form action="" method="get">
        <input type='text' id='email' name='email' class="newsletter-input" placeholder={data?.data?.label_input?.text}></input>
        <input type="submit" value="Submit">{data?.data?.label_button?.text}</input>
        </form> */}

          <FormControl
            name="contact"
            data-netlify-honeypot="bot-field"
            method="POST"
            data-netlify="true"
            id="NewsletterForm"
            onSubmit={submitHandler}
          >
            <TextField
              id="email"
              name="email"
              placeholder={data?.data?.label_input?.text}
              class="input-newsletter"
              value={email}
              onChange={changeHandler}
            />
          </FormControl>
          <button type="submit" id="btn-submit" class="btn-submit" onSubmit={submitHandler}>
            {data?.data?.label_button?.text}
          </button>
        </NewsletterContainer>
      </WidthLimiterStyled>
    </NewsletterModuleStyled>
  )
}

NewsletterModule.propTypes = {}

export default NewsletterModule
