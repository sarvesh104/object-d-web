import { Button, FormControl, Stack, TextField, TextareaAutosize, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";


import PageWidth from "../common/Container";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [textError, setTextError] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  const validateForm= async ()=> {

    
    // Reset error messages
    setNameError("");
    setEmailError("");
    setTextError("");

    if (name.length === 0 || name.length < 4) {
      setNameError("Name cannot be empty or less than 4 characters");
      return;
    }

    if (email.length === 0 || !email.includes("@")) {
      setEmailError("Email Address cannot be empty or invalid");
      return;
    }

    if (text.length === 0 || text.length < 4) {
      setTextError("Message cannot be empty or less than 4 characters");
      return;
    }
if(name === name && email === email){
    alert("success");
    
}
    

  
      
  }

  return (
    <PageWidth>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "80%" : "80%",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: isMobile ? "30px" : "50px",
            mb: isMobile ? "10px" : "20px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Get In Touch <span style={{ color: "#25A69A" }}>With Us</span>
        </Typography>

        <Stack sx={{ mb: "30px" }}>
          <Typography
            sx={{
              fontSize: isMobile ? "18px" : "22px",
              color: "#707070",
              textAlign: "left",
            }}
          >
            Fill in the form, or if you’d like to, you can also shoot us an email <br />
            (Tip: include your phone # for a quicker response)
          </Typography>
        </Stack>

        <FormControl type="submit">
          <TextField
            variant="standard"
            label="Your Name"
            error={nameError.length > 0} // Set error prop based on the error message
            helperText={nameError} // Display the error message
            required
            onChange={(e) => setName(e.target.value)}
            sx={{
              fontSize: "24px",
              mb: "30px",
              "& .MuiInputBase-input": { padding: "10px" },
              "& .MuiInput-root": {
                borderBottom: "1px solid #CCCCCC !important",
              },
            }}
            InputLabelProps={{
              sx: { color: "#E5E5E5", fontSize: "20px" },
            }}
          />

          <TextField
            variant="standard"
            label="Your Email"
            error={emailError.length > 0} // Set error prop based on the error message
            helperText={emailError} // Display the error message
            required
            sx={{
              fontSize: "24px",
              mb: "30px",
              "& .MuiInputBase-input": { padding: "10px" },
              "& .MuiInput-root": {
                borderBottom: "2px solid #CCCCCC !important",
              },
            }}
            InputLabelProps={{
              sx: { color: "#E5E5E5", fontSize: "20px" },
            }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextareaAutosize
            required
            minRows={4}
            placeholder="Your Message"
            style={{
              padding: "20px",
              fontSize: "20px",
              marginBottom: textError.length > 0?"5px": "10px",
              border: textError.length > 0 ? "2px solid red" : "2px solid #E5E5E5",
              borderRadius: "5px",
            }}
            onChange={(e) => setText(e.target.value)}
          />
              {textError && (
                <Typography variant="caption" sx={{ color: "red",mb:"20px"}}>
                  {textError}
                </Typography>
              )}
          <Button
            type="submit"
            onClick={validateForm}
            sx={{
              boxShadow: "5px 8px 10px 0px #25A69A4D",
              color: "#fff",
              width: "fit-content",
              padding: "10px 50px",
              textTransform: "none",
              fontSize: "20px",
              backgroundColor: "#25A69A",
              "&:hover": {
                backgroundColor: "#25A69A",
              },
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Stack>
    </PageWidth>
  );
};

export default Form;
