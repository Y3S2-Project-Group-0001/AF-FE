import { render, screen } from "@testing-library/react";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";

describe("test Body.jsx", () => {
  const groups = ["test1", "test2", "test3"];

  // Mock props
  const props = {
    groupName: "Test Group",
    id: "1",
  };

  test("check element rendering", () => {
    // const { getByText } = render(
    //   <BrowserRouter>
    //     <Body groupData={groups} />
    //   </BrowserRouter>
    // );

    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    //check that the post heading is present
    const PostElement = screen.getByText("Posts");
    expect(PostElement).toBeInTheDocument();

    //check that the question heading is present
    const QuestionElement = screen.getByText("Questions");
    expect(QuestionElement).toBeInTheDocument();

    // // Assert that the prop values are rendered correctly
    // const groupPostsElement = getByText(`${props.groupName}`);
    // expect(groupPostsElement).toBeInTheDocument();
  });
});
