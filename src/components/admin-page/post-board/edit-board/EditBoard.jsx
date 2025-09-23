import PostEditor from "../../../post-editor/PostEditor"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditBoard() {

    const [post, setPost] = useState({});

    const { postType, id } = useParams();

    useEffect(() => {
        if(postType && id){
        setPost({
                id:1,
                banner: "https://appsembler.com/wp-content/uploads/2024/04/10-Tips-for-Hackathon-Success-in-2024.png",
                content: `<h1>this is h1 content</h1><p style="text-align: right;">right align testing</p><p></p>`,
                date: '',
                desc: 'this is the post description',
                progress: 'ongoing',
                tags: ["AI","Fullstack"],
                title: '10 tips for hackathon success in 2024',
                type: 'event'
            })
        }
    }, [postType, id])

    function onSubmit(post) {
        console.log("Update post: ", post)
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