import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("Harus merender text yang di definisikan", () => {
    render(<App />);
    const text1 = screen.getByText(/Maulana Sodiqin/i);
    const text2 = screen.getByText(/Hello there/i);
    const text3 = screen.getByText(/this is my personal web/i);
    const img = screen.getAllByTestId(/React Logo/i);
    expect(text1).toBeDefined();
    expect(text2).toBeDefined();
    expect(text3).toBeDefined();
    expect(img).toBeDefined();
  });
});
