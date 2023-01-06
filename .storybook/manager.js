import { addons } from "@storybook/addons"
import { create } from "@storybook/theming"

const theme = create({
  base: "light",

  // UI
  appBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"dank mono", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors

  barSelectedColor: "black",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandImage:
    "https://seekvectorlogo.com/wp-content/uploads/2018/02/comcast-vector-logo.png",
  brandTitle: "bve-voicemail",
})

addons.setConfig({
  theme,
})
