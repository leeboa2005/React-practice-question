import React, { useState } from 'react';

function ToggleSwitch() {
    const [isOn, setIsOn] = useState<boolean>(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return (
        <div>
            <p>Status: {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={handleToggle}>Toggle</button>
        </div>
    );
}

export default ToggleSwitch;
