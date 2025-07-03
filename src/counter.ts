import { allTags, State, text } from '@nkeff/cardboard-js';
const { button, p, div } = allTags;

// The `Counter` component creates a button that displays the number of clicks
export const Counter = (count: State<number>) => {
    return button()
        // The button displays the current count
        .text(`Clicked $count times`, { count })
        // `styled` adds the style to the global stylesheet, all instances of this button will have the same style
        // This is useful for styling components that are reused multiple times
        .styled({
            color: '#333',
            fontSize: '2rem',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            border: 'none',
            outline: 'none',
            backgroundColor: '#f0f0f0',
            cursor: 'pointer',
            transform: 'scale(1)',
            transition: 'all 0.1s ease-in-out',
            ':hover': {
                backgroundColor: '#d9d9d9',
                transform: 'scale(1.01)',
            },
            ':active': {
                backgroundColor: '#d3d3d3',
                transform: 'scale(0.97)',
            }
        }, 'counter')
        // add a class to the button for styling
        .addClass('clicker')
        // add a click event listener
        .clicked((self) => {
            // When the button is clicked, increment the count
            count.value++;
        });
};

// The `ContionalComponent` component displays a message if the count is above 10
export const ContionalComponent = (count: State<number>) => {
    // Create a derived/computed state that checks if the count is greater than 10
    // This will automatically update when the count changes
    // `greaterThan` is a utility function that checks if the value is greater than the specified number
    return div(
        p(text('Click $count more times', { count }))
            .hideIf(count.greaterThanOr(5)),
        p(`Count is above 5!!`)
            .styled({
                color: 'limegreen',
            })
            .hideIfNot(count.greaterThanOr(5))
    );
}