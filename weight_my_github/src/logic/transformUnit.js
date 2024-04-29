
export function transformUnits(size, units) {
    let newSize;
    let newUnits;
    console.log(size)
    console.log(units)

    if (units === "GB") {
        newSize = size * 1024
        newUnits = "MB"
    } else if (units === "MB") {
        newSize = size * 1024
        newUnits = "kB"       
    } else if (units === "kB") {
        newSize = size * 1024
        newUnits = "Bytes"       
    } else if (units === "Bytes") {
        newSize = size * 8
        newUnits = "Bits"       
    }

    return {newSize, newUnits}
}