import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("Navbar", () => {
  test("Harus merender Navbar", () => {
    render(<Navbar />);
    const header = screen.getByTestId(/header-nav/i);
    expect(header).toBeDefined();
  });
});

describe("Navbar", () => {
  test("Navbar harus punya tiga Navigation dasar", () => {
    render(<Navbar />);
    const Home = screen.getAllByText("Home");
    const About = screen.getAllByText("About");
    const Projects = screen.getAllByText("Projects");
    expect(Home).toBeDefined();
    expect(About).toBeDefined();
    expect(Projects).toBeDefined();
  });
});

describe("Test Navbar Logo", () => {
  test("Logo harus punya src dan harus berukuran 40", () => {
    render(<Navbar />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "logo.svg");
    expect(logo).toHaveAttribute("alt", "Logo");
    expect(logo).toHaveAttribute("width", "40");
  });
});

describe("Test Navbar Button", () => {
  test("Navbar harus punya button", () => {
    render(<Navbar />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
