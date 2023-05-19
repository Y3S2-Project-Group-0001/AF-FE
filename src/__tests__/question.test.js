import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import AddQuestionModal from "../pages/questions/questionModals/addQuestion";
import DeleteQuestionModal from '../pages/questions/questionModals/deleteQuesModal';
import FeedQuestions from '../pages/questions/feedQuestions';
import Questions from '../pages/questions/userQuestions';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

describe("test Add question", ()=> {
    test('Should render the Add question model', () => {
        render(<AddQuestionModal />);
        
        const AddAnswerModalElement = screen.getByTestId('test-1');
        expect(AddAnswerModalElement).toBeInTheDocument();
        
        //check if textarea is rendered correctly
        const textBox = screen.getByRole("textarea", {
            name: 'Add-Question',
        })
        expect(textBox).toBeInTheDocument()

        //checks if button is rendered correctly
        const button = screen.getByRole("button", {
            name: 'suc-but',
        })
        expect(button).toBeInTheDocument()
    });
})

describe("delete question modal", ()=> {
    test('Should render the delete question model', () => {
        render(<DeleteQuestionModal />);;

        //checks if button is rendered correctly
        const button = screen.getByRole("button", {
            name: 'cancelBut',
        })
        expect(button).toBeInTheDocument()

        const button2 = screen.getByRole("button", {
            name: 'deleteBut',
        })
        expect(button2).toBeInTheDocument()
    });
})

describe("test feed questions", ()=> {
    test('Should render the delete question model', () => {
        render(<FeedQuestions />);;

        const search = screen.getByRole("input", {
            name: 'feedSearch',
        })
        expect(search).toBeInTheDocument()

    });
})

describe("test Add question", ()=> {
    test('Should render the Add question model', () => {
        render(<AddQuestionModal />);
        
        const AddAnswerModalElement = screen.getByTestId('test-1');
        expect(AddAnswerModalElement).toBeInTheDocument();
        
        //check if textarea is rendered correctly
        const textBox = screen.getByRole("textarea", {
            name: 'Add-Question',
        })
        expect(textBox).toBeInTheDocument()

        //checks if button is rendered correctly
        const button = screen.getByRole("button", {
            name: 'suc-but',
        })
        expect(button).toBeInTheDocument()
    });
})

describe("delete question modal", ()=> {
    test('Should render the delete question model', () => {
        render(<DeleteQuestionModal />);;

        //checks if button is rendered correctly
        const button = screen.getByRole("button", {
            name: 'cancelBut',
        })
        expect(button).toBeInTheDocument()

        const button2 = screen.getByRole("button", {
            name: 'deleteBut',
        })
        expect(button2).toBeInTheDocument()
    });
})




