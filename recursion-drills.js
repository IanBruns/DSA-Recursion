function countingSheep(numOfSheep) {
    if (numOfSheep === 0) {
        console.log('All Sheep have jumped over the fence');
    } else {
        console.log(`${numOfSheep}: Another sheep jumps over the fence`);
        countingSheep(numOfSheep - 1);
    }
}

function powerCalculator(a, b) {
    if (b < 0) {
        return 'exponent should be >= 0';
    } else if (b === 0) {
        return 1;
    }

    return a * powerCalculator(a, b - 1);
}

function reverseString(str) {
    if (str === '') {
        return '';
    }

    const newChar = str[str.length - 1];

    return newChar + reverseString(str.slice(0, -1));
}

function triangularNumber(number) {
    if (number === 1) {
        return number;
    }

    return number + triangularNumber(number - 1);
}

function stringSplitter(str, split) {
    if (!str.includes(split)) {
        return str;
    }

    const newIndex = [str.slice(0, str.indexOf(split))];

    return newIndex.concat(stringSplitter(str.slice(str.indexOf(split) + 1), split));
}

function fibonacciNumber(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

function mazeSolve(maze, vertical, horizontal) {
    // console.log(vertical, horizontal);
    if (maze[vertical][horizontal] === 'e') {
        console.log('Done');
        return;
    } else if (maze[vertical][horizontal + 1] === ' ' ||
        maze[vertical][horizontal + 1] === 'e') {
        console.log('R');
        mazeSolve(maze, vertical, horizontal + 1);
    } else if (maze[vertical + 1][horizontal] === ' ' ||
        maze[vertical + 1][horizontal] === 'e') {
        console.log('D');
        mazeSolve(maze, vertical + 1, horizontal);
    } else if (maze[vertical][horizontal - 1] === ' ' ||
        maze[vertical][horizontal - 1] === 'e') {
        console.log('L');
        mazeSolve(maze, vertical, horizontal + 1);
    } else if (maze[vertical - 1][horizontal] === ' ' ||
        maze[vertical - 1][horizontal] === 'e') {
        console.log('U');
        mazeSolve(maze, vertical + 1, horizontal);
    }
}

function maze(labyrinth, position = 0, row, col, direction = 'S', path = []) {
    if (col < 0 || row < 0) return;
    if (col >= labyrinth[0].length || row >= labyrinth.length) return;

    path[position] = direction;
    position++;

    if (labyrinth[row][col] === 'e') {
        printPath(path, 1, position - 1);
        return;
    }

    if (labyrinth[row][col] === ' ') {
        // The current cell is free. Mark it as visited
        labyrinth[row][col] = 's';
        // Invoke recursion to explore all possible directions
        maze(labyrinth, position, row, col - 1, 'L', path); // left
        maze(labyrinth, position, row - 1, col, 'U', path); // up
        maze(labyrinth, position, row, col + 1, 'R', path); // right
        maze(labyrinth, position, row + 1, col, 'D', path); // down
        // Mark back the current cell as free
        // labyrinth[row][col] = ' ';
    }

    // Remove the last direction from the path
    position--;
}
function printPath(path, startPos, endPos) {
    console.log('Found path to the exit: ');
    console.log(path);
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', '*', '*', ' '],
    [' ', '*', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', '*', 'e']
];

maze(bigMaze, 0, 0, 0, 'S');