import Example from '../../../assets/Example.jpg'
import PostEditor from "../../post-editor/PostEditor"

export default function WriteNewPostBoard() {
    const post = {
        id: 1,
        type: 'event',
        banner: Example,
        title: 'This is a post title',
        desc: 'This is a post description',
        progress: 'past',
        date: '2006-08-27',
        content: '<h1>Xin chào tất cả mọi người</h1><p style="text-align: right; ">Mình tên là Phạm Hoàng Thái</p><p></p>',
    }

    return (
        <div className="flex flex-col h-full items-center">
            <h2 className="text-3xl font-[600] w-full border-b-2 p-5">
                Write new post
            </h2>

            <PostEditor defaultValues={post}></PostEditor>
        </div>
    )
}