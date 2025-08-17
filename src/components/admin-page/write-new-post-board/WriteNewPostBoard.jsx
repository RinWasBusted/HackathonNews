import Example from '../../../assets/Example.jpg'
import addPost from '../../../services/addPost'
import PostEditor from "../../post-editor/PostEditor"

export default function WriteNewPostBoard() {


    function onSubmit(post) {
        try {
            addPost('events', post);
            console.log('You have posted a new events!', post)
        } catch (e) {
            console.error('failed to use addPost function!' + e);
        }
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