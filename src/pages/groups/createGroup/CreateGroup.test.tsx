import {render, screen} from '@testing-library/react';
import CreateGroup from './CreateGroup';
import { BrowserRouter } from 'react-router-dom';
//const {render} = require('@testing-library/react');

describe ("test CreateGroup", () => {
    test("check element rendering", () => {
        render(
            <BrowserRouter><CreateGroup/></BrowserRouter>
        );

        //check that the heading is present
        const headingElement = screen.getByText("Create a Group")
        expect(headingElement).toBeInTheDocument();

        //check that the Group Name input is present
        const groupNameElement = screen.getByRole("textbox", {
            name: "Group Name",
        });
        expect(groupNameElement).toBeInTheDocument();

        //check that the Group Description input is present
        const descriptionElement = screen.getByRole("textbox", {
            name: "Group Description",
        });
        expect(descriptionElement).toBeInTheDocument();

        //check that the Group Category input is present
        const groupTypeElement = screen.getByRole("combobox");
        expect(groupTypeElement).toBeInTheDocument();

        //check that the Submit button is present
        const SubmitButtonElement = screen.getByRole("button");
        expect(SubmitButtonElement).toBeInTheDocument();
    })
})
