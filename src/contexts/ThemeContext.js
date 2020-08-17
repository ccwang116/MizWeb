import React, { createContext,Component } from 'react';
export const ThemeContext = createContext();

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
            <ThemeContext.Provider value={{...this.state}}>
                    {this.props.children}
            </ThemeContext.Provider>
            
        );
    }
}

export default ThemeContext;