// Generated with util/create-component.js
import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  const setup = (props) => {
    render(<Button {...props} />);
  }

  it("should render foo text correctly", () => {
    setup({ foo: "text prop is this one" })

    expect(screen.getByText(/text prop is this one/i)).toBeInTheDocument();
  });
});
