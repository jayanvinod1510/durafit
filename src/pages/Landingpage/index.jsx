import React from "react";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { Animated } from "react-animated-css";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet";
import { Heading, Text, RatingBar, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LandingpagePage() {


  const { ref: sofaRef, inView: sofaIsVisible } = useInView();
  const { ref: eleganceRef, inView: eleganceIsVisible } = useInView();
  const { ref: mattressRef, inView: mattressIsVisible } = useInView();
  const { ref: pillowRef, inView: pillowIsVisible } = useInView();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("innerWidth : ", innerWidth)
  return (
    <>
      <Helmet>
        <title>durafit</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div>
          <div>
            <div>
              <div className="self-end">
                <Header className="p-[23px] sm:p-5 bg-gray-100_cc md:bg-[#FFFFFF]" />
                <br></br>
                <br></br>
                <br class="md:hidden"></br>
                <div className="h-[674px] md:h-auto relative">
                  <Img
                    src="images/img_up_in_the_clouds_1024x1024.png"
                    alt="upinthe_one"
                    className="h-[674px] md:h-[750px] w-full object-cover"
                  />
                  <Text
                    size="7xl"
                    as="p"
                    className="w-max top-[8%] right-0 left-0 m-auto !text-blue_gray-800 text-center absolute md:text-[35px] md:leading-normal md:px-5"
                  >
                    Where Comfort Meets Quality
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[70px] md:py-5">
          <Marquee style={{ "text-align": "center" }} direction="right">
            <div className="flex md:flex-row justify-between items-center gap-[80px] md:px-5">

              <div className="flex flex-col items-center w-[16%] md:w-full gap-0.5">
                <Img src="images/img_frame_19.svg" alt="image" className="h-[45px]" />
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Temperature Control
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-center w-[9%] md:w-full gap-0.5">
                <Img src="images/img_frame_19_44x64.png" alt="image_one" className="w-[67%] object-cover" />
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Light weight
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-center w-[17%] md:w-full">
                <Img src="images/img_frame_19_blue_gray_400.svg" alt="image_two" className="h-[45px]" />
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Eco-friendly Materials
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-center w-[17%] md:w-full">
                <Img src="images/medikit.svg" alt="image_three" className="w-[45%] object-cover" />
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Doctor Recommended
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-center w-[14%] md:w-full">
                <Img src="images/air.svg" alt="image_three" className="w-[45%] object-cover" />
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Breathable Fabric
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-center w-[14%] md:w-full">
                <Img src="images/img_frame_19_blue_gray_400_44x74.svg" alt="image_three" className="w-[45%] object-cover" />
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Ultra-soft Material
                  </Text>
                </a>
              </div>
              <div className="flex flex-col items-center w-[14%] md:w-full">
                <Img src="images/img_frame_19_blue_gray_400_44x64.svg" alt="image_four" className="h-[44px]" />
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-blue_gray-800_a2">
                    Easy Maintenance
                  </Text>
                </a>
              </div>
            </div>
          </Marquee>
        </div>


        {/* Section 1 */}
        <div className="flex flex-col items-end justify-center h-[845px] md:h-auto pl-14 pr-[130px] md:h-[750px] gap-[30px] py-[130px] md:p-0 bg-[url(/public/images/img_section_9.png)] md:bg-center bg-cover bg-no-repeat">
          <Animated style={{ "width": "100%", "animation-delay": innerWidth < 768 ? "0ms" : "300ms" }} animationIn="fadeIn" animationOut="fadeOut" isVisible={eleganceIsVisible}>
            <div className="flex justify-end w-[43%] md:w-full mt-[149px] md:mt-[410px] md:p-5 md:bg-gray-50 md:backdrop-opacity-0" style={{ "float": "right" }}>
              <div ref={eleganceRef} className="flex flex-col w-full gap-2.5">
                <Text size="6xl" as="p" className="!text-blue_gray-100 leading-[60px]">
                  <p class="md:text-[25px]  md:!text-blue_gray-800">
                    Elegance in Every
                    <br />
                    Thread of Black Edition
                  </p>
                </Text>
                <Text as="p" className="w-[98%] md:w-full !text-blue_gray-100 md:!text-gray-900_90">
                  <>
                    Experience the epitome of comfort and style with our exclusive <br />
                    Black Edition collection. Crafted with precision and sophistication,
                    <br />
                    these premium mattresses redefine your sleep experience
                  </>
                </Text>
                <a href="/blackedition" className="opacity-0.8">
                  <Button shape="round" className="mb-[149px] md:mb-0 md:w-full mr-[420px] mt-[15px] md:mr-0 sm:px-5 font-medium min-w-[191px]">
                    Explore more
                  </Button>
                </a>
              </div>
            </div>
          </Animated>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-start justify-center h-[845px] md:h-auto pl-[130px]  md:h-[750px] pr-14 md:p-0 gap-[30px] py-[130px] bg-[url(/public/images/img_section_12.png)] md:bg-center bg-cover bg-no-repeat">
          <Animated style={{ "width": "100%", "animation-delay": innerWidth < 768 ? "0ms" : "300ms" }} animationIn="fadeIn" animationOut="fadeOut" isVisible={mattressIsVisible}>
            <div className="flex w-[34%] md:w-full mt-[137px]  md:mt-[380px] md:p-5 md:bg-gray-50 md:backdrop-opacity-0">
              <div ref={mattressRef} className="flex flex-col w-full gap-2.5">
                <Text size="6xl" as="p" className="w-[93%] md:w-full !text-blue_gray-800 leading-[60px]">
                  <p class="md:text-[25px]  md:!text-blue_gray-800">
                    Selling Sleep,
                    <br />
                    not just Mattress
                  </p>
                </Text>
                <Text as="p" className="!text-blue_gray-800 pt-5 md:pt-0 md:!text-gray-900_90">
                  <>
                    Discover a world of tranquility and restful nights with <br />
                    our exceptional mattress collection. Engineered for <br />
                    supreme comfort, our mattresses ensure you wake <br />
                    up rejuvenated every morning
                  </>
                </Text>
              </div>
            </div>
            <a href="/mattress" className="opacity-0.8 md:px-5 md:bg-gray-50 md:pb-5">
              <Button shape="round" className="mb-[137px] sm:px-5 mt-[15px] font-medium min-w-[191px] md:mb-0 md:w-full">
                Explore more
              </Button>
            </a>
          </Animated>
        </div>

        {/* Section 3 */}
        <div className="flex justify-end items-center h-[845px] md:h-auto pl-14 pr-[130px] py-[130px]  md:p-0 rotate-[0deg] bg-[url(/public/images/img_section_11.png)] md:bg-center bg-cover bg-no-repeat" style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh', // Set the height to the full viewport height
        }}>
          <Animated style={{ "width": "100%", "animation-delay": innerWidth < 768 ? "0ms" : "300ms" }} animationIn="fadeIn" animationOut="fadeOut" isVisible={pillowIsVisible}>
            <div className="flex flex-col items-start w-[39%] md:w-full gap-[30px] my-[149px] md:mt-[609px] md:p-5 md:bg-gray-50 md:backdrop-opacity-0" style={{ "float": "right" }}>
              <div className="self-stretch">
                <div ref={pillowRef} className="flex flex-col gap-2.5">
                  <Text size="6xl" as="p" className="w-[66%] md:w-full !text-blue_gray-800 leading-[60px]">
                    <p class="md:text-[25px]  md:!text-blue_gray-800">
                      Pillows that <br />
                      Hug You Back
                    </p>
                  </Text>
                  <Text as="p" className="!text-blue_gray-800 md:!text-gray-900_90">
                    <>
                      Experience the softest embrace for your head and neck with <br />
                      our pillow collection. Designed for ultimate relaxation, our <br />
                      pillow provide the perfect support for a heavenly night&#39;s sleep
                    </>
                  </Text>
                </div>
              </div>
              <a href="/pillows" className="opacity-0.8 md:w-full">
                <Button shape="round" className="sm:px-5 font-medium min-w-[191px] mt-[15px]  md:mb-0 md:w-full">
                  Explore more
                </Button>
              </a>
            </div>
          </Animated>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col items-start justify-center h-[845px] md:h-auto pl-[130px] pr-14 gap-[30px] py-[130px]  md:h-[750px] md:p-0 bg-[url(/public/images/img_section_13.png)]  md:bg-center bg-cover bg-no-repeat">
          <Animated style={{ "width": "100%", "animation-delay": innerWidth < 768 ? "0ms" : "300ms" }} animationIn="fadeIn" animationOut="fadeOut" isVisible={sofaIsVisible}>
            <div className="flex w-[42%] md:w-full mt-[149px] md:mt-[400px] md:p-5 md:bg-gray-50 md:backdrop-opacity-0">
              <div ref={sofaRef} className="flex flex-col w-full gap-2.5">
                <Text size="6xl" as="p" className="w-[95%] md:w-full !text-blue_gray-800 leading-[60px]">
                  <p class="md:text-[25px]  md:!text-blue_gray-800">
                    Sofas and Chairs, <br />
                    Reimagined Comfort
                  </p>
                </Text>
                <Text as="p" className="!text-blue_gray-800 md:!text-gray-900_90">
                  <>
                    Upgrade your lounging experience with our furniture cushionings <br />
                    collection. Transform your sofas and chairs into cozy havens of <br />
                    comfort, enhancing your relaxation time at home
                  </>
                </Text>
              </div>

            </div>
            <a href="#" className="opacity-0.8 md:w-full md:px-5 md:bg-gray-50 md:pb-5">
              <Button shape="round" className="mb-[149px] sm:px-5 font-medium min-w-[191px] mt-[15px] md:mb-0 md:w-full">
                Explore more
              </Button>
            </a>
          </Animated>
        </div>
        <div className=" md:flex-col justify-between gap-5 p-[70px] md:p-5 bg-blue_gray-800">
          <div className="flex md:flex-col  md:w-full gap-[70px] md:ml-0 items-center justify-center">
            <div className="flex flex-col items-center">
              <Img src="images/img_frame_19_white_a700.svg" alt="high_quality" className="h-[45px]" />
              <div className="flex flex-col items-center justify-center">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-white-A700_a2 !font-medium">
                    High Quality
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-blue_gray-100_a2">
                    crafted from top materials
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Img src="images/img_frame_19_white_a700_45x65.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col items-center gap-0.5">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-white-A700_a2 !font-medium">
                    Warranty Protection
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-blue_gray-100_a2">
                    Over 2 years
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center md:w-full">
              <Img src="images/img_frame_19_45x65.svg" alt="image" className="h-[45px]" />
              <div className="flex flex-col">
                <a href="#" className="opacity-0.8">
                  <Text as="p" className="!text-white-A700_a2 !font-medium">
                    Free Shipping
                  </Text>
                </a>
                <a href="#" className="opacity-0.8">
                  <Text size="xs" as="p" className="!text-blue_gray-100_a2 text-right">
                    Order over ₹10,000
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:w-full md:mr-0">
              <Img src="images/img_frame_19_1.svg" alt="image_five" className="h-[45px]" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-white-A700_a2 !font-medium">
                  Made in India
                </Text>
              </a>
              <a href="Homebrand" target="_blank" rel="noreferrer" className="my-0.5 opacity-0.8">
                <Text size="xs" as="p" className="!text-blue_gray-100_a2">
                  Homebrand
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col pl-[78px] pr-14 gap-[100px] py-[78px] md:p-5">
          <div className="flex sm:flex-col justify-center items-start w-[44%] md:w-full mb-[57px] ml-[39px] gap-[30px] md:mb-0 md:ml-0">
            <Heading as="h1" className="mb-6 tracking-[-1.00px]">
              “
            </Heading>
            <div className="flex flex-col sm:self-stretch gap-5 flex-1">
              <div className="flex items-center w-[44%] md:w-full gap-5">
                <div className="self-start h-[50px] w-[50px] bg-blue_gray-100 rounded-[25px]" />
                <div className="flex flex-col items-start gap-[7px] flex-1">
                  <Heading size="xs" as="h2" className="!text-gray-900 tracking-[-1.00px]">
                    Anonymous
                  </Heading>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#d9d9d9"
                    activeColor="#fdd20d"
                    size={15}
                    className="flex justify-between rounded-[1px]"
                  />
                </div>
              </div>
              <div>
                <Text as="p" className="!text-indigo-400 leading-[22px]">
                  Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem
                  ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem Lorem ipsum lorem ipsum Lorem ipsum lorem
                  ipsum Lorem ipsum lorem{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col justify-center items-start w-[42%] md:w-full gap-[30px]">
            <div className="flex flex-col sm:self-stretch gap-px flex-1">
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center w-[44%] md:w-full gap-5">
                  <div className="self-start h-[50px] w-[50px] bg-blue_gray-100 rounded-[25px]" />
                  <div className="flex flex-col items-start gap-[7px] flex-1">
                    <Heading size="xs" as="h2" className="!text-gray-900 tracking-[-1.00px]">
                      Anonymous
                    </Heading>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#fdd20d"
                      size={15}
                      className="flex justify-between rounded-[1px]"
                    />
                  </div>
                </div>
                <div>
                  <Text as="p" className="!text-indigo-400 leading-[22px]">
                    Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                    Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem Lorem ipsum lorem ipsum Lorem
                    ipsum lorem ipsum Lorem ipsum lorem{" "}
                  </Text>
                </div>
              </div>
            </div>
            <Heading as="h3" className="mb-6 tracking-[-1.00px]">
              ”
            </Heading>
          </div>
        </div>
        <Footer className="px-14 py-[69px] md:p-5 bg-blue-50" />
      </div>
    </>
  );
}
