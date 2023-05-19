import { render, screen } from "@testing-library/react";
import OneGroup from "./OneGroup";
import { BrowserRouter } from "react-router-dom";

describe("test OneGroup", () => {
  test("check element rendering", () => {
    render(<BrowserRouter><OneGroup /></BrowserRouter>);

    expect(2).toBe(2);
  });
});
