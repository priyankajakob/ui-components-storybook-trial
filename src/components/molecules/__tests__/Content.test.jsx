import { render, screen } from "@testing-library/react";
import Content from "../Content";

describe("Test for Content component", () => {

  it("Test 1: Checking Content is rendered when children are sent", () => {
    render(<Content>
            <div data-testid="content-id">
                <span>Sample content text</span>
            </div>
          </Content>);

    const htmlElement = screen.getByTestId("content-id");
    expect(htmlElement).toBeInTheDocument();
  });

});
