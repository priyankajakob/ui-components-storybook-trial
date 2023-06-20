import { MuiBox } from "../../atoms";
import { Thumbnail } from "..";

const ArticleThumbnail = ({image}) => {
    return(
        <MuiBox>
          <Thumbnail image={image} />
        </MuiBox>
    ) 
}

export default ArticleThumbnail;