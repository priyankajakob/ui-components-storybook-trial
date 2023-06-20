import { MuiBox, MuiTypography } from "../../atoms";
import './index.scss';

const ListHeadine = ({ headline, articleLink }) => {
  return (
    <MuiTypography variant="h5">
      <a href={articleLink.href} title={articleLink.title}>
        <span className="list-headline">{headline}</span>
      </a>
    </MuiTypography>
  );
};

const ListStandfirst = ({ standfirst }) => {
  return (
    <div
      className="list-standfirst"
      dangerouslySetInnerHTML={{
        __html: standfirst,
      }}
    />
  );
};

const ListFooter = ({ byline, date }) => {
  return (
    <MuiBox className="list-footer">
      <MuiTypography variant="body2">
        <em>{byline}</em>
        {byline && <span>&nbsp;|&nbsp;</span>}
        <span>{date}</span>
      </MuiTypography>
    </MuiBox>
  );
};

const ListContent = ({ headline, standfirst, date, byline, link }) => {
  return (
    <MuiBox>
      <ListHeadine headline={headline} articleLink={link} />

      {standfirst && <ListStandfirst standfirst={standfirst} />}

      <ListFooter byline={byline} date={date} />
    </MuiBox>
  );
};

export default ListContent;
