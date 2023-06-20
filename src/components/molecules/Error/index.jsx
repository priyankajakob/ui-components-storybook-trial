import { MuiBox } from '../../atoms';
import { commonConstants } from "../../../constants";
import './index.scss';

const Error = ({ content }) => {
    const contentToShow = content || commonConstants.GENERIC_ERROR
    return(
            <MuiBox>
                <span className="error">
                    { contentToShow }
                </span>
            </MuiBox>
    )
}

export default Error;