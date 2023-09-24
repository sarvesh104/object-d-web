import React from 'react';
import { Box, Button, Grid, Stack } from "@mui/material";
import objectBg from "../assets/object-bg.png";
import PageWidth from "../common/Container";

const Back = () => {
  return (
    <Box
    sx={{
      backgroundImage: `url(${objectBg})`,
      backgroundSize: "100% auto",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      height: { xs : "", md: "calc(100vh - 60px)"},
      marginBottom: {xs:"0px", md:"100px"},
      marginTop: {xs:"", md:"70px"},
      display: "flex",
    }}
  >
    <PageWidth sx={{
      marginTop:{xs:"60px", sm:"100px"},
      marginLeft:{xs:"", md:"130px", sm:"100px"},
      marginBottom:{xs:"80px"},
      display:"flex", justifyContent:"center", alignItems:"center",
      "@media (max-width: 900px)": {
        textAlign: "center",
        fontSize: "18px",
      } 
      }}>
      <Grid container spacing={2} >
        <Grid item xs={12} md={12} >
          <Stack
            sx={{
              fontSize: {xs:"40px", md:"60px"},
              fontWeight: "600",
              alignItems: {xs:"center",md:"flex-start"},
              padding: {xs:"0px", md:"0px 60px"},
              marginTop: {xs:"0px", md:""},
             
            }}
          >
            <Stack sx={{ marginBottom: {xs:"20px", md:"50px"}}} >
            <div style={{ lineHeight: "1.1" }}>
              <span style={{ color: "#25A69A" }}>Object Detection</span> <br /> System
            </div>
            </Stack>
            <Button
              sx={{
                boxShadow: "5px 8px 10px 0px #25A69A4D",
                backgroundColor: "#25A69A",
                color: "#fff",
                fontWeight: "600",
                fontSize: {xs:"20px", md:"30px"},
                textTransform: "none",
                padding: {xs:"10px 20px", md:"10px 50px"},
                "&:hover": {
                  backgroundColor: "#25A69A",
                },
                
              }}
            >
              Get App
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </PageWidth>
  </Box>
  )
}

export default Back
