import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext'
import MyNavbar from './components/MyNavbar';
function contextApp() {
    return (
        <div>
            <ThemeContextProvider>
                <MyNavbar></MyNavbar>
            </ThemeContextProvider>
        </div>
    )
}

export default contextApp;