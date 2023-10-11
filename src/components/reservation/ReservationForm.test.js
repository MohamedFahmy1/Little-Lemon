import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReservationForm from "./ReservationForm";

describe("ReservationForm", () => {
  it("renders the form with the required fields", () => {
    render(<ReservationForm />);

    expect(screen.getByLabelText("Full Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Email*")).toBeInTheDocument();
    expect(screen.getByLabelText("Cell Phone (optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Date & Time")).toBeInTheDocument();
  });

  it("submits the form with valid data", () => {
    render(<ReservationForm />);
    fireEvent.change(screen.getByLabelText("Full Name*"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Cell Phone (optional)"), {
      target: { value: "123 123 1234" },
    });
    fireEvent.change(screen.getByLabelText("Guests"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Date & Time"), {
      target: { value: "2023-12-31T12:00" },
    });

    fireEvent.click(screen.getByText("Reserve"));
  });

  it("displays error messages for invalid input", async () => {
    render(<ReservationForm />);

    // Submit the form without entering any data
    fireEvent.click(screen.getByText("Reserve"));

    // Use separate await statements for each assertion
    await waitFor(() => {
      expect(
        screen.getByText(/Full name is a required field/i)
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText(/Email is a required field/i)
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.queryByText(/Telephone is a required field/i)
      ).not.toBeInTheDocument();
    });
  });
});
