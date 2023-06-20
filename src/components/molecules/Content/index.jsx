import { MuiBox } from '../../atoms'
import './index.scss';

const Content = ({children}) => {
    return(
        <MuiBox id="content-container" className="content">
            {children}
        </MuiBox>
    )
}
export default Content;