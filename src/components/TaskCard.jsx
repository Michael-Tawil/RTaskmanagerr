export default function TaskCard({ttitle,tdesc,deltask,mrkdone,iKey}){
    return(
        <div>
            <h3>{ttitle}</h3>
            <p>{tdesc}</p>
            <button onClick={deltask}>Delete</button>
            <button onClick={mrkdone}>Mark Done</button>
        </div>
    )
}