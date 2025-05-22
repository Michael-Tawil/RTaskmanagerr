import Input from "./ui/Input"

export default function Navbar({searchQuery,setSearchQuery}){

    return(
        <div className="flex justify-between gap-5 items-center">
            <h1>RTaskManager</h1>
            <Input
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                placeholder={"Search"}/>

        </div>
    )
}