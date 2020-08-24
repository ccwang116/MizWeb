import React from 'react';
import { FormattedMessage } from "react-intl";
function intlHome() {
    return(
        <>
        <h1>
        <FormattedMessage
        id="app.header"
        defaultMessage="Edit <code>{filename}</code> Hello"
        value={{filename:"intlHome",code:(word)=><strong>{word}</strong>}}
        />
        </h1>
        <h2>
        <FormattedMessage
        id="app.content"
        defaultMessage="Good morning"
        />
        </h2>
        <h3>
        <FormattedMessage
        id="app.channel.plug"
        defaultMessage="Good night{nickname}"
        value={{nickname:"Ivy"}}
        />
        </h3>

        </>
    )
}

export default intlHome;