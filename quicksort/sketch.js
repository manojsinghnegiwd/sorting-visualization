let values = []
let w = 20

let index = 0
let innerIndex = 0

let states = []

let globalPivotIndex = 0

async function getSortingIndex (arr, start, end) {
    pivotIndex = start;
    pivotValue = arr[end];

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swap(pivotIndex, i, arr)
            pivotIndex++
        }
    }

    await swap (pivotIndex, end, arr)

    globalPivotIndex = pivotIndex

    return pivotIndex
}

async function quickSort (arr, start, end) {

    if (start >= end) {
        return;
    }

    const index = await getSortingIndex(arr, start, end);
    
    await quickSort(arr, index + 1, end),
    await quickSort(arr, start, index - 1)
}

function setup() {
    let canvasWidth = windowWidth - 12
    let canvasHeight = windowHeight - 20
    createCanvas(canvasWidth, canvasHeight)
    values = new Array(floor(width / w))

    for (let i = 0; i < values.length; i++) {
        values[i] = random(height - 100)
        states[i] = -1
    }

    quickSort(values, 0, values.length - 1)
}

function draw() {
    background(255)

    textSize(25)
    text(parseInt(values[globalPivotIndex]), 10, 50);
    fill(0);

    for (let i = 0; i < values.length; i++) {
        if (i > globalPivotIndex) {
            fill(50)
            rect(i * w, height - values[i], w, values[i])
        } else if (i === globalPivotIndex) {
            fill(0)
            rect(i * w, height - values[i], w, values[i])
        } else {
            fill(255)
            rect(i * w, height - values[i], w, values[i])
        }
        stroke(0)
    }
}

async function swap (aIndex, bIndex, arr) {
    await new Promise(r => setTimeout(r, 100))
    let temp = values[aIndex]
    values[aIndex] = values[bIndex]
    values[bIndex] = temp
}