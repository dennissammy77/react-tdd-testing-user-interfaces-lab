import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    // Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    });
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
});
test("displays a second-level heading with the text `About Me`", () => {
    // Arrange
    render(<App />);
    // Act
    const secondLevelHeading = screen.getByRole("heading", {
        name: /About Me/i,
        exact: false,
        level: 2,
    });
    // Assert
    expect(secondLevelHeading).toBeInTheDocument();
});
test("displays a paragraph `A paragraph for your biography`", () => {
    // Arrange
    render(<App />);
    // Act
    const paragraph = screen.getByText(/A paragraph for your biography/i);
    // Assert
    expect(paragraph).toBeInTheDocument();
});
test("displays an image", () => {
    // Arrange
    render(<App />);
    // Act
    const image = screen.getByAltText(/profile image/i);
    // Assert
    expect(image).toBeInTheDocument();
});
test("displays a href", () => {
    // Arrange
    render(<App />);
    // Act
    const linkTags = screen.getAllByRole('link');
    // Assert
    expect(linkTags[0]).toBeInTheDocument();
    expect(linkTags[1]).toBeInTheDocument();
    expect(linkTags[0]).toHaveAttribute('href','github');
    expect(linkTags[1]).toHaveAttribute('href','linkedin');
});