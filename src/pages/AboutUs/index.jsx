import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>durafit</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full overflow-auto bg-gray-100">
        <div>
          <div>
            <div>
              <div>
                <Header className="p-[23px] sm:p-5 bg-gray-100_cc" />
                <Img
                  src="images/img_up_in_the_clouds_1024x1024_785x1440.png"
                  alt="upinthe_one"
                  className="h-[785px] w-full md:h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="px-14 py-[110px] md:p-5 bg-white-A700">
            <div className="flex flex-col w-full gap-[95px] mx-auto md:gap-[71px] sm:gap-[47px] max-w-[1180px]">
              <div>
                <div className="flex flex-col gap-[100px] md:gap-[75px] sm:gap-[50px]">
                  <div>
                    <div>
                      <div className="flex md:flex-col justify-center items-start gap-[50px]">
                        <div className="flex flex-col items-start w-[19%] md:w-full gap-[9px]">
                          <Text size="4xl" as="p" className="!text-blue_gray-900 leading-[125%]">
                            <>
                              Dive into a<br />
                              Cloud-like <br />
                              Comfort
                            </>
                          </Text>
                          <Text as="p" className="!text-blue_gray-400">
                            Comfort | Support | Value
                          </Text>
                        </div>
                        <Text as="p" className="w-[81%] md:w-full !text-blue_gray-800">
                          <span className="text-indigo-400">
                            <>
                              We deliver the comfort you want and support you can trust. With all new Innovative series
                              of mattresses, we at DURAFIT, are committed to deliver “Exceptional Sleep Experience”
                              <br />
                            </>
                          </span>
                          <span className="text-blue_gray-800">
                            <>
                              &nbsp;
                              <br />
                              Durafit Mattress has been made with our years of experience in sleep industry. Our
                              mattresses have catered to sleep of thousands of Indians who have satisfactorily enjoyed
                              the support and comfort provided by Take Care mattresses. Each Durafit Mattress goes
                              through stringent quality tests to ensure you experience flawless comfort. Each mattress
                              is made with hiqh quality materials that provides comfort as well as durability to the
                              mattress. This is why each mattress is backed with an unmatched warranty that assures you
                              will be able to enjoy your mattress for years to come.
                            </>
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[374px] md:h-auto bg-blue_gray-900 relative rounded-[5px]">
                    <Img
                      src="images/img_image_61.png"
                      alt="imagesixtyone"
                      className="h-[374px] w-full object-cover rounded-[5px]"
                    />
                    <a
                      href="https://www.pexels.com/video/hand-bed-bedroom-home-4153246/"
                      target="_blank"
                      rel="noreferrer"
                      className="bottom-[10.22px] right-[27.00px] m-auto absolute"
                    >
                      <Text size="4xl" as="p" className="!text-white-A700 underline">
                        Video link
                      </Text>
                    </a>
                    <Button
                      size="md"
                      className="left-0 bottom-0 right-0 top-0 m-auto md:p-5 shadow-xs absolute rounded-[5px]"
                    >
                      <Img src="images/img_vector_deep_orange_a100.svg" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col justify-between items-center gap-5">
                <div className="flex flex-col w-[42%] md:w-full gap-1">
                  <div className="flex">
                    <Text size="4xl" as="p" className="!text-blue_gray-900 tracking-[0.80px]">
                      The Sleep Story
                    </Text>
                  </div>
                  <div>
                    <Text as="p" className="!text-gray-900">
                      Our story of selling good night sleep began with a thought of providing the most comfortable
                      mattress to sleep on. We know that after a long exhausting day anyone would require a comfortable
                      bed. We believe good night sleep recharges you and makes you smarter, faster and ready for the
                      next day
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col w-[46%] md:w-full gap-[5px]">
                  <div className="flex">
                    <Text size="4xl" as="p" className="!text-blue_gray-900 tracking-[0.80px]">
                      How sleep affects us?
                    </Text>
                  </div>
                  <div>
                    <Text as="p" className="!text-blue_gray-800">
                      Durafit’s idea from the start was to spread a word for the importance of sleep and best sleep
                      products to sleep on. Sleep is not just a mere solution to your exhaustion. It is assumed that
                      sleep is needed to keep our mind on rest, instead it is the time when the brain is engaged in
                      activities to better the quality of life.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-between items-center gap-5 p-[70px] md:p-5">
            <div className="flex flex-col items-center w-[16%] md:w-full ml-[126px] gap-0.5 md:ml-0">
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
            <div className="flex flex-col items-center w-[14%] md:w-full">
              <Img src="images/img_frame_19_44x64.png" alt="image_three" className="w-[45%] object-cover" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Breathable Fabric
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[14%] md:w-full mr-[126px] md:mr-0">
              <Img src="images/img_frame_19_blue_gray_400_44x64.svg" alt="image_four" className="h-[44px]" />
              <a href="#" className="opacity-0.8">
                <Text as="p" className="!text-blue_gray-800_a2">
                  Easy Maintenance
                </Text>
              </a>
            </div>
          </div>
        </div>
        <div className="h-[909px] w-full px-[179px] mx-auto md:p-5 md:px-5 relative max-w-[1799px]">
          <div className="w-full h-max left-0 bottom-0 right-0 top-0 py-[50px] m-auto md:py-5 bg-white-A700 absolute">
            <div className="flex justify-end pb-4 px-4 bg-white-A700">
              <div className="flex flex-col items-center w-[93%] md:w-full mr-[83px] gap-[66px] md:mr-0 sm:gap-[33px]">
                <div className="flex">
                  <div className="flex flex-col items-center">
                    <Text size="2xl" as="p" className="!text-gray-700 text-center">
                      Share your setup with
                    </Text>
                    <Heading size="s" as="h1" className="mt-[-10px] !text-gray-800 text-center">
                      #DurafitIndia
                    </Heading>
                  </div>
                </div>
                <div className="flex md:flex-col self-stretch justify-center items-start gap-4">
                  <div className="flex flex-col items-end md:self-stretch gap-4 flex-1">
                    <Img
                      src="images/img_rectangle_38.png"
                      alt="image_five"
                      className="h-[312px] w-full md:h-auto object-cover"
                    />
                    <Img src="images/img_rectangle_39.png" alt="image_six" className="w-[76%] object-cover" />
                  </div>
                  <Img
                    src="images/img_rectangle_40.png"
                    alt="image_seven"
                    className="w-[24%] md:w-full mt-[86px] object-cover"
                  />
                  <div className="flex flex-col md:self-stretch mt-[29px] gap-4 flex-1">
                    <Img src="images/img_rectangle_43.png" alt="image_eight" className="w-[64%] object-cover" />
                    <div className="flex sm:flex-col items-start gap-4">
                      <Img
                        src="images/img_rectangle_41.png"
                        alt="image_nine"
                        className="w-[41%] sm:w-full object-cover"
                      />
                      <Img
                        src="images/img_rectangle_44.png"
                        alt="image_ten"
                        className="w-[59%] sm:w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_rectangle_35.png"
            alt="image_eleven"
            className="h-[312px] w-[7%] left-[10%] top-[15%] m-auto object-cover absolute"
          />
          <Img
            src="images/img_rectangle_36.png"
            alt="image_twelve"
            className="h-[382px] w-[7%] left-[10%] top-[15%] m-auto object-cover absolute"
          />
          <Img
            src="images/img_rectangle_37.png"
            alt="image_thirteen"
            className="h-[323px] w-[14%] bottom-[6%] left-[10%] m-auto object-cover absolute"
          />
          <Img
            src="images/img_rectangle_45.png"
            alt="image_fourteen"
            className="h-[433px] w-[17%] right-[10%] top-[17%] m-auto object-cover absolute"
          />
        </div>
        <Footer className="px-14 py-[69px] md:p-5 bg-blue-50" />
      </div>
    </>
  );
}
