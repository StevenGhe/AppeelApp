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
describe("List component", () => {
    it('displays text items', () => {
        render(<List items={items} />);

        var element = screen.getByText(/test1/i);
        expect(element).toBeInTheDocument();

        element = screen.getByText(/test2/i);
        expect(element).toBeInTheDocument();
    });

    it('displays text role items', () => {
        render(<List items={items} />);

        const element = screen.queryAllByRole("listitem");
        for (var i in element) {
            expect(element[i]).toBeInTheDocument();
        }
    });

    it('does not display faulty text items', () => {
        render(<List items={faultyItems} />);

        var element = screen.queryByRole("listitem");
        expect(element).toBeNull();
    });

    it('displays no list item when given no items', () => {
        render(<List items={[]} />);

        const element = screen.queryByRole("listitem");
        expect(element).toBeNull();
    });

    it('displays no list item when given a null list', () => {
        render(<List items={null} />);

        const element = screen.queryByRole("listitem");
        expect(element).toBeNull();
    });

})