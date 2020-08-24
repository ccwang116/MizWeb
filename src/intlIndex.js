import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { IntlProvider } from "react-intl";
import Spanish from "./languages/es-MX.json";
import English from "./languages/en-US.json";

const local = navigator.language;

let lang;
if (local === "en-US"){
    lang = English;
}else{
    lang = Spanish
}
//如果想測試語系 直接在message={}輸入Spanish即可
ReactDOM.render(<IntlProvider locale={local}  messages={lang} ><App /></IntlProvider>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
