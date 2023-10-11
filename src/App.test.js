import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText(/choose date:/i);
  expect(headingElementNew).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
  const testTime = [];
  userEvent.selectOptions(
    screen.getByText(/Choose Time:/i),
    screen.getByRole("option", { name: testTime })
  );
  expect(screen.getByRole("option", { name: testTime }).selected).toBe(true);
});
