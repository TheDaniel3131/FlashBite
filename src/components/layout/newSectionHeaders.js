export default function NewSectionHeaders({mainHeader, subHeader}){
    return(
        <>
            <h3 className="uppercase text-gray-500 font-semibold leading-4">{mainHeader}</h3>
            <h2 className="text-primary font-bold text-4xl italic">{subHeader}</h2>
        </>
    )
}