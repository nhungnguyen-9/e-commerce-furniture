import React, { useEffect, useState } from "react"
import { Plus, Trash } from "lucide-react"
import Image from "next/image"
import axios from "axios"
import { deleteImage } from "@/app/utils/cloudinary/image"

const ImageCategoryUpload = ({ onChange, onRemove, value }) => {
    const [images, setImages] = useState(value || [])

    useEffect(() => {
        setImages(value || [])
    }, [value])

    const handleUpload = async (event) => {
        const file = event.target.files[0]
        if (!file) return

        try {
            const formData = new FormData()
            formData.append("file", file)
            formData.append("upload_preset", "ml_default")
            const publicId = `categories/${Date.now()}`;
            formData.append("public_id", publicId);

            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            )
            const imageUrl = response.data.secure_url
            onChange(imageUrl)
            setImages([...images, imageUrl])
        } catch (error) {
            console.error("Error uploading image:", error)
        }
    }

    const handleRemove = async (url) => {
        try {
            const publicId = url.split('/').slice(-2).join('/').split('.')[0]
            await deleteImage(`nhaxinh/${publicId}`)
            onRemove(url)
            setImages(images.filter(image => image !== url))
        } catch (error) {
            console.error('Error removing image:', error)
        }
    }

    return (
        <div className="">
            <div className="mb-4 flex flex-wrap items-center gap-4">
                {images.map((url, index) => (
                    <div key={index} className="relative w-[200px] h-[200px]">
                        <div className="absolute top-0 right-4 z-10">
                            <button
                                type="button"
                                onClick={() => handleRemove(url)}
                                className="bg-red-500 p-2 rounded-md text-white"
                            >
                                <Trash className="h-4 w-4" />
                            </button>
                        </div>
                        <Image src={url} alt="collection" className="object-cover rounded-lg" fill />
                    </div>
                ))}
            </div>

            <label htmlFor="imageUpload" className="bg-gray-600 text-white flex items-center gap-1 p-3 rounded-md hover:bg-gray-700 cursor-pointer sm:w-full md:w-[15%]">
                <Plus className="h-6 w-6 mr-2" />
                <p>Upload Image</p>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleUpload}
                />
            </label>
        </div>
    );
};

export default ImageCategoryUpload;
