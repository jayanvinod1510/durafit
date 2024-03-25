import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function NaturapedicPage() {
  return (
    <>
      <Helmet>
        <title>durafit</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100">
        <div>
          <div className="h-[1030px] relative">
            <div className="w-full top-[0.00px] right-0 left-0 m-auto absolute">
              <div>
                <div>
                  <Header className="p-[23px] sm:p-5 bg-gray-100_cc" />
                  <Img
                    src="images/img_up_in_the_clouds_1024x1024_1.png"
                    alt="upinthe_one"
                    className="h-[703px] w-full md:h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-end items-start w-full pl-14 pr-[110px] gap-[39px] bottom-[0.00px] right-0 left-0 py-[110px] m-auto md:p-5 bg-white-A700 absolute md:relative">
              <div className="w-[54%] md:w-full">
                <div className="flex flex-col items-start gap-5">
                  <Img
                    src="images/img_36476_white_zoom_6.png"
                    alt="36476white_one"
                    className="h-[590px] w-full md:h-auto object-cover rounded-[5px]"
                  />
                  <div className="flex md:flex-row sm:flex-col w-[74%] md:w-full gap-5">
                    <div className="flex flex-col w-full sm:w-full pt-[9px] bg-gray-100 rounded-[10px]">
                      <Img
                        src="images/img_outdoor_sofa_set.png"
                        alt="outdoorsofa_one"
                        className="h-[91px] object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col w-full sm:w-full bg-gray-100 rounded-[10px]">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-[41%] md:w-full mr-[49px] md:mr-0">
                <div className="w-full">
                  <div className="flex flex-col items-start gap-[30px]">
                    <div className="flex flex-col items-start">
                      <Text size="5xl" as="p" className="!text-gray-900">
                        Naturapedic Mattress
                      </Text>
                      <div className="flex">
                        <Text size="s" as="p" className="!text-gray-500">
                          Popular Choice
                        </Text>
                      </div>
                    </div>
                    <Text as="p" className="w-[93%] md:w-full !text-blue_gray-400">
                      Experience the Naturapedic Bamboo Mattress - a touch of nature in your bedroom. Sink into the
                      soothing, natural embrace of bamboo fibers every night. This sustainable choice not only offers
                      supreme comfort but also a connection to the earth beneath you. Sleep soundly on the harmony of
                      nature and comfort combined.
                    </Text>
                    <Button shape="round" className="sm:px-5 font-inter font-medium min-w-[178px]">
                      Enquire now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-20 gap-2 mx-auto md:p-5 max-w-[1040px]">
            <Text size="4xl" as="p" className="!text-blue_gray-800 !font-light leading-[60px]">
              Complete eco-friendly choice for a restful and supportive night’s sleep
            </Text>
            <Text as="p" className="!text-blue_gray-400">
              Tailored for those experiencing back and joint pain, our specially designed mattress offers gentle
              cushioning and buoyant support providing an everyday remedy to relieve pain. Crafted with 100% organic
              latex, this Naturapedic mattress not only ensures a cool sleeping experience but also promotes spine
              support.
            </Text>
          </div>
          <div className="flex sm:flex-col justify-between items-center mt-2.5 gap-5 p-[70px] md:p-5">
            <div className="flex flex-col items-center w-[13%] sm:w-full ml-[200px] md:ml-0">
              <Img src="images/img_frame_19_44x64.png" alt="image" className="w-[56%] object-cover" />
              <a href="#" className="opacity-0.8 leading-6">
                <Text as="p" className="!text-blue_gray-800_a2 text-center">
                  <>
                    Works on Back
                    <br />
                    and Joint Pain
                  </>
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[14%] sm:w-full">
              <Img src="images/img_frame_19_blue_gray_400.svg" alt="image_one" className="h-[45px]" />
              <a href="#" className="opacity-0.8 leading-6">
                <Text as="p" className="!text-blue_gray-800_a2 text-center">
                  <>
                    Organic <br />
                    Bamboo Fabric
                  </>
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[11%] sm:w-full">
              <Img src="images/img_frame_19_44x64.png" alt="image_two" className="w-[68%] object-cover" />
              <a href="#" className="opacity-0.8 leading-6">
                <Text as="p" className="!text-blue_gray-800_a2 text-center">
                  <>
                    Sustainable
                    <br />
                    Material
                  </>
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[8%] sm:w-full">
              <Img
                src="images/img_frame_19_blue_gray_400_44x74.svg"
                alt="image_three"
                className="h-[44px] w-full md:h-auto"
              />
              <a href="#" className="w-[92%] md:w-full opacity-0.8 leading-6">
                <Text as="p" className="!text-blue_gray-800_a2 text-center">
                  <>
                    Ultrasoft
                    <br />
                    Material
                  </>
                </Text>
              </a>
            </div>
            <div className="flex flex-col items-center w-[10%] sm:w-full mr-[200px] md:mr-0">
              <Img src="images/img_frame_19_44x64.png" alt="image_four" className="w-[71%] object-cover" />
              <a href="#" className="opacity-0.8 leading-6">
                <Text as="p" className="!text-blue_gray-800_a2 text-center">
                  <>
                    Orthopedic
                    <br />
                    Support
                  </>
                </Text>
              </a>
            </div>
          </div>
          <div className="flex bg-blue_gray-800">
            <Img src="images/img_naturapedic_1.png" alt="naturapedicone" className="w-[70%] object-cover" />
          </div>
          <Img
            src="images/img_up_in_the_clouds_1024x1024_494x1440.png"
            alt="upinthe_three"
            className="h-[494px] w-full md:h-auto object-cover"
          />
          <Footer className="px-14 py-[69px] md:p-5 bg-blue-50" />
        </div>
      </div>
    </>
  );
}
