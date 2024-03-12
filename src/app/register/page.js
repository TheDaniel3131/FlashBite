export default function Register(){
    return(
        <section className="flex flex-col items-center justify-between mt-5 py-10">
            <div className="mb-16">
                <h1 className="font-bold text-center text-priamry text-4xl">Member Registration</h1>
            </div>
            <form className="">
                Email: &nbsp;<input type="email" placeholder="Enter Your Email Address"/>
                Password: &nbsp;<input type="password" placeholder="Enter Your Password"/>
                <button type="submit" className="bg-slate-500 py-5 px-10 rounded-full font-bold text-slate-100">Register Now</button>

            </form>
        </section>
    )
}