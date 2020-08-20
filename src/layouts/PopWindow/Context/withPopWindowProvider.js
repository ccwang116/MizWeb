import React, { useState, useEffect } from 'react';

import { Provider } from './Context';

const generateRandomString = (length = 10) => {
    var result = '';
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
};

const withPopWindowProvider = (WrappedComponent) => {
    function WithPopWindowProvider(props) {
        const [storage, setStorage] = useState({})
        const [components, setComponents] = useState([])
        const [closeByButtonOnly, setCloseByButtonOnly] = useState(false)
        const [isFullModeForMobile, setIsFullModeForMobile] = useState(false)
        const [isFullWidthForMobile, setIsFullWidthForMobile] = useState(false)

        const generateLockerKey = () => {
            const key = generateRandomString(10);
            if (storage.hasOwnProperty(key)) {
                return generateLockerKey();
            }
            return key;
        }

        const uploadData = (data, key = null) => {
            const lockerKey = typeof key === "string" ? key : generateLockerKey(10);
            setStorage({ ...storage, lockerKey: Object.assign(data) })

            return lockerKey;
        }

        const downloadData = (key, deleteAfter = false) => {
            if (storage.hasOwnProperty(key)) {
                return storage[key];
            }
            return null;
        }

        const openPopWindow = ({ component, componentProps, isFullModeForMobile = false, closeByButtonOnly = false, closePopWindowFunc = null, isFullWidthForMobile = false }) => {
            const componentObject = {
                component,
                componentProps: {
                    ...componentProps,
                    appearanceStyle: componentProps.hasOwnProperty("appearanceStyle") ? componentProps.appearanceStyle : "light",
                },
                closePopWindowFunc: (closePopWindowFunc === null ? closePopWindow : closePopWindowFunc),
            };
            setComponents([componentObject])
            setCloseByButtonOnly(closeByButtonOnly)
            setIsFullModeForMobile(isFullModeForMobile)
            setIsFullWidthForMobile(isFullWidthForMobile)
        }

        const pushPopWindow = ({ component, componentProps, closePopWindowFunc = null, isFullModeForMobile = false, isFullWidthForMobile = false }) => {
            const target = components.find(componentObj => { return componentObj.component === component });
            if (target) {
                const index = components.indexOf(target);
                setComponents(components.slice(0, index + 1))
                
            } else {
                const newArr = components
                newArr.push({
                    component,
                    componentProps: {
                        ...componentProps,
                        appearanceStyle: componentProps.hasOwnProperty("appearanceStyle") ? componentProps.appearanceStyle : "light",
                    },
                    closePopWindowFunc: (closePopWindowFunc === null ? closePopWindow : closePopWindowFunc),
                });
                setComponents(newArr)
                setIsFullModeForMobile(isFullModeForMobile)
                setIsFullWidthForMobile(isFullWidthForMobile)
            }
        }

        const shiftPopWindow = ({ component = null, callback = null } = { component: null, callback: null }) => {
            if (component === null) {
                const cbfunc = () => {
                    const oldArr = components
                    oldArr.pop();
                    setComponents(oldArr)
                if (typeof callback === "function") {
                    callback();
                    }
                }
                
            } else if (components.length > 0) {
            }
        }

        const closePopWindow = () => {
            setComponents([])
            setCloseByButtonOnly(false)
            setIsFullModeForMobile(false)
        }

        
        return (
            <Provider value={{
            storage,
            components,
            closeByButtonOnly,
            isFullModeForMobile,
            isFullWidthForMobile,
            openPopWindow,
            pushPopWindow,
            shiftPopWindow,
            closePopWindow,
            uploadData,
            downloadData,
            generateLockerKey,
            }}>
                <WrappedComponent {...props} />
            </Provider>
        );
        
    }
    return WithPopWindowProvider;
};

export default withPopWindowProvider;
