import React,{ useContext } from 'react';
import { FormattedMessage, FormattedDate } from "react-intl";
import Wrapper from "../components/Wrapper";
import WrapperConsumer from "../components/WrapperConsumer";

import { propTypes } from 'react-bootstrap/esm/Image';

function IntlHome(props) {
    const {localInfo} = props
    const {locale, selectLang} = localInfo

    return(
        <>
        <h1>hello,this is home page</h1>
        <select value={locale} onChange={selectLang}>
            <option value="en-US">Eng</option>
            <option value="es-MX">Spa</option>
        </select>
        <h1>
        <FormattedMessage
        id="app.header"
        defaultMessage="Edit <code>{filename}</code> Hello"
        value={{filename:"pages/intlHome.js",code:(word)=><strong>{word}</strong>}}
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
        <FormattedDate
        value={props.date}
        />
        </h3>

        </>
    )
}

export default Wrapper(WrapperConsumer(IntlHome));