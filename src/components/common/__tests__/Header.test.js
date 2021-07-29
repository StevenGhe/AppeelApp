import { render, screen } from '@testing-library/react';
import Header from './../Header';

test('Header should render same text passed into title prop', () => {
    render(<Header text="TestHeader" size="large" />);
    const element = screen.getByText(/testheader/i);
    expect(element).toBeInTheDocument();
});

test('Header should have heading role', () => {
    render(<Header text="TestHeader" size="large" />);

    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
});


test('Large header should render <h1>', () => {
    render(<Header text="TestHeader" size="large" />);

    const element = screen.getByText(/testheader/i);
    expect(element).toContainHTML("</h1>");
});

test('Medium header should render <h2>', () => {
    render(<Header text="TestHeader" size="medium" />);

    const element = screen.getByText(/testheader/i);
    expect(element).toContainHTML("</h2>");
});

test('Non large/medium header should render <h3>', () => {
    render(<Header text="TestHeader" />);

    const element = screen.getByText(/testheader/i);
    expect(element).toContainHTML("</h3>");
});