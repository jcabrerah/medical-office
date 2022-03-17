import React, {Component} from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage'
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect"

describe("Render Login", () =>{
  it("should render user input field", ()=>{
    render(<LoginPage />);
    
    const userInputElement = screen.getAllByPlaceholderText("user or email");
    
    expect(userInputElement.length).toEqual(1);
  })

  it("should render password input field", ()=>{
    render(<LoginPage />);
    
    const pwdInputElement = screen.getAllByPlaceholderText("password");
    
    expect(pwdInputElement.length).toEqual(1);
  })

  it("should render login button", ()=>{
    render(<LoginPage />);

    const loginButton = screen.getAllByText("Login")
    
    expect(loginButton.length).toEqual(1);
  })

  it("should login button disable when click", ()=>{
    // render(<LoginPage />);
  
    // const loginButton = screen.getByText("Login")

    const { getByTestId } = render(<LoginPage />);

    const loginButton = getByTestId("login-button");
    
    userEvent.click(loginButton);
    expect(loginButton).toHaveClass("Mui-disabled");
    // expect(loginButton).toBeDisabled();
  })
 
})