import React from "react"

import { Button } from "./Button"

export default {
  title: "Components/Atomic/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    label: "Save",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}

export const Secondary = Template.bind({})

export const Large = Template.bind({})
Large.args = {
  size: "large",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
}

export const Red = Template.bind({})
Red.args = {
  size: "large",
  label: "Hello World",
  backgroundColor: "red",
}
Red.argTypes = {
  backgroundColor: {
    control: "inline-radio",
    options: ["red", "green", "blue"],
  },
}
