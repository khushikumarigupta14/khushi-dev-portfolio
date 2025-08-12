import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "../../context/ThemeContext";
import Navbar from "../Navbar";

const renderWithTheme = (ui) => render(<ThemeProvider>{ui}</ThemeProvider>);

describe("Navbar", () => {
  it("renders logo", () => {
    renderWithTheme(<Navbar />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("toggles theme on button click", () => {
    renderWithTheme(<Navbar />);
    const button = screen.getByLabelText(/switch to/i);
    fireEvent.click(button);
    expect(document.documentElement.getAttribute("data-theme")).toBe("light");
    fireEvent.click(button);
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  });

  it("contains nav links", () => {
    renderWithTheme(<Navbar />);
    ["About", "Projects", "Contact"].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
