import React, { useRef, useState, useEffect } from 'react';
import { Divider } from 'antd';
import styles from '../styles/styles.module.css';
import './text-section.css';

function TextSection({ title, description }) {
    return (
        <div 
            className="text-section"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center'
            }}
        >
            <div className="title"> {title} </div>
            <div className="description"> {description} </div>
        </div>
    );
}

export default TextSection;
