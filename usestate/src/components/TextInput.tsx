import React, { useState } from 'react';

function TextInput() {
    const [text, setText] = useState<string>('');
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    return (
        <div>
            <input type="text" value={text} onChange={handleInput} />
            <p>Input: {text} </p>
        </div>
    );
}

export default TextInput;
