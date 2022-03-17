import React, {Component} from "react";
import { cleanup, render, screen, wait, waitFor } from '@testing-library/react';
import HomePage from '../HomePage'
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

afterEach(cleanup);

describe("LoginPage screen", () => {
  beforeEach(() => {
     });

  it("should be redirect to login if user is not authenticated ", async () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <HomePage/>
     </Router>
    );
    const signInButton = getByTestId("signIn-button");
    
    userEvent.click(signInButton)

    expect(history.location.pathname).toEqual("/login");
    // await waitFor(() => {
    //   expect(history.location.pathname).toEqual("/login");
    // })
  });
});


describe("Render Login", () =>{
  it("should render login button", ()=>{
    render(<MemoryRouter><HomePage /></MemoryRouter>)

    const signInButton = screen.getAllByText("SignIn")

    expect(signInButton.length).toEqual(1);
  })
})