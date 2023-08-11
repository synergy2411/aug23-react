import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders the list of items / todos", async () => {
    window.fetch = jest.fn();

    window.fetch.mockReturnValueOnce({
      json: async () => [
        { id: "t001", title: "pot the plants" },
        { id: "t002", title: "renew insurance" },
      ],
    });

    render(<Async />);

    const liElements = await screen.findAllByRole("listitem");

    expect(liElements).toHaveLength(2);
  });
});
