export default function Register(){
    return(
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <div className="flex flex-col mb-10">
                <h1 className="font-bold items-center text-center text-slate-800 text-4xl">Member Registration</h1>
            </div>  
            <form className="flex flex-col items-left bg-slate-100 p-20 rounded-3x w-full mx-auto max-w-xl">
                <div className="flex items-center mb-5">
                    <h1 className="font-normal tracking-wider text-lg">Email: &nbsp;</h1>
                    <input type="email" placeholder="Enter Your Email Address" className="px-10 py-2"/>
                </div>
                <div className="flex items-center mb-10">
                    <h1 className="font-normal tracking-wider text-lg">Password: &nbsp;</h1>
                    <input type="password" placeholder="Enter Your Password" className="px-6 py-2"/>
                </div>
                <button type="submit" className="bg-slate-500 py-3 px-10 rounded-full font-bold text-slate-100">Register Now</button>
            </form>
        </section>
    )
}