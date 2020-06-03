let values = []
let w = 2

let index = 0
let innerIndex = 0
let innerMin = 0

let speedSlider = null

function setup() {
    let canvasWidth = windowWidth - 12
    let canvasHeight = windowHeight - 20
    createCanvas(canvasWidth, canvasHeight)
    values = new Array(floor(width / w))

    for (let i = 0; i < values.length; i++) {
        values[i] = random(height)
    }

    speedSlider = createSlider(1, 10, 1, 1);
    speedSlider.position(10, 10);
    speedSlider.style('width', '80px');
}

function draw() {
    background(255)

    let sortingSpeed = speedSlider.value()

    if (index < values.length) {
        for (let counter = 0; counter < sortingSpeed * 1000; counter++) {
            if (innerIndex < values.length) {
                if (values[innerIndex] < values[innerMin]) {
                    innerMin = innerIndex
                }
                innerIndex++
            } else {
                swap(index, innerMin, values)
                index++
                innerIndex = index + 1
                innerMin = index
            }
        }
    }

    for (let i = 0; i < values.length; i++) {
        rect(i * w, height - values[i], w, values[i])
        fill(255)
        stroke(0)
    }
}

function swap (aIndex, bIndex, arr) {
    let temp = arr[aIndex]
    arr[aIndex] = arr[bIndex]
    arr[bIndex] = temp
}