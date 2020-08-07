import React from 'react';
import { Divider } from 'antd';
import './section-header.css';

function SectionHeader({ text, children }) {
    return (
        <div 
            className="section-header"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div style={{borderLeft: "thin solid #111111", height: "100px", marginTop: "50px", opacity: "0.1"}}></div>
            <Divider>{children}</Divider>
        </div>
    );
}

export default SectionHeader;
