import { render, screen } from '@testing-library/react';
import Header from './../Header';

describe("Header component", () => {
    it('should render same text passed into title prop', () => {
        render(<Header text="TestHeader" size="large" />);
        const element = screen.getByText(/testheader/i);
        expect(element).toBeInTheDocument();
    });

    it('should have heading role', () => {
        render(<Header text="TestHeader" size="large" />);

        const element = screen.getByRole("heading");
        expect(element).toBeInTheDocument();
    });


    it('Large header should render <h1>', () => {
        render(<Header text="TestHeader" size="large" />);

        const element = screen.getByText(/testheader/i);
        expect(element).toContainHTML("</h1>");
    });

    it('Medium header should render <h2>', () => {
        render(<Header text="TestHeader" size="medium" />);

        const element = screen.getByText(/testheader/i);
        expect(element).toContainHTML("</h2>");
    });

    it('Non large/medium header should render <h3>', () => {
        render(<Header text="TestHeader" />);

        const element = screen.getByText(/testheader/i);
        expect(element).toContainHTML("</h3>");
    });

})