import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
     }, []);

    return <div id="dashboard-container" ref={ref}></div>
};