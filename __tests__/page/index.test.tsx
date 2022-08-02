/**
 * @jest-environment jsdom
 */

import Home from "@pages/index";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("render", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
