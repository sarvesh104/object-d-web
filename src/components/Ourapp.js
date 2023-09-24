import { Box, Grid, Typography } from "@mui/material";
import actionImg from "../assets/actionImg.png";
import PageWidth from "../common/Container";

const OurApp = () => {
  return (
    <PageWidth>
      <Grid container spacing={4}  sx={{padding:{xs:"0px 20px", md:""}}}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "50px",
              textAlign: "center",
              mb: "40px"
            }}
          >
            Our App <span style={{ color: "#25A69A" }}>In Action</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "100%" }}>
            <img src={actionImg} alt="IdentifyImage" style={{ width: "100%", height: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </PageWidth>
  );
};

export default OurApp;
