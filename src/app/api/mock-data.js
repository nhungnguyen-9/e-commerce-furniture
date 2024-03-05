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
    },
    products: [
        // sản phẩm liên quan tới sofa
        {
            _id: 1,
            ProductName: 'Sofa Bolero 3 chỗ + Đôn M3 vải xanh MB408',
            Description: 'Sofa Bolero 3 chỗ + Đôn M3 vải xanh MB408',
            Price: 24550001,
            Discount: [],
            InStock: true,
            Materials: 'Chân kim loại sơn đen, bọc vải cao cấp, bao gồm sofa băng dài & đôn',
            Size: 'Sofa: D2250 - R900 - C790, Đôn: D720 - R720 - C420',
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-1-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-2-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-3-768x511.jpg'
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-1'
        },
        {
            _id: 2,
            ProductName: 'Sofa Maxine M2-3C Da Mush 1141-VACT8377',
            Description: 'Sofa Maxine M2-3C Da Mush 1141-VACT8377',
            Price: 47140000,
            Discount: [],
            InStock: true,
            Materials: 'Chân kim loại màu gold - Khung da bò tự nhiên - Nệm vải',
            Size: 'D2100 - R850 - C830 mm',
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-1-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-2-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-3.jpg'
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-1'
        },
        {
            _id: 3,
            ProductName: 'Sofa Happy 2 chỗ và 2 armchair vải',
            Description: 'Sofa Happy 2 chỗ và 2 armchair vải',
            Price: 45220000,
            Discount: 50,
            InStock: true,
            Materials: 'Khung gỗ thông - Bọc vải cao cấp',
            Size: ['Sofa 2 chỗ D1500-R820-C810mm', '1 chỗ: D740-R820-C810mm'],
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2021/10/sofa-happy-500-bo1-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2021/10/sofa-happy-bang-dai-1-500.jpg',
                'https://nhaxinh.com/wp-content/uploads/2021/10/ghe-don-happy-1-500.jpg',
                'https://nhaxinh.com/wp-content/uploads/2021/10/ghe-don-happy-1000-1-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2021/10/phong-khach-happy-500-300x200.jpg'
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-1'
        },

        // sản phẩm liên quan tới Armchair
        {
            _id: 1,
            ProductName: 'Armchair Peony Flower 84685K',
            Description: 'Armchair Peony Flower 84685K',
            Price: 31820000,
            InStock: true,
            Materials: 'Chân kim loại xoay màu gold-khng gỗ -nệm bọc vải 100% Polyester',
            Size: 'D810-R750-C700 mm',
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-1-768x461.jpg',
                'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-2.jpg',
                'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-3-1-rotated.jpg',
                'https://nhaxinh.com/wp-content/uploads/2022/06/ARMCHAIR-PEONY-FLOWER-84685K-4-768x511.jpg',
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-2'
        },
        {
            _id: 2,
            ProductName: 'Armchair Royal vải MB-LD 1/7',
            Description: 'Armchair Royal vải MB-LD 1/7',
            Price: 11690000,
            InStock: true,
            Materials: 'Chân kim loại 2 màu - nệm bọc vải cao cấp',
            Size: 'D760 - R750 - C730 mm',
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2022/04/armchair-Royal-vai-dep-xanh-den-1.jpg',
                'https://nhaxinh.com/wp-content/uploads/2022/04/armchair-Royal-vai-dep-xanh-den-2-768x511.jpg'
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-2'
        },
        {
            _id: 3,
            ProductName: 'Armchair xoay Jadora vải VACT3399 tặng kèm gối',
            Description: 'Armchair xoay Jadora vải VACT3399 tặng kèm gối',
            Price: 15900000,
            Discount: 15,
            InStock: true,
            Materials: 'Vải bọc, khung gỗ, xoay 360°',
            Size: 'D800 - R800 - C670 mm',
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2024/02/Armchair-xoay-Jadora-vai-VACT3399-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/02/Armchair-xoay-Jadora-vai-VACT3399-1-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/02/Armchair-xoay-Jadora-vai-VACT3399-1-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/02/Armchair-xoay-Jadora-vai-VACT3399-3.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/02/Armchair-xoay-Jadora-vai-VACT3399-4.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/02/Armchair-xoay-Jadora-vai-VACT3399-5.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/02/Armchair-xoay-Jadora-vai-VACT3399-6.jpg',
                'https://nhaxinh.com/wp-content/uploads/2024/02/armchair-jadora-lua-chon-tuyet-voi.jpg'
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-2'
        },

        // sản phẩm liên quan tới bàn nước
        {
            _id: 1,
            ProductName: 'Bàn nước Fence',
            Description: 'Bàn nước Fence',
            Price: 27500000,
            InStock: true,
            Materials: 'Chân kim loại - mặt kính',
            Size: 'D1200 - R360 - C600 mm',
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-1.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-2.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-3-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-4.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-5-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-6-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-7-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Fence-8.jpg'
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-3'
        },
        {
            _id: 2,
            ProductName: 'Bàn nước Layered',
            Description: 'Bàn nước Layered',
            Price: 21500000,
            InStock: true,
            Materials: 'Chân kim loại - mặt đá/ gỗ công nghiệp',
            Size: 'D1300 - R550 - C450 mm',
            Review: [],
            Image: [
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Layered-768x511.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Layered-1.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Layered-2.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Layered-3.jpg',
                'https://nhaxinh.com/wp-content/uploads/2023/08/Ban-nuoc-Layered-4.jpg'
            ],
            RoomId: 'room-category-1',
            CategoryProductId: 'product-category-3'
        }
    ]
}