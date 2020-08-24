import React, { useState, } from 'react';
import { IntlProvider } from "react-intl";
import Spanish from "../languages/es-MX.json";
import English from "../languages/en-US.json";

const Context = React.createContext();
const Provider = Context.Provider
const local = navigator.language;

let lang;
if (local === "en-US") {
    lang = English;
} else {
    lang = Spanish
}
const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang)

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === "es") {
            setMessages(Spanish)
        } else {
            setMessages(English)
        }
    }
    return (
        <Provider value={{ locale, selectLang }}>
            <IntlProvider messages={messages} locale={local}>
                {props.children}
            </IntlProvider>
        </Provider>
    )
}

export default Wrapper;