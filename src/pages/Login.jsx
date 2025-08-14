import { useForm } from "react-hook-form"
import Logo from '../assets/HackathonNewsLogo.png'

export default function Admin() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            usename: '',
            password: '',
        }
    });

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className="w-full h-[100vh] flex justify-center items-center p-10 bg-cyan-200">
            <form action="submit" className="flex flex-col items-center w-full max-w-100 p-10 gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <figure className="h-30">
                    <img src={Logo} alt="Logo" className="h-full" />
                </figure>
                <label htmlFor="usenameInput" className="flex flex-col w-full">
                    Usename
                    <input type="text" id="usernameInput" className="outline-none border-1 rounded-[5px] h-10 px-2" placeholder="USERNAME" {...register('usename')} />
                </label>
                <label htmlFor="passwordInput" className="flex flex-col w-full">
                    Password
                    <input type="text" id="passwordInput" className="outline-none border-1 rounded-[5px] h-10 px-2" placeholder="PASSWORD" {...register('password')} />
                </label>

                <button type="submit" className="w-full h-10 rounded-[5px] bg-cyan-400 font-[600] hover:bg-cyan-500 cursor-pointer">Login</button>
            </form>
        </div>
    )
}