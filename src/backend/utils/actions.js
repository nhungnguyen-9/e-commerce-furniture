import { connect } from "../config/mongodb"
import Order from "../models/Order"
import User from "../models/User"

export const getTotalSales = async () => {
    await connect()
    const orders = await Order.find()
    const totalOrders = orders.length
    const totalRevenue = orders.reduce((acc, order) => acc + order.totalPrice, 0)
    return { totalOrders, totalRevenue }
}

export const getTotalCustomers = async () => {
    await connect()
    const customers = await User.find()
    const totalCustomers = customers.length
    return totalCustomers
}

export const getSalesPerMonth = async () => {
    await connect()
    const orders = await Order.find()

    const salesPerMonth = orders.reduce((acc, order) => {
        const monthIndex = new Date(order.createdAt).getMonth()
        acc[monthIndex] = (acc[monthIndex] || 0) + order.totalPrice
        return acc
    }, {})

    const graphData = Array.from({ length: 12 }, (_, i) => {
        const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(0, i))
        return { name: month, sales: salesPerMonth[i] || 0 }
    })

    return graphData
}