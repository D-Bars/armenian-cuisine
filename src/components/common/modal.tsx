'use client';

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@heroui/react";
import { ReactNode } from 'react';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    size?: 'xs' | "sm" | "md" | "lg" | "xl";
}

const CustomModal = ({ isOpen, onClose, title, children, size = "xs" }:IProps) => {
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} size={size}>
                <ModalContent className='text-[var(--font-black)]'>
                    <ModalHeader className='border-b'>
                        <h3 className='text-xl text background font-semibold'>{title}</h3>
                    </ModalHeader>
                    <ModalBody className="space-y-4 py-6">{children}</ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
};
export default CustomModal;