'use client'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Trash2 } from 'lucide-react'
import { deleteOrder } from '@/backend/services/admin/order'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function DeleteOrder({ id, onDeleteSuccess }) {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDelete = async () => {
        try {
            const response = await deleteOrder(id)
            console.log('🚀 ~ handleDelete ~ response:', response)
            if (response.success) {
                toast.success(response.message)
                onDeleteSuccess()
                router.push('/admin/orders')
            } else {
                toast.error(response.message)
            }
        } catch (error) {
            console.log('🚀 ~ handleDelete ~ error:', error)
        } finally {
            setOpen(false)
        }
    }

    return (
        <div>
            <Trash2 onClick={handleClickOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className='text-red-500'>
                    {"Bạn chắc chắn muốn xóa?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Hành động này không thể quay lại. Dữ liệu phòng này sẽ mất vĩnh viễn!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className='bg-green-600 text-white font-bold hover:bg-green-800'>Hủy</Button>
                    <Button onClick={handleDelete} autoFocus className='bg-red-600 text-white font-bold hover:bg-red-700'>
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}