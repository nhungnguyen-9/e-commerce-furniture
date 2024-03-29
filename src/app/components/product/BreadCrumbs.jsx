/* eslint-disable react/jsx-key */
import React from 'react'
import Link from "next/link"

export default function BreadCrumbs({ breadCrumbs }) {
    return (
        <section className="mt-6 text-sm">
            <div className="container max-w-screen-xl mx-auto px-4">
                <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
                    {breadCrumbs?.map((breadCrumb, index) => (
                        <li className="inline-flex items-center">
                            <Link
                                href={breadCrumb.url}
                                className="text-gray-600 hover:text-blue-600"
                            >
                                {breadCrumb.name}
                            </Link>
                            {breadCrumbs?.length - 1 !== index && (
                                <div className='ml-3'>/</div>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
