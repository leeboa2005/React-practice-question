import { useState, ChangeEvent } from 'react';

function LoginForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        console.log(`이메일: ${email}, 비밀번호: ${password}`);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setEmail(target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setPassword(target.value);
    };

    return (
        <div>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /> <br />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /> <br />
            <button onClick={handleSubmit}>로그인</button>
        </div>
    );
}

export default LoginForm;
