import { useState, useEffect } from "react";
import { slice } from "lodash";
import { MuiBox, MuiTypography, Pagination } from "../../atoms";
import ListSection from "./ListSection";
import { commonConstants } from "../../../constants";
import "./index.scss";

const List = ({ list, loading, error, noRecordsToDisplay }) => {
  const [startOffset, setStartOffset] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [currentList, setCurrentList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    if (list?.length > 0) {
      const pageCount = Math.ceil(list.length / commonConstants.PER_PAGE_DATA);
      const endOffset = startOffset + commonConstants.PER_PAGE_DATA;
      const currItems = slice(list, startOffset, endOffset);
      setCurrentList(currItems);
      setPageCount(pageCount);
    }
  }, [list, startOffset]);

  const handlePageClick = (event, currentPage) => {
    const indexOfLastRecord = currentPage * commonConstants.PER_PAGE_DATA;
    const indexOfFirstRecord =
      indexOfLastRecord - commonConstants.PER_PAGE_DATA;
    // TODO: Remove this console.log
    console.log(
      `User requested page number ${currentPage}, which is offset ${indexOfFirstRecord}`,
    );
    setCurrentPageNumber(currentPage);
    setStartOffset(indexOfFirstRecord);
  };

  return (
    <MuiBox>
      <MuiTypography variant={"h2"}> </MuiTypography>
      <MuiBox>
        {loading && <p>{commonConstants.LOADING}</p>}
        {error && <p className="list-error">{commonConstants.NETWORK_ERROR}</p>}
        {!error &&
          !loading &&
          currentList.map((listItem, index) => {
            return (
              <ListSection key={listItem?.id || index} listItem={listItem} />
            );
          })}
      </MuiBox>
      {!error && !loading && currentList.length > 0 && (
        <MuiBox>
          <Pagination
            page={currentPageNumber}
            count={pageCount}
            onChange={handlePageClick}
          />
        </MuiBox>
      )}
      {!error && !loading && noRecordsToDisplay && (
        <MuiBox>
          <p className="list-no-data">{commonConstants.NO_RECORDS}</p>
        </MuiBox>
      )}
    </MuiBox>
  );
};

export default List;
