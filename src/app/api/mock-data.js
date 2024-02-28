export const mockData = {
    // danh mục - route như này: http://nhaxinh/danh-muc/ten-phong/danh-muc-san-pham
    categories: {
        roomOrderIds: ['room-category-1', 'room-category-2', 'room-category-3', 'room-category-4', 'room-category-5', 'room-category-6', 'room-category-7'],
        // danh mục phòng
        rooms: [
            {
                _id: 'room-category-1',
                categoryName: 'Phòng khách',
                description: 'Danh mục Phòng khách',
                image: 'https://nhaxinh.com/wp-content/uploads/2023/07/BST-Coastal-3-3.jpg',
                categoriesProductOrderIds: ['product-category-1', 'product-category-2', 'product-category-3'],
                // danh mục sản phẩm
                categoriesProduct: [
                    {
                        _id: 'product-category-1',
                        roomId: 'room-category-1',
                        categoryProductName: 'Sofa',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-sofa-jazz-mau-cognac-phong-cach.jpg'
                    },
                    {
                        _id: 'product-category-2',
                        roomId: 'room-category-1',
                        categoryProductName: 'Armchair',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/banner-armchair-nha-xinh.jpg'
                    },
                    {
                        _id: 'product-category-3',
                        roomId: 'room-category-1',
                        categoryProductName: 'Bàn nước',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-bride-nau-tram-2.jpg'
                    },
                ]
            },
            {
                _id: 'room-category-2',
                categoryName: 'Phòng ăn',
                description: 'Danh mục Phòng ăn',
                image: 'https://nhaxinh.com/wp-content/uploads/2022/01/ban-an-pio-1.jpg',
                categoriesProduct: [
                    {
                        _id: 1,
                        roomId: 'room-category-2',
                        categoryProductName: 'Bàn ăn',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-ban-an-phong-dep-221121.jpg'
                    },
                    {
                        _id: 2,
                        roomId: 'room-category-2',
                        categoryProductName: 'Ghế ăn',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-elegance-ban-an.jpg'
                    },
                    {
                        _id: 3,
                        roomId: 'room-category-2',
                        categoryProductName: 'Tủ ly',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-tu-ly-banner.jpg'
                    },
                ]
            },
            {
                _id: 'room-category-3',
                categoryName: 'Phòng ngủ',
                description: 'Danh mục Phòng ngủ',
                image: 'https://nhaxinh.com/wp-content/uploads/2021/11/noi-that-phong-ngu-nha-xinh.jpg',
                categoriesProduct: [
                    {
                        _id: 1,
                        roomId: 'room-category-3',
                        categoryProductName: 'Giường ngủ',
                        image: 'https://nhaxinh.com/wp-content/uploads/2022/05/phong-ngu-hien-dai-thanh-lich-skagen-13522.jpg'
                    },
                    {
                        _id: 2,
                        roomId: 'room-category-3',
                        categoryProductName: 'Tủ áo',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-tu-ao-dep-221121.jpg'
                    },
                    {
                        _id: 3,
                        roomId: 'room-category-3',
                        categoryProductName: 'Bàn nước',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nem-nha-xinh.jpg'
                    },
                ]
            },
            {
                _id: 'room-category-4',
                categoryName: 'Phòng làm việc',
                description: 'Danh mục Phòng làm việc',
                image: 'https://nhaxinh.com/wp-content/uploads/2021/09/ban-lam-viec-maxine-713x450-1.jpeg',
                categoriesProduct: []
            },
            {
                _id: 'room-category-5',
                categoryName: 'Bếp',
                description: 'Danh mục Bếp',
                image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-tu-bep-dep-221121.jpg',
                categoriesProduct: [
                    {
                        _id: 1,
                        roomId: 'room-category-5',
                        categoryProductName: 'Tủ bếp',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-tu-bep-dep-221121.jpg'
                    }
                ]
            },
            {
                _id: 'room-category-6',
                categoryName: 'Hàng trang trí',
                description: 'Danh mục Hàng trang trí',
                image: 'https://nhaxinh.com/wp-content/uploads/2022/04/banner-trang-chu-san-pham-dep-oki.jpg',
                categoriesProduct: []
            },
            {
                _id: 'room-category-7',
                categoryName: 'Ngoại thất',
                description: 'Danh mục Ngoại thất',
                image: 'https://nhaxinh.com/wp-content/uploads/2022/04/banner-trang-chu-san-pham-dep-oki.jpg',
                categoriesProduct: []
            }
        ]
    }
}