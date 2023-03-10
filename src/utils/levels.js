const gaps = [
    3000,
    5500,
    8000,
    10000,
    11500,
    12000,
]

export const levels = (() => {
    const levels = [{
        level: 0,
        minimum: 0,
    }]
    let acc = 0
    let level = 0
    for (const gap of gaps) {
        acc += gap
        level += 1
        levels.push({
            level,
            minimum: acc,
        })
    }
    return levels
})()

export const amountOfLevel = (level) => {
    return gaps.slice(0, level).reduce((total, gap) => total + gap, 0)
}

export const calcAmountToNextLevel = (amount) => {
    let acc = 0

    for (const gap of gaps) {
        acc += gap
        if (amount < acc) {
            break
        }
    }

    return acc - amount
}

export const pfoodToLevel = (amount) => {
    let acc = 0
    let level = 0

    for (const gap of gaps) {
        acc += gap
        if (amount < acc) {
            break
        }
        level += 1
    }

    return level
}