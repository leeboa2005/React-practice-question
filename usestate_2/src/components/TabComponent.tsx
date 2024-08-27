import React, { useState } from 'react';

const TabComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const content = ['Content 1', 'Content 2', 'Content 3'];

    return (
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button key={tab} onClick={() => setActiveTab(index)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div>{content[activeTab]}</div>
        </div>
    );
};

export default TabComponent;
