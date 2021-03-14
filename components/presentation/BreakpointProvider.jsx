import React from 'react';

export const BreakpointContext = React.createContext({
    'xs': false,
    'smUp': false,
    'mdUp': false,
    'lgUp': false,
    'xlUp': false,
    'smDown': false,
    'mdDown': false,
    'lgDown': false,
    'xlDown': false
});

const BreakpointProvider = ({ children }) => {
    const [queryMatch, setQueryMatch] = React.useState({});
    const queries = {
        'xs': '(max-width: 599px)',
        'smUp': '(min-width: 600px)',
        'mdUp': '(min-width: 900px)',
        'lgUp': '(min-width: 1200px)',
        'xlUp': '(min-width: 1800px)',
        'smDown': '(max-width: 600px)',
        'mdDown': '(max-width: 900px)',
        'lgDown': '(max-width: 1200px)',
        'xlDown': '(max-width: 1800px)'
    };

    React.useEffect(() => {
        const mediaQueryLists = {};
        const keys = Object.keys(queries);
        let isAttached = false;

        const handleQueryListener = () => {
            const updatedMatches = keys.reduce((acc, media) => {
                acc[media] = !!(mediaQueryLists[media] && mediaQueryLists[media].matches);
                return acc;
            }, {})
            setQueryMatch(updatedMatches);
        }

        if (window && window.matchMedia) {
            const matches = {};
            keys.forEach(media => {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media] = window.matchMedia(queries[media]);
                    matches[media] = mediaQueryLists[media].matches;
                } else {
                    matches[media] = false;
                }
            });
            setQueryMatch(matches);
            isAttached = true;
            keys.forEach(media => {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media].addListener(handleQueryListener);
                }
            });
        }

        return () => {
            if (isAttached) {
                keys.forEach(media => {
                    if (typeof queries[media] === 'string') {
                        mediaQueryLists[media].removeListener(handleQueryListener);
                    }
                });
            }
        }
    }, []);

    return (
        <BreakpointContext.Provider value={ queryMatch }>
            {children}
        </BreakpointContext.Provider>
    )
}

function useBreakpoint() {
    const context = React.useContext(BreakpointContext);
    return context;
}

export { useBreakpoint, BreakpointProvider };
