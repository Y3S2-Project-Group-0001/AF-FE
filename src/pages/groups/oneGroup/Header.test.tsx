import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("test Header", () => {

  // Mock data for the group array
  const groupData = [
    {
      groupIcon: ['url1', 'url2'],
      groupName: 'Group 1',
      description: 'Group 1 description',
    },
  ]

  //The button is displaying as Follow at fist time when rendering the page
  test("check follow buttton rendering", () => {
    render(<BrowserRouter><Header group={groupData} /></BrowserRouter>);

    const followButton = screen.getByRole("button", {
      name: "Follow",
    });
    expect(followButton).toBeInTheDocument();
  });

  //The button is not displaying as Following at fist time when rendering the page
  test("check following button not rendering", () => {
    render(<BrowserRouter><Header group={groupData} /></BrowserRouter>);

    const followingButton = screen.queryByRole("button", {
      name: "Following",
    });
    expect(followingButton).not.toBeInTheDocument();
  }); 
});
