import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostAPI'
import PostItem from './PostItem'

const PostContainer2 = () => {
    const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100)
    const [createPost, { }] = postAPI.useCreatePostMutation()
    const [deletePost, { }] = postAPI.useDeletePostMutation();
    const [updatePost, { }] = postAPI.useUpdatePostMutation();
    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }
    return (
        <div>
            <button onClick={handleCreate}>Добавить пост</button>
            {isLoading && <h1>Идет загрузка</h1>}
            {error && <h1>Произошла ошибка</h1>}
            {posts && posts.map((post: IPost) => <PostItem update={updatePost} remove={deletePost} key={post.id} post={post}></PostItem>
            )}
        </div>
    )
}

export default PostContainer2