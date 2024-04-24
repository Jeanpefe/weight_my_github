import { formatSize } from "../logic/formatSize"
import { tranformUnits } from "../logic/transformUnit"

export default function GithubSize({userName, size}) {
    const {sizeReescalated, units} = formatSize({size})
    const handleClick = () => {
        const {newSize, newUnits} = transformUnits(sizeReescalated, units)
        console.log(newSize)
        console.log(newUnits)
    }
    return (
        <span>The repo size of {userName} is: 
            <strong onClick={handleClick}>
                {
                    size ? ` ${sizeReescalated.toFixed(3)} ${units}` : ""
                }
            </strong>
        </span>
    )
}