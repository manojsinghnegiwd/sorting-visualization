let values = []
let w = 1

let index = 0
let innerIndex = 0

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
            if (innerIndex < values.length - index - 1) {
                if (values[innerIndex] > values[innerIndex + 1]) {
                    swap(innerIndex, innerIndex + 1, values)
                }
                innerIndex++
            } else {
                index++
                innerIndex = 0
            }
        }
    }

    for (let i = 0; i < values.length; i++) {
        rect(i * w, height - values[i], w, values[i])

        if (i === innerIndex) {
            fill(255, 69, 0)
        } else {
            fill(255)
        }
        stroke(0)
    }
    
}

function swap (aIndex, bIndex, arr) {
    let temp = values[aIndex]
    values[aIndex] = values[bIndex]
    values[bIndex] = temp
}