import React, { createContext,Component } from 'react';
export const ThemeContexts = createContext();

class ThemeContext extends Component {
    state = {
        isLightTheme: true,
        light: { stntax: '#555' },
        dark: { syntax: '#ddd' }
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <ThemeContexts.Provider value={{...this.state}}>
                    {this.props.children}
            </ThemeContexts.Provider>
            
        );
    }
}

export default ThemeContext;