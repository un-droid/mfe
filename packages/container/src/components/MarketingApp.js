import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory(); //copy of browser history

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname}) => {
                const { pathname } = history.location;
                // update the history stack, if not the same path to prevent loops
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });
        // parents history listener
        history.listen(onParentNavigate);
     }, []);

    return <div id="marketing-container" ref={ref}></div>
};