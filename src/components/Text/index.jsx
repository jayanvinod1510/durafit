import React from "react";

const sizes = {
  "5xl": "text-[42px] font-normal md:text-[38px] sm:text-[32px]",
  xs: "text-xs font-normal",
  lg: "text-base font-normal",
  "6xl": "text-5xl font-light md:text-[44px] sm:text-[38px]",
  "7xl": "text-[64px] font-light md:text-5xl",
  s: "text-[13px] font-normal",
  "2xl": "text-xl font-medium",
  "3xl": "text-[32px] font-light md:text-3xl sm:text-[28px]",
  "4xl": "text-[35px] font-normal md:text-[35px] sm:text-[16px]",
  xl: "text-lg font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_90 md:w-full font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
