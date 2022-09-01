import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("App", () => {
  test("Harus merender Navbar", () => {
    render(<Navbar />);
    const header = screen.getByTestId(/header-nav/i);
    expect(header).toBeDefined();
  });
});
