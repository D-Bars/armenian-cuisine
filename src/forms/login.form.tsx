'use client';

import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/react';
import React, { useState } from 'react';

interface IProps {
    onClose: () => void;
}

const LoginForm = ({ onClose }: IProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form:submitted:", formData);

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