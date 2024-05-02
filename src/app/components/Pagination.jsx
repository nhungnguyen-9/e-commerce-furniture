import React from 'react'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

const Pagination = ({ currentPage, roomsPerPage, totalRooms, paginate }) => {
    const pageNumbers = []
    const totalPages = Math.ceil(totalRooms / roomsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <nav className='w-full flex justify-center'>
            <ul className='flex space-x-2 items-center'>
                {currentPage > 1 && (
                    <li>
                        <ChevronsLeft
                            onClick={() => paginate(currentPage - 1)}
                            className='hover:text-gray-600 focus:outline-none cursor-pointer'
                        />
                    </li>
                )}
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`${currentPage === number
                                ? 'bg-blue-500 text-white'
                                : 'bg-white text-gray-700'
                                } font-medium px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white focus:outline-none`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li>
                        <ChevronsRight
                            onClick={() => paginate(currentPage + 1)}
                            className='hover:text-gray-600 focus:outline-none cursor-pointer'
                        />
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination
