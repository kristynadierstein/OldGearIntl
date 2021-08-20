import React from "react";
import PropTypes from "prop-types";
import { NewsletterModuleStyled, NewsletterContainer } from "./style";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import { TextStyled } from "../Utilities/TextStyled/style";
import { TitleStyled } from "../Utilities/TitleStyled/style";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const NewsletterModule = (data) => {
  console.log("data from newsletter", data);
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

          <FormControl>
            <TextField
              id="email"
              name="email"
              placeholder={data?.data?.label_input?.text}
              class="input-newsletter"
            />
          </FormControl>
          <button type="submit" id="btn-submit" class="btn-submit">
            {data?.data?.label_button?.text}
          </button>
        </NewsletterContainer>
      </WidthLimiterStyled>
    </NewsletterModuleStyled>
  );
};

NewsletterModule.propTypes = {};

export default NewsletterModule;
