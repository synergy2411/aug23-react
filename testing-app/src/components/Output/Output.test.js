import { act, render, screen } from "@testing-library/react";
import Output from "./Output";
import userEvent from "@testing-library/user-event";

describe("Output Component", () => {
  test("renders the heading element", () => {
    render(<Output />);

    const headingEl = screen.getByText(/The OUtput Component/, {
      exact: false,
    });

    expect(headingEl).toBeInTheDocument();
  });

  test("renders the paragraph element", () => {
    render(<Output />);

    const paragraphEl = screen.getByText(
      /This component will output something/,
      {
        exact: false,
      }
    );

    expect(paragraphEl).toBeInTheDocument();
  });

  test("renders 'Toggle is false' initially", () => {
    render(<Output />);

    const pElement = screen.getByText(/toggle is false/i);

    expect(pElement).toBeInTheDocument();
  });

  test("not renders 'Toggle is true' initially", () => {
    render(<Output />);

    const pElement = screen.queryByText(/toggle is true/i);

    expect(pElement).not.toBeInTheDocument();
  });

  test("renders 'Toggle is true' when button is clicked", () => {
    render(<Output />);

    const btnElement = screen.getByRole("button");

    act(() => {
      userEvent.click(btnElement);
    });

    const pElement = screen.getByText(/toggle is true/i);

    expect(pElement).toBeInTheDocument();
  });

  test("not renders 'Toggle is false' when the button is clicked", () => {
    render(<Output />);

    const btnElement = screen.getByRole("button");

    act(() => {
      userEvent.click(btnElement);
    });

    const pElement = screen.queryByText(/toggle is false/i);

    expect(pElement).toBeNull();
  });
});
