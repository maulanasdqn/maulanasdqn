import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TextField from "../../../components/Common/TextField";

describe("TextField", () => {
  test("Harus merender TextField", () => {
    render(<TextField />);
    const input = screen.getByTestId(/input/i);
    expect(input).toBeDefined();
  });
});
