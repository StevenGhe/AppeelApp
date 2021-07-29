import { render, screen } from '@testing-library/react';
import List from '../List';

const items = [
    {
        text: "test1"
    }, {
        text: "test2"
    }
]

const faultyItems = [
    {
        faultyText: "test1"
    }
]

test('List displays text items', () => {
    render(<List items={items} />);

    var element = screen.getByText(/test1/i);
    expect(element).toBeInTheDocument();

    element = screen.getByText(/test2/i);
    expect(element).toBeInTheDocument();
});

test('List displays text role items', () => {
    render(<List items={items} />);

    const element = screen.queryAllByRole("listitem");
    for (var i in element) {
        expect(element[i]).toBeInTheDocument();
    }
});

test('List does not display faulty text items', () => {
    render(<List items={faultyItems} />);

    var element = screen.queryByRole("listitem");
    expect(element).toBeNull();
});

test('List displays no list item when given no items', () => {
    render(<List items={[]} />);

    const element = screen.queryByRole("listitem");
    expect(element).toBeNull();
});

test('List displays no list item when given a null list', () => {
    render(<List items={null} />);

    const element = screen.queryByRole("listitem");
    expect(element).toBeNull();
});