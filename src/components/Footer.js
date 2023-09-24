import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import fIocn from "../assets/f-icon.svg"
import tIocn from "../assets/t-icon.svg"
import InIocn from "../assets/in-icon.svg"
import yIcon from "../assets/y-icon.svg"
import pIcon from "../assets/p-icon.svg"
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

            <section className='p-4' style={{ backgroundColor: '#113431', color: "#FFFFFF" }}>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="5" className='mx-auto mb-4'>
                            <p className='mb-4' style={{ fontSize: "40px", lineHeight: "normal" }}>
                                Wanna work with us? <br />Get in touch
                            </p>
                            <p style={{ fontSize: "20px", color: "#25A69A", marginBottom:"50px" }} >
                                Learn More
                            </p>
                            <div>
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
                            </div>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="1" className='mx-auto mb-4 mt-5' style={{fontSize:"20px"}}>
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
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="1" className='mx-auto mb-4 ' style={{fontSize:"20px", marginTop:isMobile?"5px":"50px"}}>
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

                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-2' style={{fontSize:"20px",marginTop:isMobile?"5px":"50px"}}>
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
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: '#061A18', color: "#FFFFFF",height:"30px" }}>
                © 2020 All rights reserved
            </div>
        </MDBFooter>
    );
}