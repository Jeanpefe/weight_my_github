import { formatSize } from "../logic/formatSize"
import { transformUnits } from "../logic/transformUnit"

export default function GithubSize({userName, size, units, handleClickOnSize}) {

    return (
        <span>The repo size of {userName} is: 
            <strong onClick={handleClickOnSize}>
                {
                    size ? ` ${size.toFixed(3)} ${units}` : ""
                }
            </strong>
        </span>
    )
}