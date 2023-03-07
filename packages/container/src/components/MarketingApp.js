import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp'

export default () => {
    const ref = useRef(null);
    console.log(ref)

    useEffect(() => {
        mount(ref.current);
     }, []);

    return <div id="marketing-container" ref={ref}></div>
};