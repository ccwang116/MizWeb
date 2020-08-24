import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import intlHome from './pages/intlHome';

import { IntlProvider } from "react-intl";

import Wrapper from './components/Wrapper'
// import Spanish from "./languages/es-MX.json";
// import English from "./languages/en-US.json";

// const local = navigator.language;

// let lang;
// if (local === "en-US"){
//     lang = English;
// }else{
//     lang = Spanish
// }
//如果想測試語系 直接在message={}輸入Spanish即可,在locale打"es-MX"測試時區
// ReactDOM.render(<IntlProvider locale={local}  messages={lang} ><intlHome date={Date.now()} /></IntlProvider>,document.getElementById('root')
// );
ReactDOM.render(<Wrapper><intlHome date={Date.now()} /></Wrapper>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
