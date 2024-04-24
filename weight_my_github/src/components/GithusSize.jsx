import { formatSize } from "../logic/formatSize"
import { transformUnits } from "../logic/transformUnit"

export default function GithubSize({userName, size, units}) {
    const handleClick = () => {
        const {newSize, newUnits} = transformUnits(size, units)
        console.log(newSize)
        console.log(newUnits)
    }
    return (
        <span>The repo size of {userName} is: 
            <strong onClick={handleClick}>
                {
                    size ? ` ${size.toFixed(3)} ${units}` : ""
                }
            </strong>
        </span>
    )
}