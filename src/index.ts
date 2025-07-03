import { init, allTags, state, tag, getMountPoint, State, text } from '@nkeff/cardboard-js';
import { ContionalComponent, Counter } from './counter';
const { style, p } = allTags;

/** 
 * Consolidate the setup of your project here
 */
function setup() {
    // Initialize Cardboard
    // This will initialize the Cardboard framework
    // and create a root element referencing the 'body' by default
    // You can also pass a custom selector if wanted
    init({ selector: 'body' });

    // Add custom stylesheet to the root element
    tag('(html)').append(style({
        body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            margin: '0',
        },
    }));
}

/** 
 * Build the application here
 */
function main() {
    let count = state(0);

    // The `getMountPoint` function retrieves the current mount point
    // This will be the root element created by `init()`, point to the body by default
    getMountPoint()?.append(
        Counter(count),
        ContionalComponent(count),
    );
}

// This will run the setup and main functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setup();
    main();
});