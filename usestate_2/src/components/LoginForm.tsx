import React, { useState, ChangeEvent } from 'react';

// 상태 타입 정의
interface FormValues {
    email: string;
    password: string;
    // 추가할 필드들
    nickname?: string;
    phone?: string;
    gender?: string;
    address?: string;
    birthDate?: string;
}

export default function LoginForm() {
    const [values, setValues] = useState<FormValues>({
        email: '',
        password: '',
        // 추가 필드의 초기값 설정 가능
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log(`Email: ${values.email}, Password: ${values.password}`);
    };

    return (
        <div>
            <input type="email" placeholder="Email" value={values.email} name="email" onChange={changeHandler} />
            <input
                type="password"
                placeholder="Password"
                value={values.password}
                name="password"
                onChange={changeHandler}
            />
            <button onClick={handleSubmit}>로그인</button>
        </div>
    );
}
