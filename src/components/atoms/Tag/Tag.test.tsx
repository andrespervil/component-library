// Generated with util/create-component.js
import React from "react";
import { render, screen } from "@testing-library/react";

import Tag from "./Tag";
import { TagProps } from "./Tag.types";

describe("Test Component", () => {
  const setup = (props) => {
    render(<Tag {...props} />);
  }

  it("should render foo text correctly", () => {
    setup({ foo: "text prop is this one" })

    expect(screen.getByText(/text prop is this one/i)).toBeInTheDocument();
  });
});
