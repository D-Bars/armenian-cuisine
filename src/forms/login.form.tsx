'use client';

import { signInWithCredentials } from '@/actions/sign-in';
import { useAuthStore } from '@/store/auth.store';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/react';
import { useSession, getSession} from 'next-auth/react';
import React, { useState } from 'react';

interface IProps {
    onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
    const { update } = useSession();
    const { setAuthState } = useAuthStore();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await signInWithCredentials(formData.email, formData.password);
        if (result?.error) {
            console.error("Login error: ", result.error);
            return;
        }
        await update();

        const fresh = await getSession();

        setAuthState(fresh ? "authenticated" : "unauthenticated", fresh);
        onClose();
    }

    return (
        <Form className="w-full max-w-xs" onSubmit={onSubmit}>
            <Input
                isRequired
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: ' text-sm focus:outline-none'
                }}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                validate={(val) => {
                    if (!val) return "Email is required"
                    return null;
                }}
            />
            <Input
                isRequired
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: ' text-sm focus:outline-none'
                }}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                validate={(val) => {
                    if (!val) return "Password is required"
                    return null;
                }}
            />


            <div className='flex w-[100%] gap-4 items-center pt-8 justify-end'>
                <Button variant='light' onPress={onClose}>
                    Cancel
                </Button>
                <Button color='primary' type='submit'>
                    Log In
                </Button>
            </div>
        </Form>
    );
};
export default LoginForm;