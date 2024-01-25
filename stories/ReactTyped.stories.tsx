import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "antd";
import { ReactTyped } from "../src/index";
import { Story } from "@storybook/blocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "React Typed",
  component: ReactTyped,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    strings: [
      'welcome to <a href="https://github.com/ssbeefeater/react-typed">react-typed</a>',
      'This is a react component that wraps up the <a href="https://github.com/mattboldt/typed.js/">typed.js</a>',
      'If you like the project add a star in <a href="https://github.com/mattboldt/typed.js/">typed.js</a> and <a href="https://github.com/ssbeefeater/react-typed">react-typed</a>',
    ],
    typeSpeed: 50,
    backSpeed: 50,
  },
  argTypes: {
    strings: { control: false },
    className: {
      control: false,
    },
    typedRef: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story, { args }) => {
      const [typedInstance, setTypedInstance] = React.useState<any>();
      return (
        <div>
          {Story({ args: { typedRef: setTypedInstance, ...args } })}
          {(
            <div>
              <br />
              <button onClick={() => typedInstance?.reset()}>Reset</button>
              <button onClick={() => typedInstance?.start()}>Start</button>
              <button onClick={() => typedInstance?.stop()}>Stop</button>
              <button onClick={() => typedInstance?.toggle()}>Toggle</button>
              <button onClick={() => typedInstance?.destroy()}>Destroy</button>
            </div>
          ) || null}
        </div>
      );
    },
  ],
} satisfies Meta<typeof ReactTyped>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {};

export const WithInput: Story = {
  render: (props) => (
    <ReactTyped
      {...props}
      strings={["Search by name", "Search by type", "Search by description"]}
    >
      <input type="text" style={{ width: 300 }} />
    </ReactTyped>
  ),
};

export const InputPlaceholder: Story = {
  render: (props) => (
    <ReactTyped
      {...props}
      attr="placeholder"
      loop={false}
      strings={["Add a name here"]}
    >
      <input type="text" style={{ width: 300 }} />
    </ReactTyped>
  ),
};

export const Stopped: Story = {
  args: {
    stopped: true,
  },
};

export const CustomComponent: Story = {
  render: (props) => (
    <ReactTyped
      {...props}
      attr="placeholder"
      loop={false}
      strings={["Add a name here"]}
      parseRef={(ref) => ref.current.input}
    >
      <Input type="text" style={{ width: 300 }} />
    </ReactTyped>
  ),
};

export const StartWhenVisible: Story = {
  args: {
    startWhenVisible: true,
    loop: false,
    strings: [
      "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
    ],
  },
  decorators: [
    (Story) => (
      <div>
        Scroll Down
        <div style={{ height: 1000 }} />
        {Story()} <div style={{ height: 300 }} />
      </div>
    ),
  ],
};
