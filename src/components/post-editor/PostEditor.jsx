import { useForm, Controller } from "react-hook-form"
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'

export default function PostEditor({ defaultValues }) {
    const { register, handleSubmit, control, watch } = useForm({
        defaultValues: defaultValues,
    })

    console.log(defaultValues);

    const postType = watch('type')
    const previewBanner = watch('banner')

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="h-fit w-full max-w-250 flex flex-col items-center p-10 shadow-2xl gap-5 ">
            <select {...register('type')} className="cursor-pointer outline-none">
                <option value="event">Event</option>
                <option value="blog">Blog</option>
            </select>
            <Controller
                name="banner"
                control={control}
                render={({ field: { onChange } }) => <input type="file" onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        onChange(URL.createObjectURL(file));
                    } else {
                        onChange(null);
                    }
                }} accept="image/*" className="hidden" id="bannerInput" />}
            />
            <label htmlFor="bannerInput" className="w-full aspect-5/3 shrink-0 border-dashed border-2 rounded-2xl border-black/50 cursor-pointer flex justify-center items-center overflow-hidden">
                {previewBanner != null ? <img src={previewBanner} alt="Preview banner" className="object-cover h-full w-full" /> : <p className="text-[50px] text-black/50 font-[600]">Choose a picture</p>}
            </label>

            <input type="text" {...register('title')} className="border-1 outline-none rounded-[5px] py-3 w-full px-5 font-[600] text-3xl" placeholder="Title" />

            <Controller
                name="desc"
                control={control}
                render={({ field }) => (
                    <textarea
                        {...field}
                        className="w-full h-30 border-1 outline-none p-5 rounded-[5px]"
                        placeholder="Description"
                    />
                )}
            />

            {postType === 'blog' && <input type="date" {...register('date')} className=" h-10 outline-none border-1 rounded-[5px] px-5" />}

            {postType === 'event' && <div className="text-[16px] font-600]">
                Progress:
                <select {...register('progress')} className="cursor-pointer outline-none">
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="past">Past</option>
                </select>
            </div>}

            <div className="w-full border-1 overflow-hidden rounded-[5px]">
                <Controller
                    name="content"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <SimpleEditor
                            content={defaultValues.content}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
            </div>


            <button type="submit" className=" h-10 w-30 bg-cyan-400 text-white rounded-[10px] cursor-pointer font-[600] hover:bg-cyan-500">Publish</button>
        </form>
    )
}