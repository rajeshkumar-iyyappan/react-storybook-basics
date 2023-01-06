// import { customStyle } from "./decorators"

// import { globalDecorators } from "./decorators"

import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // optional
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: DEFAULT_VIEWPORT,
  },
}

// export const decorators = globalDecorators
