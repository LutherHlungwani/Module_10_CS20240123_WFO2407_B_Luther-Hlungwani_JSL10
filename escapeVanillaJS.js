document.addEventListener("DOMContentLoaded", () => {
    // 🪲 fix: Correct ID used for attaching the event listener for Room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 fix: Correct element ID for displaying Room 1 results
                document.getElementById("resultRoom1").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting' , 'async']);
        // 🪲 fix: Add async concepts to JS
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 fix: Correct function call to find the intersection of JS and React concepts
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Fix: Add async/await to ensure asynchronous function in Room 3 works
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(async directions => {
                const message = await navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Fix: Correct method to display Room 3 results
                        document.getElementById("room3Result").textContent = message;
                    });
            });
    });
});

function findMostRecentBook(books) {
    // 🪲 Fix: Logic error to correctly find the most recent book
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Fix: Correct logic to find intersection of two sets
    const intersection = new Set([...setA].filter(x => setB.has(x)));
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Fix: Add await to delay for each step of the labyrinth
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
