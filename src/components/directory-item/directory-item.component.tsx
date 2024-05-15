import { Link } from "react-router-dom";
import "./directory-item.styles.scss";
import { FC } from "react";
import { DirectoryCategory } from "../directory/directory.component";
type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { id, imageUrl, route, title } = category;
  return (
    <Link to={route}>
      <div
        className="directory__element"
        key={id}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h3 className="directory__name">{title.toUpperCase()}</h3>
      </div>
    </Link>
  );
};
export default DirectoryItem;
