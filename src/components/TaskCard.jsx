import Button from "./ui/Button"
export default function TaskCard({ttitle,tdesc,deltask,mrkdone,iKey}){
    return(
        <div>
            <h3>{ttitle}</h3>
            <p>{tdesc}</p>
            <Button onClick={deltask}
             children={"Delete"}/>
            <Button onClick={mrkdone}
            children={"Mark Done"}/>
        </div>
    )
}