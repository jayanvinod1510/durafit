import React from "react";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { Text, Img, Button, TextArea, Input } from "../../components";
import Header from "../../components/Header";
import {EmailJs}  from '../../data/fieldConstants';

export default function ContactUsPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  var message = ""
  const [contactErrorMessage, setContactErrorMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  if (params.get('product')) {
    message = "I am interested to know more about " + params.get('product')
  }
  const { ref: videoRef, inView: videoIsVisible } = useInView();
  const form = useRef();
  const sendEmail = (e) => {
    setisLoading(true)
    var error = false
    e.preventDefault();

    if (!form.current.name.value) {
      setNameErrorMessage("Please Enter Name")
      error = true
    } else {
      setNameErrorMessage("")
      error = false
    }

    if (!form.current.contact.value) {
      setContactErrorMessage("Please Enter Contact Number")
      error = true
    } else {
      if (form.current.contact.value.length != 10) {
        setContactErrorMessage("Please Enter Valid Contact Number")
        error = true
      } else {
        setContactErrorMessage("")
        error = false
      }
    }

    if (error) {
      setisLoading(false)
      return
    }

    emailjs
      .sendForm(EmailJs.serviceName, EmailJs.enquireTemplate, form.current, {
        publicKey: EmailJs.userPublicKey,
      })
      .then(
        () => {
          toast.success("Enquiry sent successfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light"
          });
          form.current.reset()
          message = ""
          setisLoading(false)
        },
        (error) => {
          toast.error("Error in sending enquiry !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light"
          });
          setisLoading(false)
        },
      );
  };

  return (
    <>
      <Helmet>
        <title>durafit</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div className="flex flex-col pb-[100px] gap-[91px] md:gap-[68px] md:pb-5 sm:gap-[45px] bg-white-A700">
          <Header className="p-[23px] sm:p-5 bg-gray-100_cc md:bg-[#FFFFFF]" />
          <br></br>
          <br></br>
          <br></br>
          <div className="flex flex-col items-center w-full gap-[30px] mx-auto md:p-5 max-w-[1180px]">
            <div className="self-stretch px-60 md:px-5">
              <div className="flex flex-col items-center gap-[5px]">
                <Text size="6xl" as="p" className="!text-blue_gray-900 text-center !font-normal">
                  Get in Touch With Us
                </Text>
                <div className="self-stretch">
                  <Text size="xl" as="p" className="! tracking-[0.18px] text-center leading-[150%]" style={{ "color": "#BBBBBB" }}>
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff
                    Always Be There To Help You Out. Do Not Hesitate!
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col-reverse justify-between items-start w-[75%] md:w-full pb-[50px] pr-[50px] gap-5 md:pb-5 md:pr-0">
              <div className="flex flex-col justify-center w-[30%] md:w-full gap-[39px] p-5">
                <div className="flex flex-col mt-[30px] gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Img src="images/img_vector.svg" alt="vector_one" className="h-[22px] w-[22px]" />
                    <Text size="2xl" as="p" className="!text-black-900">
                      Contact on
                    </Text>
                  </div>
                  <Text as="p" className="!text-black-900">
                    <>
                      +91 8949270403
                      <br />
                      durafitindia@gmail.com
                    </>
                  </Text>
                </div>
                <div className="flex flex-col w-[85%] md:w-full gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <Img
                      src="images/img_vector_black_900.svg"
                      alt="vector_three"
                      className="self-start h-[23px] w-[23px]"
                    />
                    <Text size="2xl" as="p" className="self-end !text-black-900">
                      Working time
                    </Text>
                  </div>
                  <Text as="p" className="!text-black-900">
                    <>
                      Mon-Fri: 9:00 - 22:00
                      <br />
                      Sat-Sun: 9:00 - 21:00
                    </>
                  </Text>
                </div>
              </div>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col items-start w-[60%] md:w-full mt-[50px] gap-[34px]">
                <div className="flex flex-col self-stretch items-start gap-[9px]">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Your name*
                    </Text>
                  </div>
                  <Input
                    style={{ "color": "#434343" }}
                    shape="round"
                    type="text"
                    name="name"
                    placeholder={`Enter your full name`}
                    className="sm:px-5"
                  />
                  <Text as="p" className="!text-red-900 !font-medium">
                    {nameErrorMessage}
                  </Text>
                </div>
                <div className="flex flex-col self-stretch items-start gap-2.5">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Email address
                    </Text>
                  </div>
                  <Input type="email" shape="round" style={{ "color": "#434343" }} name="email" placeholder={`Eg: sample@sample.com`} className="sm:px-5" />
                </div>
                <div className="flex flex-col self-stretch items-start gap-[9px]">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Contact number*
                    </Text>
                  </div>
                  <Input type="number" shape="round" style={{ "color": "#434343" }} name="contact" placeholder={`Eg: 0000000000`} className="sm:px-5" />
                  <Text as="p" className="!text-red-900 !font-medium">
                    {contactErrorMessage}
                  </Text>

                </div>
                <div className="flex flex-col self-stretch items-start gap-2">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Subject
                    </Text>
                  </div>
                  <Input shape="round" style={{ "color": "#434343" }} name="subject" placeholder={`Enter your Enquiry subject`} className="sm:px-5" />
                </div>
                <div className="flex flex-col self-stretch items-start gap-[7px]">
                  <div className="flex">
                    <Text as="p" className="!text-black-900 !font-medium">
                      Message
                    </Text>
                  </div>
                  <TextArea
                    style={{ "color": "#434343" }}
                    shape="round"
                    defaultValue={message}
                    name="message"
                    placeholder={`Enter your Enquiry here..`}
                    className="self-stretch sm:p-5 text-gray-500"
                  />
                </div>
                <Button disabled={isLoading} style={{ "background": isLoading ? "#bbbbbb" : "", "color": isLoading ? "#ffffff !important" : "" }} shape="round" className="sm:px-5 !text-indigo-900 font-medium min-w-[133px]">
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-center items-center mt-[70px] gap-5 md:px-5">
          <div className="flex md:flex-row md:flex-wrap  gap-[70px] md:gap-[20px]  md:ml-0 items-center justify-center">
            <div className="flex flex-col items-center">
              <Img src="images/img_frame_19_gray_900_01.svg" alt="high_quality" className="h-[45px]" />
              <div className="flex flex-col items-center justify-center">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    High Quality
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-indigo-400_a2">
                    crafted from top materials
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Img src="images/img_frame_19_gray_900_01_45x65.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col items-center gap-0.5">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Warranty Protection
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-indigo-400_a2">
                    Over 2 years
                  </Text>
                </a>
              </div>
            </div>
            {/* <div className="flex flex-col items-center sm:w-full">
              <Img src="images/img_frame_19_2.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Free Shipping
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-indigo-400_a2 text-right">
                    Order over ₹10,000
                  </Text>
                </a>
              </div>
            </div> */}
            <div className="flex flex-col items-center sm:w-full">
              <Img src="images/img_frame_19_3.svg" alt="image" className="h-[45px]" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Made in India
                </Text>
              </a>
              <a href="Homebrand" target="_blank" rel="noreferrer" className="mt-0.5 opacity-0.8">
                <Text size="xs" as="p" className="!text-indigo-400_a2">
                  Homebrand
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className="md:h-auto mt-[70px] bg-blue_gray-900 rounded-[5px]">
          <div style={{ "height": "auto !important" }} ref={videoRef}>
            <ReactPlayer url={`videos/contact_us.mp4`} playing={videoIsVisible} width='100%' height='100%'></ReactPlayer>
          </div>
        </div>
        <footer className="px-14 py-[69px] md:p-5 bg-blue-50">
        <div className="flex flex-col w-full gap-[51px] mx-auto sm:gap-[25px] max-w-[1180px] md:p-5">
        <div className="flex flex-col gap-5">
          <div className="flex sm:flex-col justify-between md:justify-start items-center md:items-start gap-5">
            <Img src="images/img_asset_2_1.png" alt="asset2one_one" className="w-[14%] sm:w-1/3 object-cover" />
            <div className="flex md:hidden">
              <div className="flex gap-5">
                <Text size="md" as="p" className="self-start !text-gray-900 text-right">
                  Send us email at:
                </Text>
                <div className="flex self-end">
                  <a href="durafitindia@gmail.com" target="_blank" rel="noreferrer">
                    <Text size="md" as="p" className="!text-deep_orange-400_01 text-center !font-medium">
                      durafitindia@gmail.com
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[62%] md:w-full">
            <div className="flex sm:flex-col justify-between items-center w-full gap-5">
              <div className="flex flex-col items-start w-[47%] sm:w-full gap-[13px] md:gap-[5px]">
                <Text size="md" as="p" className="opacity-0.6 leading-6">
                  <>
                    DURAFIT MATTRESS INDIA PRIVATE LIMITED
                    <br />
                    14A Shiv Shankar Colony,
                    <br />
                    Ghatgate Jaipur, Rajasthan - 302004
                    <br />
                  </>
                </Text>
                <Text size="md" as="p" className="opacity-0.6">
                  +91 89492 70403
                </Text>
              </div>
              <div className="flex w-full md:items-start hidden md:block">
                <div className="flex gap-5 md:gap-1">
                  <Text size="md" as="p" className="self-start !text-gray-900 md:!text-gray-900_90 text-right md:text-left">
                    Send us email at:
                  </Text>
                  <div className="flex self-start">
                    <a href="durafitindia@gmail.com" target="_blank" rel="noreferrer">
                      <Text size="md" as="p" className="!text-deep_orange-400_01 text-center !font-medium">
                        durafitindia@gmail.com
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-start md:hidden">
                <ul className="flex flex-col self-start items-start gap-3.5">
                  <li>
                    <a href="/" rel="noreferrer" className="opacity-0.6">
                      <Text size="md" as="p">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#/aboutus" className="opacity-0.6">
                      <Text size="md" as="p">
                        About us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#/contactus" rel="noreferrer" className="opacity-0.6">
                      <Text size="md" as="p">
                        Contact
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col md:hidden">
                <ul className="flex flex-col self-start items-start gap-[15px]">
                  <li>
                    <a href="#/blackedition" className="opacity-0.6">
                      <Text size="md" as="p">
                        Black Edition
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#/mattress" rel="noreferrer" className="opacity-0.6">
                      <Text size="md" as="p">
                        Mattress
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#/pillows" rel="noreferrer" className="opacity-0.6">
                      <Text size="md" as="p">
                        Pillow
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#/cushioning" className="opacity-0.6">
                      <Text size="md" as="p">
                        Furniture cushion
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col justify-between items-center gap-5 md:gap-1">
          <Text size="md" as="p" className="self-end opacity-0.6 md:w-full">
          </Text>
          <div className="flex justify-between w-[22%] sm:w-full gap-5 md:gap-1 flex-wrap md:flex-col">
            <a href="#" className="self-start opacity-0.6">
              <Text size="md" as="p" className="text-right">
                Terms and service
              </Text>
            </a>
            <a href="#" className="self-end md:self-start md:flex-start opacity-0.6">
              <Text size="md" as="p" className="text-right">
                Privacy Policy
              </Text>
            </a>
          </div>
        </div>
      </div>
        </footer>
      </div>
    </>
  );
}
