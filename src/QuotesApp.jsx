import { useEffect, useState } from "react";

import {Quote, Button} from "./components"

import { quotes, colors } from './data';
import { randomNumber } from "./helpers/randomNumber";

const QuotesApp = () => {

    const [ quote, setQuote ] = useState({});
    const [ color, setColor ] = useState('');

    const getQuote = () => setQuote( quotes[ randomNumber( quotes )] );
    const getColor = () => setColor( colors[ randomNumber( colors )]);

    const getFeatures = () => {
        getQuote();
        getColor();
    }

    useEffect( () => {
        getFeatures();
    }, [] );


    return (
        <div className="container content-center">

            <div 
                style={{ backgroundColor: `${color}`}}
                className="bg-line" aria-label="background generated random" role="background"></div>

            <div className="quote">
                <Quote {...quote } color={ color }/>
                <Button
                    type="button"
                    getFeatures = { getFeatures }
                    color={ color } />
            </div>

        </div>
    )
}

export default QuotesApp