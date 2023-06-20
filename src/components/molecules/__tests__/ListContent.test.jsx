import { render, screen } from "@testing-library/react";
import ListContent from "../List/ListContent";

const mockData = {
  headline: "TestHeading",
  standfirst: "TestStandFirst",
  date: "March 21, 2022",
  byline: "Jane",
  link: {
    href: "https://www.news.com.au/lifestyle/fashion/celebrity/khloe-kardashian-flaunts-toned-figure-in-tiny-bikini/news-story/c17f3a49c23f647fcc7bbcfa7720ac87",
    title: "TestLinkTitle",
  },
};

describe("Test for ListContent component", () => {

  it("Test 1: Checking if link is present in ListContent", () => {
    render(<ListContent {...mockData}/>);
    
    const linkEle = screen.getByRole('link')
    expect(linkEle.getAttribute("href")).toBe(mockData.link.href)

  })
});
