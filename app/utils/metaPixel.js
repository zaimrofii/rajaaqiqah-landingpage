// utils/metaPixel.js
export const fbq = (name, options = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options);
  } else {
    console.warn("fbq not found");
  }
};
