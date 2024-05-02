'use client'
import React, { useEffect, useState } from 'react'
import RoomForm from '@/app/components/admin/danh-muc-phong/RoomForm'
import { getOneRoom } from '@/backend/services/admin/room'

export default function RoomDetailPage({ params }) {
  const { slug } = params
  const [roomData, setRoomData] = useState(null)

  useEffect(() => {
    const fetchOneRoom = async () => {
      try {
        const data = await getOneRoom(slug)
        setRoomData(data.room)
      } catch (error) {
        console.log('🚀 ~ fetchOneRoom ~ error:', error)
      }
    }

    if (slug) {
      fetchOneRoom()
    }
  }, [slug])

  return (
    <div>
      <RoomForm roomData={roomData} />
    </div>
  )
}
