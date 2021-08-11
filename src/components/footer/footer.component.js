import { Grid } from "@material-ui/core";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import instagram from "../../images/instagram-icon.png";

// styles
import "./footer.styles.scss";

export default function Footer(props) {
  return (
    <footer
      className={`row center footer-conatiner ${
        props.path.includes("/details") ? "hide-footer" : ""
      }`}
    >
      {/* <div>
        <ul className="footer-list">
          <li>
            <a href="https://www.servicegeni.in/">HOME</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/doorstep">DOORSTEP SERVICES</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/ecu">ECU CODING & REPAIR</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/about-us">ABOUT US</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/contact-us">CONTACT</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/blogs">BLOGS</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/viral-kindness">
              VIRAL KINDNESS
            </a>
          </li>
        </ul>
      </div> */}
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
        style={{ width: "60%" }}
      >
        <Grid item xs={12} md={4} alignContent="center" alignItems="center">
          <div>Copyright © 2021 Service Geni - All Rights Reserved.</div>
          <div>
            <FacebookShareButton
              quote="Service geni shared a service center"
              url="https://www.facebook.com/servicegeni"
            >
              <FacebookIcon size={32} />
            </FacebookShareButton>
            <TwitterShareButton
              quote="Service geni shared a service center"
              url="https://twitter.com/GeniService"
            >
              <TwitterIcon size={32} />
            </TwitterShareButton>
            <WhatsappShareButton title="Service geni shared a service center">
              <WhatsappIcon size={32} />
            </WhatsappShareButton>
            <a href="https://www.instagram.com/servicegeni/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <ul className="footer-list">
            <li>
              <a href="https://www.servicegeni.in/doorstep">
                Doorstep Services
              </a>
            </li>
            <li>
              <a href="https://www.servicegeni.in/car-inspection">
                Car Inspection
              </a>
            </li>
            <li>
              <a href="https://www.servicegeni.in/jumpstart-services">
                Jumpstart Services
              </a>
            </li>
            <li>
              <a href="https://www.servicegeni.in/faq">FAQs</a>
            </li>
            <li>
              <a href="https://www.servicegeni.in/about-us">About Us</a>
            </li>
            <li>
              <a href="https://www.servicegeni.in/terms-conditions">
                Terms & condition
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
}
