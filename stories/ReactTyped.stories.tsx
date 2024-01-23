import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "antd";
import { ReactTyped as TypedReact, Typed, ReactTypedProps } from "../src/index";

const ReactTyped: React.FC<ReactTypedProps> = (props) => {
  const [typedInstance, setTypedInstance] = React.useState<Typed>();
  return (
    <div>
      <TypedReact {...props} typedRef={props.typedRef || setTypedInstance} />
      {(!props.typedRef && (
        <div>
          <br />
          <button onClick={() => typedInstance?.reset()}>Reset</button>
          <button onClick={() => typedInstance?.start()}>Start</button>
          <button onClick={() => typedInstance?.stop()}>Stop</button>
          <button onClick={() => typedInstance?.toggle()}>Toggle</button>
          <button onClick={() => typedInstance?.destroy()}>Destroy</button>
        </div>
      )) ||
        null}
    </div>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "React Typed",
  component: TypedReact,
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    strings: [
      'welcome to <a href="https://github.com/mattboldt/typed.js/">react-typed</a>',
      'This is a react component that wraps up the <a href="https://github.com/mattboldt/typed.js/">typed.js</a>',
      'If you like the project add a star in <a href="https://github.com/mattboldt/typed.js/">typed.js</a> and <a href="https://github.com/mattboldt/typed.js/">react-typed</a>',
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
} satisfies Meta<typeof TypedReact>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BasicUsage: Story = {
  render: (props) => <ReactTyped {...props} />,
};

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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Stopped: Story = {
  render: (props) => {
    const [typedInstance, setTypedInstance] = React.useState<Typed>();
    return (
      <div>
        <ReactTyped
          {...props}
          typedRef={setTypedInstance}
          stopped
          strings={[
            "Search by name",
            "Search by type",
            "Search by description",
          ]}
        />
        <div>
          <br />
          <button onClick={() => typedInstance?.reset()}>Reset</button>
          <button onClick={() => typedInstance?.start()}>Start</button>
          <button onClick={() => typedInstance?.stop()}>Stop</button>
          <button onClick={() => typedInstance?.toggle()}>Toggle</button>
          <button onClick={() => typedInstance?.destroy()}>Destroy</button>
        </div>
      </div>
    );
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
  render: (props) => (
    <>
      Scroll Down
      <div style={{ height: 1000 }} />
      <TypedReact
        {...props}
        startWhenVisible
        loop={false}
        strings={[
          "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
        ]}
      />
      <div style={{ height: 300 }} />
    </>
  ),
};
