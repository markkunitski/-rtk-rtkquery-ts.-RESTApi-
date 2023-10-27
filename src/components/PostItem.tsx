import * as React from "react";
import { IPost } from "../models/IPost";
import classes from "./PostItem.module.css";
interface IPostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: React.FunctionComponent<IPostItemProps> = ({
  post,
  remove,
  update,
}) => {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };

  const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  return (
    <div onClick={handleUpdate} className={classes.item}>
      {post.id} - {post.title}
      <button onClick={handleRemove}>Удалить</button>
    </div>
  );
};

export default PostItem;
