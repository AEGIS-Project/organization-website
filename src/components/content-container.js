import React, { useRef, useState, useEffect } from 'react';
import { Divider } from 'antd';
import styles from '../styles/styles.module.css';
import './text-section.css';

function TextSection({ children }) {
    return (
        <div 
            style={{
                position: "relative",
                width:"60%",
                marginLeft:"20%"
            }}
        >
            {children}
        </div>
    );
}

export default TextSection;
