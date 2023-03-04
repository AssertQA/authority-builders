/// <reference types="cypress" />
import { homePage } from "../support/pageObject/homePage.cy";



describe("Home Page", () => {
 
  it("Home", () => {
    homePage.visit();
  });
});
