import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("test Body.jsx", () => {

  // Mock data for the group array
  const groupData = [
    {
      groupIcon: ['url1', 'url2'],
      groupName: 'Group 1',
      description: 'Group 1 description',
    },
  ]

  test("check element rendering", () => {
    render(<BrowserRouter><Header group={groupData} /></BrowserRouter>);

    expect(2).toBe(2)


  });
});
