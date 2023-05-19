import { render, screen } from "@testing-library/react";
import ButtonGroup from "./ButtonGroup";
import { BrowserRouter } from "react-router-dom";

describe("test ButtonGroup", () => {
  test("check element rendering", () => {
    render(<BrowserRouter><ButtonGroup /></BrowserRouter>);

     //check that the create a group button is present
     const createGroupBtnElement = screen.getByText("Create a Group");
     expect(createGroupBtnElement).toBeInTheDocument();

     //check that the discover groups button is present
     const discoverGroupsBtnElement = screen.getByText("Discover Groups");
     expect(discoverGroupsBtnElement).toBeInTheDocument();
  });
});
