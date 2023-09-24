import { Grid, Stack, Typography } from "@mui/material";
import knowImg from "../assets/knowImg.png";
import PageWidth from "../common/Container";

const KnowMore = () => {
  return (
    <PageWidth>
      <Grid container spacing={4}  sx={{padding:{xs:"0px 20px", md:""}}}>
        <Grid item xs={12} md={6}>
          <Stack>
            <img src={knowImg} alt="IdentifyImage" style={{ width: "100%" }} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack sx={{ mt: "20px" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "600",
                mb: "20px",
                fontSize: "50px",
                textAlign: "left",
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
              Get To Know More<br />
              <span style={{ color: "#25A69A" }}>About Us</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#888888", fontSize: "24px", textAlign: "left",
              "@media (max-width: 600px)": {
                textAlign: "center",
                fontSize: "18px"
              },
              "@media (max-width: 900px)": {
                textAlign: "center",
                fontSize: "18px"
              } }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris
              vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu
              cursus euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </PageWidth>
  );
};

export default KnowMore;
