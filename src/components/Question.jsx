import { useState } from "react";
import "./Question.scss";

function Question({ question }) {
  const [open, setOpen] = useState(false);
  return (
    <li onClick={() => setOpen(!open)} className="item">
      <div className="question">
        <p>{question.question}</p>
        <span className="icon">
          {open && (
            <svg
              className="iconOpen"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
            >
              <path
                fill="none"
                stroke="#fa5757"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          )}
          {!open && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
              <path
                fill="none"
                stroke="#5267DF"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          )}
        </span>
      </div>
      {open && <p className="answer">{question.answer}</p>}
    </li>
  );
}

export default Question;
