import Example from '../../../assets/Example.jpg'
import PostEditor from "../../post-editor/PostEditor"

export default function WriteNewPostBoard() {


    function onSubmit(post) {
        console.log('Add new post:', post)
    }

    return (
        <div className="flex flex-col h-full items-center">
            <h2 className="text-3xl font-[600] w-full border-b-2 p-5">
                Write new post
            </h2>

            <PostEditor onSubmit={onSubmit}></PostEditor>
        </div>
    )
}