import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[12px]",
};
const variants = {
  outline: {
    deep_orange_300_deep_orange_400_01:
      "border border-solid border-deep_orange-300 text-blue_gray-800",
  },
  fill: {
    deep_orange_300: "bg-deep_orange-300 text-blue_gray-800",
  },
};
const sizes = {
  md: "h-[132px] px-[50px]",
  lg: "h-[147px] px-14",
  xs: "h-[48px] px-[30px] text-base",
  sm: "h-[54px] px-[30px] text-xl",
};
const fontSizes = {
  xl: "text-xl",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "deep_orange_300",
  fontSize = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(fontSize && fontSizes[fontSize])||""} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "lg", "xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["deep_orange_300_deep_orange_400_01", "deep_orange_300"]),
  fontSize: PropTypes.oneOf(["xl"])
};

export { Button };
