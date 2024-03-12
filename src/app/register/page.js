export default function Register(){
    return(
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <div className="flex flex-col mb-10">
                <h1 className="font-bold items-center text-center text-slate-800 text-4xl">Member Registration</h1>
            </div>      
            <form className="flex flex-col text-center items-center bg-slate-100 p-20 rounded-3x w-full mx-auto max-w-xl">
                <div className="flex items-center mb-6">
                    <h1 className="font-normal tracking-wider text-lg">Email: &nbsp;</h1>
                    <input type="email" placeholder="Enter Your Email Address" className="px-10 py-2"/>
                </div>
                <div className="flex items-center mb-10">
                    <h1 className="font-normal tracking-wider text-lg">Password: &nbsp;</h1>
                    <input type="password" placeholder="Enter Your Password" className="px-6 py-2"/>
                </div>
                <button type="submit" className="bg-slate-500 py-3 px-14 mb-4 rounded-full font-bold text-slate-100 text-lg tracking-normal">Register Now</button>
                <div className="text-center text-gray-500 text-sm my-4">
                    Or Login With Other Services
                </div>
                <button className="text-slate-700 border border-slate-600 font-semibold text-sm rounded-full py-2 px-8">Login with Google</button>
            </form>
        </section>
    )
}