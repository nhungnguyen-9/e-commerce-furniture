import {
    LayoutDashboard,
    Shapes,
    ShoppingBag,
    Tag,
    UsersRound,
    FolderKanban
} from "lucide-react"

export const navLinks = [
    {
        url: "/admin",
        icon: <LayoutDashboard />,
        label: "Trang chủ",
    },
    {
        url: "/admin/danh-muc-phong",
        icon: <Shapes />,
        label: "Danh mục phòng",
    },
    {
        url: "/admin/danh-muc",
        icon: <FolderKanban />,
        label: "Danh mục sản phẩm",
    },
    {
        url: "/admin/san-pham",
        icon: <Tag />,
        label: "Sản phẩm",
    },
    {
        url: "/admin/orders",
        icon: <ShoppingBag />,
        label: "Đơn hàng",
    },
    {
        url: "/admin/customers",
        icon: <UsersRound />,
        label: "Khách hàng",
    },
];