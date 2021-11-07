import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  GalleryComponentContainer,
  GalleryGridContainer,
  GalleryImagesSlider,
} from "./style";
import Text from "../Utilities/TextStyled";
import Title from "../Utilities/TitleStyled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WidthLimiterStyled } from "../Utilities/WidthLimiter/style";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const GalleryComponent = ({ title, images }) => {
  console.log(title);
  console.log(images);
  const [open, setOpen] = useState(false);
  const handleOpen = (ix) => setOpen(true);
  const handleClose = (ix) => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <GalleryComponentContainer>
      <WidthLimiterStyled>
        <Title withTitleDecoration as="h2">
          {title}
        </Title>
        <GalleryGridContainer>
          <Slider {...settings}>
            {images.length > 0 ? (
              images.map((img, ix) => {
                return (
                  <GalleryImagesSlider>
                    <img
                      src={img?.image_main?.url}
                      alt=""
                      id={ix}
                   
                    />
                     <Text
                    type="super-small"
                    className="car-description-carousel"
                  >
                    {img?.car_image_title?.text}
                  </Text>
                    {/* <div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <img src={img?.image_2.url} alt="" />
                          <img src={img?.image_3.url} alt="" />
                          <img src={img?.image_4.url} alt="" />
                        </Box>
                      </Modal>
                    </div> */}
                  </GalleryImagesSlider>
                );
              })
            ) : (
              <></>
            )}
          </Slider>
          <Slider {...settings}>
            {images.length > 0 ? (
              images.map((img, ix) => {
                return (
                  <GalleryImagesSlider>
                    <img
                      src={img?.image_main?.url}
                      alt=""
                      id={ix}
                   
                    />
                     <Text
                    type="super-small"
                    className="car-description-carousel"
                  >
                    {img?.car_image_title?.text}
                  </Text>
                    {/* <div>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <img src={img?.image_2.url} alt="" />
                          <img src={img?.image_3.url} alt="" />
                          <img src={img?.image_4.url} alt="" />
                        </Box>
                      </Modal>
                    </div> */}
                  </GalleryImagesSlider>
                );
              })
            ) : (
              <></>
            )}
          </Slider>
        </GalleryGridContainer>
      </WidthLimiterStyled>
    </GalleryComponentContainer>
  );
};

GalleryComponent.propTypes = {};

export default GalleryComponent;
