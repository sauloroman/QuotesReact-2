const Quote = ({ author, quote, color }) => {

    return (
        <div>
            <i style={{ color: `${color}`}} className='bx bxs-quote-alt-left quote-icon'></i>
            <div className="quote__info">
                <p>{ quote }</p>
                <cite>&mdash; { author } &mdash;</cite>
            </div>
        </div>
    )
}

export default Quote