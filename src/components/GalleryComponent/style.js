import styled from "@emotion/styled";
import { theme } from "../../styles";

export const GalleryComponentContainer = styled.div`

`

export const GalleryGridContainer = styled.div`
margin: 40px auto;

.slick-slide {
    cursor: pointer;
}
`


export const GalleryImagesSlider = styled.div`
position: relative;

.car-description-carousel {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #0b1f30;
    width: 100%;
    height: 50px;
    opacity: 60%;
    color: white;
    padding: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
`