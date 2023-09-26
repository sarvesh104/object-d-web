import React from 'react';

import fIocn from "../assets/f-icon.svg"
import tIocn from "../assets/t-icon.svg"
import InIocn from "../assets/in-icon.svg"
import yIcon from "../assets/y-icon.svg"
import pIcon from "../assets/p-icon.svg"
import PageWidth from "../common/Container"
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
// import { Box } from '@mui/material';

export default function Footer() {


  return (
<><div>
    <Grid container spacing={2} sx={{backgroundColor: "#113431 ", color: "white", display:"flex", justifyContent:"center", paddingBottom:"30px"}}>
        <Grid item xs={7} md={6} sm={7}>
      


<Box className='foot-1 '>
         <p className='mb-4' sx={{ fontSize: {xs:"30px", sm:"50px", md:"40px"}, lineHeight: "normal" }}>
           Wanna work with us? <br /><Box sx={{display:{xs:"flex",sm:"flex"}, justifyContent:{xs:"center"}}}>Get in touch</Box>          </p>
         <p style={{ fontSize: "25px", color: "#25A69A", marginBottom: "50px" }} >
           Learn More
         </p>
         <Box className='social-icons' style={{    display: "flex"
     ,gap:"20px"
 }}  sx={{}} >
           <a href='/' className='me-4 text-reset'>
             <img alt='' src={fIocn} />
           </a>
           <a href='/' className='me-4 text-reset'>
             <img alt='' src={tIocn} />
           </a>
           <a href='/' className='me-4 text-reset'>
            <img alt='' src={InIocn} />
           </a>
           <a href='/' className='me-4 text-reset'>
             <img alt='' src={yIcon} />
          </a>
           <a href='/' className='me-4 text-reset'>
            <img alt='' src={pIcon} />
           </a>
        </Box>



      


          </Box>


        </Grid>
        <Grid item xs={6} sm={6} md={5}>
          <Box footc-2 sx={{display:"flex" , flexDirection:{xs:"column", sm:"column"},justifyContent:{xs:"ceneter",sm:"",md:"space-between"}, marginTop:"55px", }}>

<Box  sx={{alignItems:{xs:"center",sm:"center"}, display:{xs:"flex",sm:"flex"},flexDirection:{xs:"column",sm:"column"}}}>
<p>
                                <a href='#!' className='text-reset' >
                                    Company
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset' >
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    About
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact
                                </a>
                            </p>

</Box>
<Box  sx={{alignItems:{xs:"center",sm:"center"}, display:{xs:"flex",sm:"flex"},flexDirection:{xs:"column",sm:"column"}}}>
<p>
                                <a href='#!' className='text-reset'>
                                    Jobs
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Apply
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Help
                                </a>
                            </p>
</Box>
<Box  sx={{alignItems:{xs:"center",sm:"center"}, display:{xs:"flex",sm:"flex"},flexDirection:{xs:"column",sm:"column"}}}>
  
<p>
                                <a href='#!' className='text-reset'>
                                    FAQ
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Privacy Policy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Terms & Conditions
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    help@objdet.com
                                </a>
                            </p>
</Box>


          </Box>
        </Grid>
        
      </Grid>
</div>

<div style={{display:"flex",justifyContent:"center" , background: "#061A18 0% 0% no-repeat" }}>
<p style={{color:"#FFFFFF"}}>© 2020 All rights reserved</p>
</div>



</>




  );
}





{/* 
//     ,justifyContent: "space-between"
// }}>
//           <a href='/' className='me-4 text-reset'>
//             <img alt='' src={fIocn} />
//           </a>
//           <a href='/' className='me-4 text-reset'>
//             <img alt='' src={tIocn} />
//           </a>
//           <a href='/' className='me-4 text-reset'>
//             <img alt='' src={InIocn} />
//           </a>
//           <a href='/' className='me-4 text-reset'>
//             <img alt='' src={yIcon} />
//           </a>
//           <a href='/' className='me-4 text-reset'>
//             <img alt='' src={pIcon} />
//           </a>
//         </div> */}



        {/* <div className='foot-1-f'>
<p style={{font: "normal normal bold 35px/40px Roboto",
letterSpacing: "0px",
color: "#FFFFFF",
opacity: "1"}}>Wanna work with us? <br/>Get in touch</p>
    </div>
    <div className='foot-1-f2'style={{font: "normal normal normal 30px/20px Roboto",
letterSpacing: "0px",
color: "#25A69A"}}>
    Learn More
    </div>
    <div className='foot-1-f3'>

    </div> */}
    //   </div>

    //   <div className='foot-2' style={{    display: "flex",
    // flexDirection:" column",    justifyContent:" center" ,}}>
      // <p>
      //                           <a href='#!' className='text-reset' >
      //                               Company
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset' >
      //                               Home
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset'>
      //                               About
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset'>
      //                               Contact
      //                           </a>
      //                       </p>
    //   </div>
    //   <div className='foot-3' style={{    display: "flex",
    // flexDirection:" column", paddingTop:"50px",}} > 
      // <p>
      //                           <a href='#!' className='text-reset'>
      //                               Jobs
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset'>
      //                               Apply
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset'>
      //                               Help
      //                           </a>
      //                       </p>

    //   </div>
    //   <div className='foot-4'style={{    display: "flex",
    // flexDirection:" column",    justifyContent:" center" ,}} >

      // <p>
      //                           <a href='#!' className='text-reset'>
      //                               FAQ
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset'>
      //                               Privacy Policy
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset'>
      //                               Terms & Conditions
      //                           </a>
      //                       </p>
      //                       <p>
      //                           <a href='#!' className='text-reset'>
      //                               help@objdet.com
      //                           </a>
      //                       </p>
    //   </div>
    // </div>

    




    // <Box sx={{ marginBottom: "80px" ,maxWidth: "100%", maxWidth:"1300px", backgroundColor:"#113431 "  , 
    //  }}>
    //    <div style={{display:"flex", flexDirection: "column"
    // ,display: "flex",
    // color: "white",
    // marginLeft: "120px"}}>
    //     <div>Wanna work with us? Get in touch</div>
    //     <div>1</div>
    //     <div>2</div>
    //     <div>3</div>

    //    </div>
    //   </Box>    
