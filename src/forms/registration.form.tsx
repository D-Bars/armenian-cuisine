'use client';

import { registerUser } from '@/actions/register';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/react';
import React, { useState } from 'react';

interface IProps {
    onClose: () => void;
}

const RegistrationForm = ({ onClose }: IProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const validateEmail = (email: string) => {
        const emeilRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        return emeilRegex.test(email);
    }
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form:submitted:", formData); 

        const result = await registerUser(formData);
        console.log(result)

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
                    if (!validateEmail(val)) return "Invalid email"
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
                    if (val.length < 6) return "The password must be more than 6 characters long"
                    return null;
                }}
            />
            <Input
                isRequired
                label="Confirm password"
                labelPlacement="outside"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value={formData.confirmPassword}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: ' text-sm focus:outline-none'
                }}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                validate={(val) => {
                    if (!val) return "Confirm password is required"
                    if (val < formData.password) return "Passwords don't match"
                    return null;
                }}
            />

            <div className='flex w-[100%] gap-4 items-center pt-8 justify-end'>
                <Button variant='light' onPress={onClose}>
                    Cancel
                </Button>
                <Button color='primary' type='submit'>
                    Register
                </Button>
            </div>
        </Form>
    );
};
export default RegistrationForm;