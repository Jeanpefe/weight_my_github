

export function formatSize(size) {
    let newUnits = 'kB'
    console.log(size)
    let sizeReescalated = size
    if (size > 10000) {
        sizeReescalated = size / 1024
        console.log(sizeReescalated)
        newUnits = 'MB'
    }

    if (sizeReescalated > 10000) {
        sizeReescalated = sizeReescalated / 1024
        newUnits = 'GB'
    }
    return {sizeReescalated, newUnits}
}