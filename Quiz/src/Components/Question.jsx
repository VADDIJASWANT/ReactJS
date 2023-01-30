import { useEffect, useState } from "react";


export default function Question(props){
    const [selectedOption, setSelectedOption] = useState(null);
    const [option,setOptions] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(()=>{
        const options = [...props.incorrectAns,props.correctAns]
        setOptions(options.sort(() => Math.random() - 0.5));
    },[props.incorrectAns, props.correctAns])

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsCorrect(option === props.correctAns);
    };

    useEffect(() => {
        if (props.isRevealed && selectedOption === props.correctAns) {
          props.setCount(count => count + 1);
        }
    }, [props.isRevealed, selectedOption, props.correctAns, props.setCount]);
    console.log(isCorrect);
    return(
        <div className="ques">
            <p>{props.question}</p>
            <div className="options">
                {option.map((option)=>{
                    return (
                        <span
                            key={option}
                            className='option'
                            style={{
                                fontSize:'10.2px',
                                color:'#293264',
                                height:'20px',
                                backgroundColor:
                                props.isRevealed
                                                ? option === props.correctAns
                                                    ? 'green'
                                                    : selectedOption === option
                                                        ? selectedOption === props.correctAns
                                                            ? '#94d7a2'
                                                            : '#f8bcbc'
                                                        : 'transparent'
                                                : selectedOption === option
                                                    ? '#d6dbf5'
                                                    : 'transparent',
                                cursor: !props.isRevealed ? 'pointer' : 'default',
                                display: 'inline-block',
                                padding:'0px 5px 0px 5px',
                                border: selectedOption === option ? 'none' : '1px solid black',
                                borderRadius:'5px',
                            }}
                            onClick={() => !props.isRevealed && handleOptionClick(option)}
                            >
                            {option}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}