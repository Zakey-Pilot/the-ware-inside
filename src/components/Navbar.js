export default async function Navbar(
  {title}
){
    return(
        <>
            <div className="bg-black p-4">
                <h1 className="font-bold text-white"> {title}</h1>
            </div>
        </>
    )
}