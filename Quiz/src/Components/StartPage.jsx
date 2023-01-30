export default function StartPage(props){
    return(
        <div className="start_page">
            <h1>Quizzical</h1>
            <p>Easy level quiz on Computer Science</p>
            <button className="start_button" onClick={props.onClick}>Start Quiz</button>
        </div>
    )
}