import Input from "./ui/Input"

export default function Navbar({searchQuery,setSearchQuery,setView}){

    return(
        <div className="flex justify-between gap-5 items-center">
            <h1>RTaskManager</h1>
            <Input
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                placeholder={"Search"}/>
            <select onChange={e=>setView(e.target.value)}>
                <option value="list">List View</option>
                <option value="cal">Calendar View</option>
            </select>

        </div>
    )
}