import React from 'react'
import { Paper, Button } from '@material-ui/core';

const QuoteItem = (props) => {
    return (
        <div>
            <Paper>
            <h2>{props.item.author}</h2>
            <p>{props.item.text}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
        </div>
    )
}

export default QuoteItem
