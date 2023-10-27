import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostAPI";
import PostItem from "./PostItem";

const PostContainer = () => {
    const {data: posts, error, isLoading, refetch} =  postAPI.useFetchAllPostsQuery(20)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()


  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <div>
      <button onClick={handleCreate}>Добавить пост</button>
      {isLoading && <h1>Идет загрузка</h1>}
      {error && <h1>Произошла ошибка</h1>}
      {posts &&
        posts.map((post: IPost) => (
          <PostItem
            update={handleUpdate}
            remove={handleRemove}
            key={post.id}
            post={post}
          ></PostItem>
        ))}
    </div>
  );
};

export default PostContainer;
