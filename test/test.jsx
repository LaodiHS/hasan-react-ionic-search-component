import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Search } from "hasan-react-ionic-search-component ";

describe("Search component", () => {
  const data = [
    "Apple",
    "Banana",
    "Cherry",
    "Durian",
    "Elderberry",
    "Fig",
    "Grapefruit",
  ];

  it("renders the search component correctly", () => {
    render(<Search data={data} />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  it("displays filtered results based on search input", () => {
    render(<Search data={data} />);
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "a" } });

    const filteredItems = screen.queryAllByRole("listitem");
    expect(filteredItems.length).toBe(4);
  });
});