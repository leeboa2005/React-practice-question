interface ThemeChangerProps {
    setColor: (color: string) => void;
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ setColor }) => {
    return (
        <div>
            <button onClick={() => setColor('lightblue')}>Light Blue</button>
            <button onClick={() => setColor('lightgreen')}>Light Green</button>
            <button onClick={() => setColor('lightpink')}>Light Pink</button>
        </div>
    );
};

export default ThemeChanger;
