import { Button, Img, Text } from "components";
import { Animated } from "react-animated-css";
import React from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion"


const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 100 },
    exiting: { y: 1000, opacity: 0 },
    size: {}
};

const ItemCard = ({ imgClassName, data, isHovered, ...restProps }) => {
    return <div className="w-full bg-white-A700 shadow-sm rounded-[5px] h-[465px]">
        <MotionConfig transition={{ duration: 0.2 }}>
            <AnimatePresence>
                {/* <motion.div whileHover={{ scale: 0.96 }}> */}
                <motion.img
                    style={{y:2}}
                    variants={variants}
                    initial={{ opacity: 0, scale: 1}}
                    animate={{ opacity: 1, scale: 0.96 }}
                    exit={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={imgClassName} src={"images/" + data.images[0]} alt={""} loading={"lazy"} />
                {/* </motion.div> */}
            </AnimatePresence>

        </MotionConfig>
        <div className="px-6 pb-5">
            <div className="py-4 cursor-pointer">
                <Text
                    size="xl"
                    as="p"
                    className="w-full !text-blue_gray-800 text-center"
                >
                    <>
                        {data.headerTitle}
                    </>
                </Text>
                <Text
                    size="xs"
                    as="p"
                    className="md:w-full text-center"
                >
                    <>
                        {data.shortDescriptionLine1}
                    </>
                </Text>
                <Text
                    size="xs"
                    as="p"
                    className="md:w-full text-center"
                >
                    <>
                        {data.shortDescriptionLine2}
                    </>
                </Text>

            </div>
            <Button fontSize="xl" shape="round" className="sm:px-5 font-inter font-medium min-w-full self-center ">
                View Details
            </Button>
        </div>
    </div>
};
export { ItemCard };
