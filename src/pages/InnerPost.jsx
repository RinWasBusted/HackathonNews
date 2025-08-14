import Layout from "../layouts/Layout"
import Example from '../assets/Example.jpg'
import SideBoard from "../components/home-page/side-board/SideBoard";
import Post from "../components/inner-post/post/Post";

export default function InnerPost() {
    const post = {
        id: 1,
        type: 'event',
        banner: Example,
        title: 'Cuoc thi hackathon DHQG HCM',
        progress: 'Prepare',
        date: '27-08-2006',
        tags: ['AI', 'Blockchain'],
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae laboriosam provident autem unde repudiandae voluptates, ipsum exercitationem maiores ipsam quae fugit corporis! Ratione aut dolor impedit. Veniam eaque nihil reprehenderit nostrum, architecto eum harum iste nulla id ut sit, modi, esse provident cupiditate delectus. Facilis mollitia numquam saepe quibusdam voluptas libero voluptatum deserunt repellat dolore optio perferendis cupiditate, asperiores iusto voluptates autem dolorum, ratione illum? Magnam nulla perspiciatis unde. Aperiam velit in repellat nostrum nisi provident possimus eaque dolor, fugit aliquam consectetur praesentium quae porro, ipsum mollitia tempora excepturi a. At et tenetur saepe, fugit consequatur obcaecati perferendis minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae laboriosam provident autem unde repudiandae voluptates, ipsum exercitationem maiores ipsam quae fugit corporis! Ratione aut dolor impedit. Veniam eaque nihil reprehenderit nostrum, architecto eum harum iste nulla id ut sit, modi, esse provident cupiditate delectus. Facilis mollitia numquam saepe quibusdam voluptas libero voluptatum deserunt repellat dolore optio perferendis cupiditate, asperiores iusto voluptates autem dolorum, ratione illum? Magnam nulla perspiciatis unde. Aperiam velit in repellat nostrum nisi provident possimus eaque dolor, fugit aliquam consectetur praesentium quae porro, ipsum mollitia tempora excepturi a. At et tenetur saepe, fugit consequatur obcaecati perferendis minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae laboriosam provident autem unde repudiandae voluptates, ipsum exercitationem maiores ipsam quae fugit corporis! Ratione aut dolor impedit. Veniam eaque nihil reprehenderit nostrum, architecto eum harum iste nulla id ut sit, modi, esse provident cupiditate delectus. Facilis mollitia numquam saepe quibusdam voluptas libero voluptatum deserunt repellat dolore optio perferendis cupiditate, asperiores iusto voluptates autem dolorum, ratione illum? Magnam nulla perspiciatis unde. Aperiam velit in repellat nostrum nisi provident possimus eaque dolor, fugit aliquam consectetur praesentium quae porro, ipsum mollitia tempora excepturi a. At et tenetur saepe, fugit consequatur obcaecati perferendis minus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita neque perspiciatis eum animi necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae laboriosam provident autem unde repudiandae voluptates, ipsum exercitationem maiores ipsam quae fugit corporis! Ratione aut dolor impedit. Veniam eaque nihil reprehenderit nostrum, architecto eum harum iste nulla id ut sit, modi, esse provident cupiditate delectus. Facilis mollitia numquam saepe quibusdam voluptas libero voluptatum deserunt repellat dolore optio perferendis cupiditate, asperiores iusto voluptates autem dolorum, ratione illum? Magnam nulla perspiciatis unde. Aperiam velit in repellat nostrum nisi provident possimus eaque dolor, fugit aliquam consectetur praesentium quae porro, ipsum mollitia tempora excepturi a. At et tenetur saepe, fugit consequatur obcaecati perferendis minus.',
        slug: 'slug-example'
    };

    return (
        <div className="h-full w-full flex flex-col items-center bg-primary">
            <Layout>
                <main className="flex max-w-[1280px] w-full lg:px-0">
                    <section className='w-full relative flex flex-col items-center overflow-hidden flex-1 lg:flex-4/6 p-10'>
                        <Post post={post}></Post>
                    </section>

                    <section className="hidden flex-2/6 lg:inline p-10">
                        <SideBoard></SideBoard>
                    </section>
                </main>
            </Layout>
        </div>
    )
}