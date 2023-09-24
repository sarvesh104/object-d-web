import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import identifyImg from "../assets/identify.png";
import PageWidth from '../common/Container';

const Identify = () => {
  return (
    <PageWidth>
      <Grid container spacing={4} sx={{padding:{xs:"0px 20px", md:""}}}>
        <Grid item xs={12} md={6}>
          <Box>
            <img src={identifyImg} alt="IdentifyImage" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                mb: "29px",
                textAlign: "left",
                fontSize: "40px",
                lineHeight: "1.1",
                "@media (max-width: 600px)": {
                  textAlign: "center",
                  fontSize: "30px"
                },
                "@media (max-width: 900px)": {
                  textAlign: "center",
                  fontSize: "40px"
                }
              }}
            >
              Identify any item <br />
              <span style={{ color: "#25A69A" }}>
                and get related info.<br /> on your phone
              </span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#888888",
                fontSize: "22px",
                textAlign: "",
                "@media (max-width: 600px)": {
                  fontSize: "18px",
                  textAlign: "center"
                },
                "@media (max-width: 900px)": {
                  textAlign: "center",
                  fontSize: "18px"
                }
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris
              vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu
              cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </PageWidth>
  )
}

export default Identify
