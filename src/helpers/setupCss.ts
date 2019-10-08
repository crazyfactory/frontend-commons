import {cssRaw} from "typestyle";
import {Color, FontWeight} from "..";
import {FontSize} from "../constants/FontSize";

export function setupCss(ssr: boolean = true, fontFamily: string = "Roboto"): void {
  if (!ssr) {
    const style: HTMLLinkElement = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = `https://fonts.googleapis.com/css?family=${fontFamily}:300,400,400i,700&display=swap`;
    document.getElementsByTagName("head")[0].appendChild(style);
  }

  cssRaw(`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${Color.VERY_LIGHT_GREY};
    font-family: ${fontFamily};
    font-size: 15px;
    height: auto;
    margin: 0;
    padding-bottom: 30px;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  img {
    image-rendering: -webkit-optimize-contrast;
  }

  h1 {
    color: ${Color.DARK_GREY};
    font-size: ${FontSize.HUGH};
    font-weight: ${FontWeight.BOLD};
  }
  h2 {
    color: ${Color.DARK_GREY};
    font-size: ${FontSize.LARGER};
    font-weight: ${FontWeight.BOLD};
  }
  h3 {
    color: ${Color.DARK_GREY};
    font-size: ${FontSize.LARGE};
    font-weight: ${FontWeight.BOLD};
  }

  a {
    color: ${Color.BLACK};
  }

  a:active, a:visited {
    color: ${Color.BLUE};
  }

  :focus {
    outline-color: ${Color.BLUE};
  }

  input, textarea, select, button {
    font-family: ${fontFamily};
    font-size: ${FontSize.MEDIUM};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`);
}
