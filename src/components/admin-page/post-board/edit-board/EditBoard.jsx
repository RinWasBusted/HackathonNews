import PostEditor from "../../../post-editor/PostEditor"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getPost from "../../../../services/getPost";
import updatePost from "../../../../services/updatePost";

export default function EditBoard() {

    const [post, setPost] = useState({});

    const { postType, id } = useParams();

    useEffect(() => {
        try {
            async function fetchPostData() {
                const data = await getPost(postType, id);
                setPost(data);
            };

            if (postType && id) {
                fetchPostData();
            }
        } catch (e) {
            console.error('Failed to fetch post data' + e);
        }
    }, [postType, id])

    function onSubmit(post) {
        try {
            updatePost(postType, id, post);
            console.log('You have updated the events!', post)
        } catch (e) {
            console.error('failed to use updatePost function!' + e);
        }
    }

    return (
        <div className="w-full flex justify-center">
            {Object.keys(post).length > 0 ? (
                <PostEditor
                    key={`${postType}-${id}`}
                    defaultValues={post}
                    onSubmit={onSubmit}
                />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}