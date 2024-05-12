'use client'
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function AccountBanPage() {
    const [modalIsOpen, setModalIsOpen] = useState(true);

    return (
        <div>
            <Modal
                open={modalIsOpen}
                aria-labelledby="account-ban-modal-title"
                aria-describedby="account-ban-modal-description"
            >
                <div
                    style={{
                        position: 'absolute',
                        width: 500,
                        height: 500,
                        backgroundColor: 'white',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: 'none',
                        top: '50%',
                        left: '50%',
                        borderRadius: '15px',
                        padding: '80px 40px',
                        textAlign: 'center'
                    }}
                >
                    <Image src={'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1715319349/nhaxinh/uploads/4201973_dufux4.png'} width={150} height={150} />
                    <h2 className='font-bold text-3xl tracking-wide my-5' id="account-ban-modal-title">Tài khoản của bạn đã bị khóa</h2>
                    <div className='text-slate-500' id="account-ban-modal-description">
                        Tài khoản của bạn bị khóa vì đã vi phạm điều khoản của người dùng
                    </div>
                </div>
            </Modal>
        </div>
    );
}
