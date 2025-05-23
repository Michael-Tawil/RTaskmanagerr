import Button from "./ui/Button"
export default function TaskCard({ttitle,tdesc,deltask,mrkdone,dueDate,status}){
    return(
        <div>
            <h3>Title: {ttitle}</h3>
            <p>Info: {tdesc}</p>
            <p>Due Date: {dueDate}</p>
            <p>Status: {status}</p>
            <Button onClick={deltask}
             children={"Delete"}/>
            <Button onClick={mrkdone}
            children={status === "Pending"? "Done" : "Pending"}/>
        </div>
    )
}