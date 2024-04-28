import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {Animated} from "react-animated-css";
import ReactPlayer from 'react-player'
import { useInView } from "react-intersection-observer";
import { Img, Text, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useLocation, useNavigate} from 'react-router-dom';

export default function DetailPage() {
  const location = useLocation();
  const data = location.state?.data;
  const [selectedImage, setSelectedImage] = useState(data.images[0]);
  let navigate = useNavigate();


  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleEnquireRedirection = ()=>{
    navigate(`/contactus?product=${data.headerTitle}`)
  }
  const { ref: videoRef, inView: videoIsVisible } = useInView();
  return (
    <>
      <Helmet>
        <title>durafit</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div>
          <div className="h-[1030px] md:h-full relative">
            <div className="w-full top-[0.00px] right-0 left-0 m-auto absolute">
              <div>
                <div>
                  <Header className="p-[23px] sm:p-5 bg-gray-100_cc md:bg-[#FFFFFF]" />
                  <Img
                    src="images/img_up_in_the_clouds_1024x1024_1.png"
                    alt="upinthe_one"
                    className="h-[703px] w-full md:h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <br class = " hidden md:block"/>
            <br class = " hidden md:block"/>
            <div className="flex md:flex-col justify-end items-start w-full pl-14 pr-[110px] gap-[39px] bottom-[0.00px] right-0 left-0 py-[110px] m-auto md:p-5 bg-white-A700 absolute md:relative">
              <div className="w-[54%] md:w-full">
                <div className="flex flex-col items-start gap-5">
                  <Img
                    src={"images/" + selectedImage}
                    alt="36476white_one"
                    className="h-[590px] w-full md:h-auto object-cover rounded-[5px]"
                  />
                  <div className="flex md:flex-row flex-wrap w-[74%] sm:justify-center  md:w-full gap-5 md:gap-2">
                    {data.images.map((image, i)=>(
                      <div className="flex flex-col w-full bg-gray-100 rounded-[10px] h-[100px] md:h-[70px] w-[95px] md:w-[65px]"
                      onClick={()=>handleClick(image)}
                      >
                      <Img
                        src={`images/${image}`}
                        alt={`outdoorsofa_${i}`}
                        className="h-[100px] w-[95px] object-cover rounded-[10px] cursor-pointer"
                      />
                    </div>
                    ))}
                    
                    {/* <div className="flex flex-col w-full sm:w-full bg-gray-100 rounded-[10px]">
                      <Img
                        src="images/img_outdoor_sofa_set_2.png"
                        alt="outdoorsofa_one"
                        className="h-[100px] object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col w-full sm:w-full bg-gray-100 rounded-[10px]">
                      <Img
                        src="images/img_stuart_sofa_1.png"
                        alt="stuartsofaone"
                        className="h-[100px] object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col w-full sm:w-full bg-gray-100 rounded-[10px]">
                      <Img
                        src="images/img_maya_sofa_three.png"
                        alt="mayasofathree"
                        className="object-cover rounded-[10px]"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-[41%] md:w-full mr-[49px] md:mr-0">
                <div className="w-full">
                  <div className="flex flex-col items-start gap-[30px]">
                    <div className="flex flex-col items-start">
                      <Animated style={{"width": "100%","animation-delay": "300ms"}} animationIn="fadeInUp">
                        <Text size="5xl" as="p" className="!text-gray-900">
                          {data.headerTitle}
                        </Text>
                        <div className="flex">
                          <Text size="s" as="p" className="!text-gray-500">
                            Popular Choice
                          </Text>
                        </div>
                      </Animated>
                    </div>
                    <Animated style={{"width": "100%","animation-delay": "400ms"}} animationIn="fadeInUp">
                      <Text as="p" className="w-[93%] md:w-full !text-blue_gray-400 text-justify sm:text-left">
                        {data.headerDescription}
                      </Text>
                    </Animated>
                    <Animated style={{"width": "100%","animation-delay": "450ms"}} animationIn="fadeInUp">
                      <Button shape="round" className="sm:px-5 font-inter font-medium min-w-[178px] sm:w-full" onClick={handleEnquireRedirection}>
                        Enquire now
                      </Button>
                    </Animated>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-20 md:mt-2 gap-2 mx-auto md:p-5 max-w-[1040px]">
            <Text size="4xl" as="p" className="!text-blue_gray-800 !font-light leading-[60px] md:!text-[25px] md:leading-normal">
              {data.detailTitle}
            </Text>
            <Text as="p" className="!text-blue_gray-400">
              {data.detailDescription}
            </Text>
          </div>
          <div className="flex sm:flex-row sm:flex-wrap justify-between sm:justify-center items-center mt-2.5 sm:mt-0 gap-y-5 p-[70px] md:px-6 md:py-10 w-full">
            {data.features.map((feature, i) => (

              <div className={`flex flex-col items-center  w-[6%] ${data.features.length%2==0?"sm:w-1/2":"sm:w-1/3"} ${i === 0 ? "md:ml-0 ml-[200px]" : ""} ${i === (data.features.length -1) ? "md:mr-0 mr-[200px]" : ""}`}>
                <Img src={`images/${feature.image}`} alt={`image_${i}`} className={data.features.length%2==0?"w-[56%] sm:w-[40%] object-cover":"w-[56%] sm:w-[56%] object-cover"}/>
                <a href="#" className="opacity-0.8 leading-6">
                  <Text as="p" className="!text-blue_gray-800_a2 text-center md:!text-[13px]">
                    <>
                      {feature.titleLine1}
                      <br />
                      {feature.titleLine2}
                    </>
                  </Text>
                </a>
              </div>
              // <div className="flex flex-col items-center w-[14%] sm:w-full">
              //   <Img src="images/img_frame_19_blue_gray_400.svg" alt="image_one" className="h-[45px]" />
              //   <a href="#" className="opacity-0.8 leading-6">
              //     <Text as="p" className="!text-blue_gray-800_a2 text-center">
              //       <>
              //         Organic <br />
              //         Bamboo Fabric
              //       </>
              //     </Text>
              //   </a>
              // </div>
              // <div className="flex flex-col items-center w-[11%] sm:w-full">
              //   <Img src="images/img_frame_19_44x64.png" alt="image_two" className="w-[68%] object-cover" />
              //   <a href="#" className="opacity-0.8 leading-6">
              //     <Text as="p" className="!text-blue_gray-800_a2 text-center">
              //       <>
              //         Sustainable
              //         <br />
              //         Material
              //       </>
              //     </Text>
              //   </a>
              // </div>
              // <div className="flex flex-col items-center w-[8%] sm:w-full">
              //   <Img
              //     src="images/img_frame_19_blue_gray_400_44x74.svg"
              //     alt="image_three"
              //     className="h-[44px] w-full md:h-auto"
              //   />
              //   <a href="#" className="w-[92%] md:w-full opacity-0.8 leading-6">
              //     <Text as="p" className="!text-blue_gray-800_a2 text-center">
              //       <>
              //         Ultrasoft
              //         <br />
              //         Material
              //       </>
              //     </Text>
              //   </a>
              // </div>
              // <div className="flex flex-col items-center w-[10%] sm:w-full mr-[200px] md:mr-0">
              //   <Img src="images/img_frame_19_44x64.png" alt="image_four" className="w-[71%] object-cover" />
              //   <a href="#" className="opacity-0.8 leading-6">
              //     <Text as="p" className="!text-blue_gray-800_a2 text-center">
              //       <>
              //         Orthopedic
              //         <br />
              //         Support
              //       </>
              //     </Text>
              //   </a>
              // </div>
            ))}
          </div>
          {data.video == 'NA' ? (
            <div></div>
          ) : (
            <div style={{"height":"auto !important"}}  ref = {videoRef}>
          <ReactPlayer url = {`videos/${data.video}`} playing={videoIsVisible} width='100%' height='100%'></ReactPlayer>
          </div>
          )}
          {data.footerImage == 'NA' ? (
            <div></div>
          ) : (
              <Img
              src={`images/${data.footerImage}`}
              alt="upinthe_three"
              className="h-[494px] w-full md:h-auto object-cover"
            />
          )}
          <Footer className="px-14 py-[69px] md:p-5 bg-blue-50" />
        </div>
      </div>
    </>
  );
}
