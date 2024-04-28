import React from "react";
import { Text, Img } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-col w-full gap-[51px] mx-auto sm:gap-[25px] max-w-[1180px] md:p-5">
        <div className="flex flex-col gap-5">
          <div className="flex sm:flex-col justify-between md:justify-start items-center md:items-start gap-5">
            <Img src="images/img_asset_2_1.png" alt="asset2one_one" className="w-[14%] sm:w-1/3 object-cover" />
            <div className="flex md:hidden">
              <div className="flex gap-5">
                <Text size="md" as="p" className="self-start !text-gray-900 text-right md:text-left">
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
                    <a href="aboutus" className="opacity-0.6">
                      <Text size="md" as="p">
                        About us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="contactus" rel="noreferrer" className="opacity-0.6">
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
                    <a href="blackedition" className="opacity-0.6">
                      <Text size="md" as="p">
                        Black Edition
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="mattress" rel="noreferrer" className="opacity-0.6">
                      <Text size="md" as="p">
                        Mattress
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="pillows" rel="noreferrer" className="opacity-0.6">
                      <Text size="md" as="p">
                        Pillow
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="cushioning" className="opacity-0.6">
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
  );
}
