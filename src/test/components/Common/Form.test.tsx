import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "../../../components/Common/Form";

describe("Form", () => {
  test("Harus merender Form", () => {
    render(<Form />);
    const form = screen.getByTestId(/form/i);
    expect(form).toBeDefined();
  });
});
