import { render, screen } from "@testing-library/react";
import ViewGroups from "./ViewGroups";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../Store/Index";

describe("test View Groups", () => {
    
  test("check element rendering", () => {

    render(<BrowserRouter><Provider store={store}><ViewGroups /></Provider></BrowserRouter>);

     //check that the create a group button is present
     const headingElement1 = screen.getByRole("heading");
     expect(headingElement1).toBeInTheDocument();
  });
});
