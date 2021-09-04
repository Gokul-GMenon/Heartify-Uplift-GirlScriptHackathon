import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgComponent() {
  const svgMarkup = `<svg width="100%" height="553" viewBox="0 0 1187 653" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0H1187V565.66C723.451 677.38 463.549 686.752 0 565.66V0Z" fill="#0081F7"/>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;

  return <SvgImage />;
}
