'use client'
import { useParams } from 'next/navigation'

export default function ServiceDetailPage() {
  const { id } = useParams()

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Service Detail Page</h1>
      <p className="mt-2 text-gray-600">Service ID: {id}</p>
    </div>
  )
}

