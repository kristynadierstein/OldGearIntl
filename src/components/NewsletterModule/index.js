import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { encode } from "../../utils/functions/encode";
import {
  NewsletterModuleStyled,
  NewsletterContainer,
  NewsletterFormStyled,
} from "./style";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import { TextStyled } from "../Utilities/TextStyled/style";
import { TitleStyled } from "../Utilities/TitleStyled/style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
const Airtable = require("airtable");

const NewsletterModule = (data) => {
  const [email, setEmail] = useState("");
  console.log("data from newsletter", data);

  const changeHandler = (e) => setEmail(e.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();

    const base = new Airtable({ apiKey: "keyItT7KyJ8jjlQyQ" }).base(
      "appWAQdbhT8ASBIC2"
    );

    base("OldGear").create(
      [
        {
          fields: {
            Email: email,
          },
        },
      ],
      function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        setEmail("");
        document.querySelector('.thank-you-message').classList.add('show')

      }
    );
  };

  return (
    <NewsletterModuleStyled>
      <WidthLimiterStyled>
        <NewsletterContainer>
          <TitleStyled as="h2">{data?.data?.title?.text}</TitleStyled>
          <img src={data?.data?.logo?.url} alt="CarHun Newsletter" />
          <NewsletterFormStyled
            name="contact"
            id="NewsletterForm"
            onSubmit={submitHandler}
          >
            <FormControl>
              <TextField
                id="email"
                name="email"
                placeholder={data?.data?.label_input?.text}
                class="input-newsletter"
                value={email}
                onChange={changeHandler}
              />
            </FormControl>
            <button type="submit" id="btn-submit" class="btn-submit">
              {data?.data?.label_button?.text}
            </button>
          </NewsletterFormStyled>
          <TextStyled type="primary" className="thank-you-message">
            {data?.data?.thank_you_message?.text}
          </TextStyled>
        </NewsletterContainer>
      </WidthLimiterStyled>
    </NewsletterModuleStyled>
  );
};

NewsletterModule.propTypes = {};

export default NewsletterModule;
