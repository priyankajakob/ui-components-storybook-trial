import { render, screen } from "@testing-library/react";
import Error from "../Error";
import { commonConstants } from '../../../constants';

describe("Test for Error component", () => {

  it("Test 1: Checking Error is rendered when prop is sent", () => {
    render(<Error content={"SampleError"} />);

    const htmlElement = screen.getByText(/SampleError/);
    expect(htmlElement).toBeInTheDocument();
  });

  it("Test 2: Checking Error is rendered when prop is not sent", () => {
    render(<Error/>);

    const reg = new RegExp(`${commonConstants.GENERIC_ERROR}`)
    const htmlElement = screen.getByText(reg);
    expect(htmlElement).toBeInTheDocument();
  });
});
