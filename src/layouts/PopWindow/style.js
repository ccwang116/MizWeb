export default (theme) => ({
    box: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: theme.zIndexes.popWindow,
        background: 'rgba(0,0,0,.6)',
        textAlign: 'center',
    },
    window: {
        display: 'inline-block',
        position: 'relative',
        width: 'auto',
        minWidth: '460px',
        minHeight: '100px',
        maxWidth: 'calc(100% - 20px)',
        maxHeight: 'calc(100% - 20px)',
        padding: "18px 26px 0 26px",
        verticalAlign: 'middle',
        borderRadius: '10px',
        background: theme.popWindow.background,
        //overflow: 'hidden',
        boxShadow: "0px 5px 16px 0 rgba(64, 64, 64, 0.39)",
        lineHeight: 'normal',
        textAlign: 'left',
        border: `4px solid ${theme.popWindow.borderColor}`,
        [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
            minWidth: '240px',
            "&.full-mode": {
                width: 'calc(100% - 20px)',
                height: 'calc(100% - 20px)',
            },
            "&.full-width": {
                width: 'calc(100% - 20px)',
            } 
        },
        [`@media (min-width: ${theme.breakpoints.mobile + 1}px)`]: {

        },
        "&.light": {
            background: theme.popWindow.background,
        },
        "&.dark": {
            background: theme.colors.blue1,
        },
    },
    title: {
        width: "calc(100% + 30px)",
        margin: "0 -15px",
    },
    closeBtn: {
        display: 'block',
        fontSize: '14px',
        cursor: 'pointer',
        position: 'absolute',
        top: "12px",
        right: "12px",
        padding: 0,
        margin: 0,
        width: '34px',
        height: '34px',
        lineHeight: '40px',
        textAlign: 'center',
        webkitAppearance: "none",
        border: "none",
        outline: "none",
        background: "transparent",
        '& svg': {
            width: '12px',
            height: '12px',
            margin: '10px',
            "& path": {
                fill: theme.popWindow.borderColor,
            }
        },
        "&.light": {
            '&:hover svg path': {
                fill: theme.colors.blue1,
            },
        },
        "&.dark": {
            '&:hover svg path': {
                fill: theme.colors.green7,
            },
        }
    },
    windowContent: {
        display: 'inline',
        margin: '0',
        padding: '0',
        width: '100%',
        height: 'calc(100% - 40px)',
        overflow: 'auto',
        [`@media (max-width: ${theme.breakpoints.mobile}px)`]: {
            ".full-mode & > div": {
                minHeight: "calc(100% - 36px)",
            },
        },
        "& > div": {
            minHeight: "calc(100% - 31px)",
            padding: "0 15px 25px 15px",
            margin: "0 -15px",
            overflow: "auto",
            "&::-webkit-scrollbar": {
                background: "transparent",
                "&:vertical": {
                    width: "5px",
                },
            },
            "&::-webkit-scrollbar-track-piece": {
                background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
                background: theme.colors.gray11,
                borderRadius: "4px",
            },
        },
    },
});
