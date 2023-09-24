import { Box, Grid, Typography } from "@mui/material";
import safeImg from "../assets/safeImg.png";
import PageWidth from "../common/Container";

const Safe = () => {
  return (
    <PageWidth>
      <Grid container spacing={4} sx={{padding:{xs:"0px 20px", md:""}}}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "600",
              textAlign: "center",
              lineHeight: "1.1",
              "@media (max-width: 600px)": {
                textAlign: "center",
                fontSize: "30px"
              }
            }}
          >
            Stay Safe With <span style={{ color: "#25A69A" }}>Contactless<br /> Checkout</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                mb: "40px",
                fontSize: "32px",
                lineHeight: "1.3",
                "@media (max-width: 600px)": {
                  textAlign: "center",
                  fontSize: "25px"
                }
              }}
            >
              Speed through checkout <br /> safely with your phone
            </Typography>
            <Typography
              sx={{ color: "#888888", fontSize: "22px","@media (max-width: 600px)": {
                  textAlign: "center",
                  fontSize: "18px"
                } ,textAlign:"center" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris
              vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu
              cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <img src={safeImg} alt="IdentifyImage" style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </PageWidth>
  );
};

export default Safe;
