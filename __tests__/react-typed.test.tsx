import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactTyped } from "../src";

describe("<Typed />", () => {
  it("Renders correct", () => {
    render(
      <ReactTyped strings={["Here you can find anything"]} typeSpeed={40} />
    );
    expect(screen.getByTestId("react-typed")).toBeTruthy();
  });
  it("Renders correct with children", () => {
    render(
      <ReactTyped
        strings={[
          "Search for products",
          "Search for categories",
          "Search for brands",
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input data-testid="typed-input" type="text" />
      </ReactTyped>
    );
    expect(screen.getByTestId("react-typed")).toBeTruthy();
    expect(screen.getByTestId("typed-input")).toBeTruthy();
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
