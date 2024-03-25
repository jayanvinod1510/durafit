import React from "react";

const sizes = {
  s: "text-5xl font-semibold md:text-[44px] sm:text-[38px]",
  md: "text-[200px] font-semibold md:text-5xl",
  xs: "text-xl font-semibold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-400 font-archivo ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
