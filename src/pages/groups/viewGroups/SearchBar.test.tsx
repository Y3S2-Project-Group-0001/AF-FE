import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { BrowserRouter } from "react-router-dom";

describe("test Search Bar", () => {
  test("check element rendering", () => {
    render(<SearchBar />);

     //check that the create a group button is present
     const searchBtnElement = screen.getByRole("button");
     expect(searchBtnElement).toBeInTheDocument();
  });
});
