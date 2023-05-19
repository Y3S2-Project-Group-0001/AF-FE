import { render, screen } from "@testing-library/react";
import ViewMyGroups from "./ViewMyGroups";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../Store/Index";

describe("test View Groups", () => {
  test("check element rendering", () => {
    render(<BrowserRouter><Provider store={store}><ViewMyGroups /></Provider></BrowserRouter>);

     
     //check that the create a group button is present
     const headingElement2 = screen.getByRole("heading");
     expect(headingElement2).toBeInTheDocument();
  });
});
