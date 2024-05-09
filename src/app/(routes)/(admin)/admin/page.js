import { getSalesPerMonth, getTotalCustomers, getTotalSales } from '@/backend/utils/actions';
import React from 'react'
import { CircleDollarSign, ShoppingBag, UserRound, LineChart } from 'lucide-react'
import SaleChart from '@/app/components/admin/SaleChart';

export default async function AdminHome() {
    const totalRevenue = await getTotalSales().then((data) => data.totalRevenue);
    const totalOrders = await getTotalSales().then((data) => data.totalOrders);
    const totalCustomers = await getTotalCustomers();

    const graphData = await getSalesPerMonth();

    return (
        <div className="px-8 py-10">
            <p className="font-bold text-3xl">Dashboard</p>
            <hr className='mx-2 my-5 border-2 bg-slate-500' />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                <div className='p-5 border-[1px] border-slate-400 rounded-md'>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h1 className='font-bold text-lg'>Tổng Doanh Thu</h1>
                        <CircleDollarSign className="max-sm:hidden" />
                    </div>
                    <div>
                        <div className="font-bold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(totalRevenue)).replace(/\./g, ',')}</div>
                    </div>
                </div>

                <div className='p-5 border-[1px] border-slate-400 rounded-md'>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h1 className='font-bold text-lg'>Tổng Đơn Hàng</h1>
                        <ShoppingBag className="max-sm:hidden" />
                    </div>
                    <div>
                        <div className="font-bold">{totalOrders}</div>
                    </div>
                </div>

                <div className='p-5 border-[1px] border-slate-400 rounded-md'>
                    <div className="flex flex-row justify-between items-center mb-4">
                        <h1 className='font-bold text-lg'>Tổng Khách Hàng</h1>
                        <UserRound className="max-sm:hidden" />
                    </div>
                    <div>
                        <div className="font-bold">{totalCustomers}</div>
                    </div>
                </div>
            </div>

            <div className='mt-10 p-5 border-[1px] border-slate-400 rounded-md'>
                <div className="flex flex-row gap-2 items-center mb-4">
                    <h1 className='font-bold text-lg'>Biểu đồ bán hàng</h1>
                    <LineChart />
                </div>
                <div>
                    <SaleChart data={graphData} />
                </div>
            </div>
        </div>
    )
}
