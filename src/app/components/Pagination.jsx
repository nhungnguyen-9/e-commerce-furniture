import React from 'react'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

const Pagination = ({ currentPage, roomsPerPage, totalRooms, paginate }) => {
    const pageNumbers = []
    const totalPages = Math.ceil(totalRooms / roomsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const maxPagesToShow = 5;
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPagesToShow) {
        if (currentPage <= maxPagesToShow - Math.floor(maxPagesToShow / 2)) {
            endPage = maxPagesToShow;
        } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
        } else {
            startPage = currentPage - Math.floor(maxPagesToShow / 2);
            endPage = currentPage + Math.floor(maxPagesToShow / 2);
        }
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
                {pageNumbers.slice(startPage - 1, endPage).map(number => (
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
