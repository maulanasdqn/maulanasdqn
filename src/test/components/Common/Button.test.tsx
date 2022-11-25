import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../../../components/Common/Button";

describe("Button", () => {
  test("Harus merender Button", () => {
    render(<Button />);
    const button = screen.getByTestId(/button/i);
    expect(button).toBeDefined();
  });
});
