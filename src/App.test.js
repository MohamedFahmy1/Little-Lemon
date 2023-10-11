import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@testing-library/jest-dom";

test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole("button", {
    name: /reserve a table/i,
  });
  expect(headingElement).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reserveButton = screen.getByRole("button", {
    name: /reserve a table/i,
  });
  fireEvent.click(reserveButton);
});
