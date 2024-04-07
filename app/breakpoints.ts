interface Size {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: Size = {
  sm: "400px", // for small screen mobile
  md: "600px", // for mobile screen
  lg: "900px", // for tablets
  xl: "1280px", // for laptops
  xxl: "1440px", // for desktop / monitors
};

export const device = {
  sm: `(min-width: ${size.sm})`, // Från 400px och uppåt
  md: `(min-width: ${size.md})`, // Från 600px och uppåt
  lg: `(min-width: ${size.lg})`, // Från 900px och uppåt
  xl: `(min-width: ${size.xl})`, // Från 1280px och uppåt
  xxl: `(min-width: ${size.xxl})`, // Från 1440px och uppåt
};
