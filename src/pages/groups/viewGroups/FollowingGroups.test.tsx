import { render, screen } from "@testing-library/react";
import FollowingGroups from "./FollowingGroups";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../Store/Index";

describe("test ButtonGroup", () => {

    // Mock data for the group array
  const groupData = [
    {
      groupIcon: ['url1', 'url2'],
      groupName: 'Group 1',
      description: 'Group 1 description',
    },
  ]

  test("check element rendering", () => {
    render(<BrowserRouter><Provider store={store}><FollowingGroups groupsFollow={groupData} /></Provider></BrowserRouter>);

     //check that the create a group button is present
     const followButton = screen.getByRole("button", {
        name: "Leave"
     });
     expect(followButton).toBeInTheDocument();

     //check that the discover groups button is present
     const discoverGroupsBtnElement = screen.getByText("Discover Groups");
     expect(discoverGroupsBtnElement).toBeInTheDocument();
  });
});
