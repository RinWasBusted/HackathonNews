import { useForm, Controller } from "react-hook-form"
import { useEffect, useState } from "react"

export default function WriteNewPostBoard() {
    const { register, handleSubmit, formState: { errors }, control, watch } = useForm({
        defaultValues: {
            id: 1,
            type: 'event',
            banner: null,
            title: '',
            desc: '',
            progress: 'upcoming',
            date: '',
            content: '',
        }
    })

    const postType = watch('type')
    const bannerInput = watch('banner')
    const [previewBanner, setPreviewBanner] = useState(null);

    useEffect(() => {
        const file = bannerInput;
        if (file) {
            setPreviewBanner(URL.createObjectURL(file));
        } else {
            setPreviewBanner(null);
        }
    }, [bannerInput])

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="flex flex-col h-full items-center">
            <h2 className="text-3xl font-[600] w-full border-b-2 p-5">
                Write new post :
                <select {...register('type')} className="cursor-pointer outline-none">
                    <option value="event">Event</option>
                    <option value="blog">Blog</option>
                </select>
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="h-full w-full max-w-250 flex flex-col items-center p-10 shadow-2xl gap-5">
                <Controller
                    name="banner"
                    control={control}
                    render={({ field: { onChange } }) => <input type="file" onChange={(e) => onChange(e.target.files?.[0])} accept="image/*" className="hidden" id="bannerInput" />}
                />
                <label htmlFor="bannerInput" className="w-full aspect-5/3 border-dashed border-2 rounded-2xl border-black/50 cursor-pointer flex justify-center items-center overflow-hidden">
                    {previewBanner != null ? <img src={previewBanner} alt="Preview banner" className="object-cover h-full w-full" /> : <p className="text-[50px] text-black/50 font-[600]">Choose a picture</p>}
                </label>

                <input type="text" {...register('title')} className="border-1 outline-none rounded-[5px] py-3 w-full px-5 font-[600] text-3xl" placeholder="Title" />

                <textarea className="w-full h-30 border-1 outline-none p-5 rounded-[5px]" placeholder="Description"></textarea>

                {postType === 'blog' && <input type="date" {...register('date')} className=" h-10 outline-none border-1 rounded-[5px] px-5" />}

                {postType === 'event' && <div className="text-[16px] font-600]">
                    Progress:
                    <select {...register('progress')} className="cursor-pointer outline-none">
                        <option value="upcoming">Upcoming</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="past">Past</option>
                    </select>
                </div>}

                <button type="submit" className=" h-10 w-30 bg-cyan-400 text-white rounded-[10px] cursor-pointer font-[600] hover:bg-cyan-500">Publish</button>
            </form>
        </div>
    )
}