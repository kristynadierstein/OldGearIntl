import React, { useState } from "react";
import {
  ContactFormCarHuntingContainer,
  ContactServicesFormStyled,
} from "./style";
import { TextStyled } from "../Utilities/TextStyled/style";
import { TitleStyled } from "../Utilities/TitleStyled/style";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import { getQuery } from "../../utils/functions/getQuery";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
// const Airtable = require("airtable");

const ContactFormCarHunting = (data) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    brand: "",
    model: "",
    destination: "",
    year: "",
    message: "",
  });

  const formData = getQuery(["data"], data);
  console.log("data from car hunting form services", formData);

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('SUBMITTED')

    // const base = new Airtable({ apiKey: "keyItT7KyJ8jjlQyQ" }).base(
    //   "appWAQdbhT8ASBIC2"
    // );

    // base("LeadForm").create(
    //   [
    //     {
    //       fields: {
    //         Name: formState.name,
    //         Email: formState.email,
    //         Brand: formState.brand,
    //         Model: formState.model,
    //         Destination: formState.destination,
    //         Year: formState.year,
    //         Message: formState.message,
    //       },
    //     },
    //   ],
    //   function(err, records) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     setFormState({
    //       name: "",
    //       email: "",
    //       brand: "",
    //       model: "",
    //       destination: "",
    //       year: "",
    //       message: "",
    //     });
    //     document.querySelector(".thank-you-message").classList.add("show");
    //   }
    // );
  };
  return (
    <ContactFormCarHuntingContainer>
      <WidthLimiterStyled>
        <TitleStyled withTitleDecoration as="h2">
          {formData?.title?.text}
        </TitleStyled>
        <ContactServicesFormStyled
          name="contactServices"
          id="ServicesContact"
          onSubmit={submitHandler}
        >
          <FormControl>
            <TextField
              id="name"
              name="name"
              placeholder={formData?.name_placeholder?.text}
              class="input-newsletter"
              value={formState.name}
              onChange={changeHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="email"
              name="email"
              placeholder={formData?.email_placeholder?.text}
              class="input-newsletter"
              value={formState.email}
              onChange={changeHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="brand"
              name="brand"
              placeholder={formData?.brand_placeholder?.text}
              class="input-newsletter"
              value={formState.brand}
              onChange={changeHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="model"
              name="model"
              placeholder={formData?.model_placeholder?.text}
              class="input-newsletter"
              value={formState.model}
              onChange={changeHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="year"
              name="year"
              placeholder={formData?.year_placeholder?.text}
              class="input-newsletter"
              value={formState.year}
              onChange={changeHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="message"
              name="message"
              placeholder={formData?.message_placeholder?.text}
              class="input-newsletter"
              value={formState.message}
              multiline
              rows={5}
              onChange={changeHandler}
            />
          </FormControl>
          <button type="submit" id="btn-submit" class="btn-submit">
            {formData?.buttton_label?.text}
          </button>
        </ContactServicesFormStyled>
        <TextStyled type="primary" className="thank-you-message">
          {formData?.thank_you_message?.text}
        </TextStyled>
      </WidthLimiterStyled>
    </ContactFormCarHuntingContainer>
  );
};

ContactFormCarHunting.propTypes = {};

export default ContactFormCarHunting;
