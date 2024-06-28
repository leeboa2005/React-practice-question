import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import ToggleSwitch from './components/ToggleSwitch';
import ItemList from './components/ItemList';
import ThemeChanger from './components/ThemeChanger';

function App() {
    const [color, setColor] = useState<string>('white');
    return (
        <div style={{ background: color, width: '100vw', height: '100vh' }}>
            <Counter />
            <TextInput />
            <ToggleSwitch />
            <ItemList />
            <ThemeChanger setColor={setColor} />
        </div>
    );
}

export default App;
