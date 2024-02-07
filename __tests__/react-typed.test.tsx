import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactTyped } from "../src";

describe("<Typed />", () => {
  it("Renders correct", async () => {
    const textToType = "Here you can find anything";
    render(<ReactTyped strings={[textToType]} />);
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(screen.getByText(textToType)).toBeTruthy();
  });
  it("Renders correct with children", async () => {
    const textToType = "Search for products";
    render(
      <ReactTyped strings={[textToType]} attr="placeholder" loop>
        <input data-testid="typed-input" type="text" />
      </ReactTyped>
    );
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(
      screen.getByTestId("typed-input").getAttribute("placeholder")
    ).toEqual(textToType);
  });
  it("Expect to update if props were change", () => {
    const typedInstance = jest.fn();

    const { rerender } = render(
      <ReactTyped strings={["test1", "test2"]} typedRef={typedInstance} />
    );

    rerender(
      <ReactTyped strings={["test1", "test3"]} typedRef={typedInstance} />
    );
    expect(typedInstance).toBeCalledTimes(2);
  });
  it("Expect to return the typed object using typedRef prop", () => {
    const props = {
      loop: true,
      stopped: true,
      strings: ["test1", "test2"],
      fadeOut: false,
    };
    let typedInstance;
    render(
      <ReactTyped
        {...props}
        typedRef={(typed) => {
          typedInstance = typed;
        }}
      />
    );
    expect(typedInstance).not.toBeFalsy();
  });
});
