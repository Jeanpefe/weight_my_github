

export function formatSize({size}) {
    let units = 'kB'
    console.log(size)
    let sizeReescalated = size
    if (size > 10000) {
        sizeReescalated = size / 1024
        console.log(sizeReescalated)
        units = 'mB'
    }

    if (sizeReescalated > 10000) {
        sizeReescalated = sizeReescalated / 1024
        units = 'GB'
    }
    return {sizeReescalated, units}
}