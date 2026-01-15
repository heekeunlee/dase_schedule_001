import React from 'react';
import './PersonSwitcher.css';

const PersonSwitcher = ({ currentPerson, onSwitch }) => {
    return (
        <div className="person-switcher-container">
            <div className="person-switcher">
                <button
                    className={`person-btn ${currentPerson === 'dawon' ? 'active dawon' : ''}`}
                    onClick={() => onSwitch('dawon')}
                >
                    <span className="emoji">👧</span> 다원
                </button>
                <button
                    className={`person-btn ${currentPerson === 'sechan' ? 'active sechan' : ''}`}
                    onClick={() => onSwitch('sechan')}
                >
                    <span className="emoji">👦</span> 세찬
                </button>
            </div>
        </div>
    );
};

export default PersonSwitcher;
