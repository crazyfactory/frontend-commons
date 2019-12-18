import {stylesheet} from "typestyle";
import {buildBreakpoints} from "../helpers/buildBreakpoints";
import {Breakpoints} from "./Breakpoints";
import {Color} from "./Color";
import {FontSize} from "./FontSize";
import {FontWeight} from "./FontWeight";
import {MAX_WIDTH} from "./MaxWidth";
import {ZIndex} from "./ZIndex";

export const CommonCss = stylesheet({
  actionButton: {
    background: "transparent",
    border: 0,
    padding: 0
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  bgColorBlack: {
    backgroundColor: Color.BLACK
  },
  bgColorBlue: {
    backgroundColor: Color.BLUE
  },
  bgColorCoral: {
    backgroundColor: Color.CORAL
  },
  bgColorDarkGrey: {
    backgroundColor: Color.DARK_GREY
  },
  bgColorGreen: {
    backgroundColor: Color.GREEN
  },
  bgColorGrey: {
    backgroundColor: Color.GREY
  },
  bgColorLightBlue: {
    backgroundColor: Color.LIGHT_BLUE
  },
  bgColorRed: {
    backgroundColor: Color.RED
  },
  bgColorVeryLightGrey: {
    backgroundColor: Color.VERY_LIGHT_GREY
  },
  bgColorWhite: {
    backgroundColor: Color.WHITE
  },
  block: {
    display: "block"
  },
  borderGrey: {
    border: `1px solid ${Color.GREY}`
  },
  button: {
    width: "100%",
    ...buildBreakpoints([
      {
        minScreenWidth: Breakpoints.MD,
        width: "auto"
      }
    ])
  },
  buttonSecondary: {
    marginLeft: 0,
    marginTop: "1em",
    ...buildBreakpoints([
      {
        marginLeft: "1em",
        marginTop: "0",
        minScreenWidth: Breakpoints.MD
      }
    ])
  },
  buttonsContainer: {
    ...buildBreakpoints([
      {
        minScreenWidth: Breakpoints.MD,
        textAlign: "right"
      }
    ])
  },
  capitalize: {
    textTransform: "capitalize"
  },
  centralizeChildren: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  colorBlack: {
    color: Color.BLACK
  },
  colorBlue: {
    color: Color.BLUE
  },
  colorCoral: {
    color: Color.CORAL
  },
  colorDarkGrey: {
    color: Color.DARK_GREY
  },
  colorGreen: {
    color: Color.GREEN
  },
  colorGrey: {
    color: Color.GREY
  },
  colorLightBlue: {
    color: Color.LIGHT_BLUE
  },
  colorRed: {
    color: Color.RED
  },
  colorVeryLightGrey: {
    color: Color.VERY_LIGHT_GREY
  },
  colorWhite: {
    color: Color.WHITE
  },
  fit2: {
    minWidth: "50%"
  },
  fit3: {
    minWidth: "33%"
  },
  fit4: {
    minWidth: "25%"
  },
  fit5: {
    minWidth: "20%"
  },
  fit6: {
    minWidth: "16%"
  },
  flex: {
    display: "flex"
  },
  flexColumn: {
    flexDirection: "column"
  },
  flexDirectionResponsive: {
    flexDirection: "column",
    ...buildBreakpoints([
      {
        flexDirection: "row",
        minScreenWidth: Breakpoints.MD
      }
    ])
  },
  flexWrap: {
    flexWrap: "wrap"
  },
  fontExtraHugh: {
    fontSize: FontSize.EXTRA_HUGH
  },
  fontHuge: {
    fontSize: FontSize.HUGH
  },
  fontLarge: {
    fontSize: FontSize.LARGE
  },
  fontLarger: {
    fontSize: FontSize.LARGER
  },
  fontMedium: {
    fontSize: FontSize.MEDIUM
  },
  fontSmall: {
    fontSize: FontSize.SMALL
  },
  fontStyleItalic: {
    fontStyle: "italic"
  },
  fontWeightBold: {
    fontWeight: FontWeight.BOLD
  },
  fontWeightLight: {
    fontWeight: FontWeight.LIGHT
  },
  fontWeightRegular: {
    fontWeight: FontWeight.REGULAR
  },
  fullHeight: {
    height: "100%"
  },
  fullWidth: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  hide: {display: "none !important"},
  hideFromLG: {
    ...buildBreakpoints([
      {
        display: "none !important",
        minScreenWidth: Breakpoints.LG
      }
    ])
  },
  hideFromMD: {
    ...buildBreakpoints([
      {
        display: "none !important",
        minScreenWidth: Breakpoints.MD
      }
    ])
  },
  hideFromSM: {
    ...buildBreakpoints([
      {
        display: "none !important",
        minScreenWidth: Breakpoints.SM
      }
    ])
  },
  hideTillLGBlock: {
    display: "none !important",
    ...buildBreakpoints([
      {
        display: "block !important",
        minScreenWidth: Breakpoints.LG
      }
    ])
  },
  hideTillLGFlex: {
    display: "none !important",
    ...buildBreakpoints([
      {
        display: "flex !important",
        minScreenWidth: Breakpoints.LG
      }
    ])
  },
  hideTillLGInline: {
    display: "none !important",
    ...buildBreakpoints([
      {
        display: "inline !important",
        minScreenWidth: Breakpoints.LG
      }
    ])
  },
  hideTillMDBlock: {
    display: "none !important",
    ...buildBreakpoints([
      {
        display: "block !important",
        minScreenWidth: Breakpoints.MD
      }
    ])
  },
  hideTillMDFlex: {
    display: "none !important",
    ...buildBreakpoints([
      {
        display: "flex !important",
        minScreenWidth: Breakpoints.MD
      }
    ])
  },
  hideTillSMBlock: {
    display: "none !important",
    ...buildBreakpoints([
      {
        display: "block !important",
        minScreenWidth: Breakpoints.SM
      }
    ])
  },
  hideTillSMFlex: {
    display: "none !important",
    ...buildBreakpoints([
      {
        display: "flex !important",
        minScreenWidth: Breakpoints.SM
      }
    ])
  },
  inline: {
    display: "inline"
  },
  inlineBlock: {
    display: "inline-block"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  lowercase: {
    textTransform: "lowercase"
  },
  moveLeft1: {
    marginRight: "0.5em"
  },
  moveLeft2: {
    marginRight: "1em"
  },
  moveLeft3: {
    marginRight: "1.5em"
  },
  moveLeft4: {
    marginRight: "2em"
  },
  moveLeft5: {
    marginRight: "3em"
  },
  moveRight1: {
    marginLeft: "0.5em"
  },
  moveRight2: {
    marginLeft: "1em"
  },
  moveRight3: {
    marginLeft: "1.5em"
  },
  moveRight4: {
    marginLeft: "2em"
  },
  moveRight5: {
    marginLeft: "3em"
  },
  opaque: {
    opacity: 1,
    visibility: "visible"
  },
  overflowHidden: {
    overflow: "hidden"
  },
  padding: {
    padding: "15px"
  },
  pageContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: MAX_WIDTH
  },
  pointer: {
    cursor: "pointer"
  },
  positionAbsolute: {
    position: "absolute"
  },
  positionRelative: {
    position: "relative"
  },
  pullDown1: {
    marginTop: "0.5em"
  },
  pullDown2: {
    marginTop: "1em"
  },
  pullDown3: {
    marginTop: "1.5em"
  },
  pullDown4: {
    marginTop: "2em"
  },
  pullDown5: {
    marginTop: "3em"
  },
  resetMargin: {
    margin: 0
  },
  resetMarginBottom: {
    marginBottom: 0
  },
  resetMarginTop: {
    marginTop: 0
  },
  resetPadding: {
    padding: 0
  },
  resetTextDecoration: {
    textDecoration: "none"
  },
  section1: {
    borderTop: `1px solid ${Color.GREY}`,
    marginTop: "1em",
    paddingTop: "1em"
  },
  section2: {
    borderTop: `1px solid ${Color.GREY}`,
    marginTop: "2em",
    paddingTop: "2em"
  },
  selfCentered: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  selfVerticallyCentered: {
    alignSelf: "center"
  },
  sidePadding: {
    paddingLeft: "15px",
    paddingRight: "15px"
  },
  sidePaddingTillLG: {
    paddingLeft: "15px",
    paddingRight: "15px",
    ...buildBreakpoints([
      {
        minScreenWidth: Breakpoints.LG,
        paddingLeft: 0,
        paddingRight: 0
      }
    ])
  },
  spaceBetween: {
    justifyContent: "space-between"
  },
  textAlignCenter: {
    textAlign: "center"
  },
  textAlignLeft: {
    textAlign: "left"
  },
  textAlignRight: {
    textAlign: "right"
  },
  transitionOpacity: {
    transition: "opacity 0.2s"
  },
  transparent: {
    opacity: 0,
    visibility: "hidden"
  },
  unchangedLink: {
    $nest: {
      "&:active": {
        color: Color.BLACK
      },
      "&:visited": {
        color: Color.BLACK
      }
    }
  },
  underline: {
    textDecoration: "underline"
  },
  uppercase: {
    textTransform: "uppercase"
  },
  verticalMiddle: {
    verticalAlign: "middle"
  },
  visibilityHidden: {
    visibility: "hidden"
  },
  zIndexFive: {
    zIndex: ZIndex.LEVEL_FIVE
  },
  zIndexFour: {
    zIndex: ZIndex.LEVEL_FOUR
  },
  zIndexOne: {
    zIndex: ZIndex.LEVEL_ONE
  },
  zIndexThree: {
    zIndex: ZIndex.LEVEL_THREE
  },
  zIndexTwo: {
    zIndex: ZIndex.LEVEL_TWO
  }
});
