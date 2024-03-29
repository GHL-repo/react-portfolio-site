import React from "react";
import styled from "styled-components";
import {About} from "../styles";

const FaqSection = () => {
    return (
        <Faq>
            <h2>    
                Any Questions <span>FAQ</span>
            </h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Dolor autem neque in laborum sapiente qui quibusdamx </p>
                    <p>Amet ipsum nesciunt corrupti odio adipisci Maxime eaque voluptas at repellendus laudantium perspiciatis eligendi perferendis? Vel voluptatem maxime quisquam nostrum nam modi. Voluptas asperiores labore tenetur repellat iusto Expedita asperiores. </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answer">
                    <p>Dolor autem neque in laborum sapiente qui quibusdamx </p>
                    <p>Amet ipsum nesciunt corrupti odio adipisci Maxime eaque voluptas at repellendus laudantium perspiciatis eligendi perferendis? Vel voluptatem maxime quisquam nostrum nam modi. Voluptas asperiores labore tenetur repellat iusto Expedita asperiores. </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What else?</h4>
                <div className="answer">
                    <p>Dolor autem neque in laborum sapiente qui quibusdamx </p>
                    <p>Amet ipsum nesciunt corrupti odio adipisci Maxime eaque voluptas at repellendus laudantium perspiciatis eligendi perferendis? Vel voluptatem maxime quisquam nostrum nam modi. Voluptas asperiores labore tenetur repellat iusto Expedita asperiores. </p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    )

};

const Faq = styled(About)`
    display: block;  
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    
    .answer {
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }}
`;

export default FaqSection;

