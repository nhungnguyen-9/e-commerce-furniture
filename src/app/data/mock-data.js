export const mockData = {
    // danh mục - route như này: http://nhaxinh/danh-muc/ten-phong/danh-muc-san-pham
    categories: {
        roomOrderIds: ['room-category-1', 'room-category-2', 'room-category-3', 'room-category-4', 'room-category-5', 'room-category-6', 'room-category-7'],
        // danh mục phòng
        rooms: [
            {
                _id: 'room-category-1',
                name: 'Phòng khách',
                slug: 'phong-khach',
                image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854164/nhaxinh/rooms/BST-Coastal-3-3_lmxhku.jpg',
                // categoryOrderIds: ['product-category-1', 'product-category-2', 'product-category-3'],
                // danh mục sản phẩm
                category: [
                    {
                        _id: 'product-category-1',
                        roomId: 'room-category-1',
                        name: 'Sofa',
                        slug: 'sofa',
                        image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854775/nhaxinh/categories/nha-xinh-phong-khach-sofa-jazz-mau-cognac-phong-cach_lncoaw.jpg'
                    },
                    {
                        _id: 'product-category-2',
                        roomId: 'room-category-1',
                        name: 'Armchair',
                        slug: 'armchair',
                        image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854775/nhaxinh/categories/banner-armchair-nha-xinh_kxqmmv.jpg'
                    },
                    {
                        _id: 'product-category-3',
                        roomId: 'room-category-1',
                        name: 'Bàn nước',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/10/nha-xinh-phong-khach-bride-nau-tram-2.jpg'
                    },
                ]
            },
            {
                _id: 'room-category-2',
                name: 'Phòng ăn',
                slug: 'phong-an',
                image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854155/nhaxinh/rooms/ban-an-pio-1_eq1oc2.jpg',
                // categoryOrderIds: ['product-category-4', 'product-category-5', 'product-category-6'],
                category: [
                    {
                        _id: 'product-category-4',
                        roomId: 'room-category-2',
                        name: 'Bàn ăn',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-ban-an-phong-dep-221121.jpg'
                    },
                    {
                        _id: 'product-category-5',
                        roomId: 'room-category-2',
                        name: 'Ghế ăn',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-elegance-ban-an.jpg'
                    },
                    {
                        _id: 'product-category-6',
                        roomId: 'room-category-2',
                        name: 'Tủ ly',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-tu-ly-banner.jpg'
                    },
                ]
            },
            {
                _id: 'room-category-3',
                name: 'Phòng ngủ',
                slug: 'phong-ngu',
                image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854172/nhaxinh/rooms/noi-that-phong-ngu-nha-xinh_ygiqh3.jpg',
                // categoryOrderIds: ['product-category-7', 'product-category-8', 'product-category-9'],
                category: [
                    {
                        _id: 1,
                        roomId: 'room-category-7',
                        name: 'Giường ngủ',
                        image: 'https://nhaxinh.com/wp-content/uploads/2022/05/phong-ngu-hien-dai-thanh-lich-skagen-13522.jpg'
                    },
                    {
                        _id: 2,
                        roomId: 'room-category-8',
                        name: 'Tủ áo',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-tu-ao-dep-221121.jpg'
                    },
                    {
                        _id: 3,
                        roomId: 'room-category-9',
                        name: 'Bàn đầu giường',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-ban-dau-giuong-ngu-banner.jpg'
                    },
                ]
            },
            {
                _id: 'room-category-4',
                name: 'Phòng làm việc',
                slug: 'phong-lam-viec',
                image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854156/nhaxinh/rooms/ban-lam-viec-maxine-713x450-1_faiw3i.jpg',
                category: []
            },
            {
                _id: 'room-category-5',
                name: 'Bếp',
                slug: 'bep',
                image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854167/nhaxinh/rooms/nha-xinh-tu-bep-dep-221121_u4btzy.jpg',
                category: [
                    {
                        _id: 1,
                        roomId: 'room-category-5',
                        name: 'Tủ bếp',
                        image: 'https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-tu-bep-dep-221121.jpg'
                    }
                ]
            },
            {
                _id: 'room-category-6',
                name: 'Hàng trang trí',
                slug: 'hang-trang-tri',
                image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854160/nhaxinh/rooms/banner-trang-chu-san-pham-dep-oki_r9i6kl.jpg',
                category: []
            },
            {
                _id: 'room-category-7',
                name: 'Ngoại thất',
                slug: 'ngoai-that',
                image: 'https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710854160/nhaxinh/rooms/banner-trang-chu-san-pham-dep-oki_r9i6kl.jpg',
                category: []
            }
        ]
    },
    products: [
        // sản phẩm liên quan tới sofa
        {
            "_id": 1,
            "name": "Sofa Bolero 3 chỗ + Đôn M3 vải xanh MB408",
            "slug": "sofa-bolero-3-cho-don-m3-vai-xanh-mb408",
            "description": "Sofa Bolero 3 chỗ + Đôn M3 vải xanh MB408",
            "price": 24550001,
            "discount": 15,
            "inStock": true,
            "materials": "Chân kim loại sơn đen, bọc vải cao cấp, bao gồm sofa băng dài & đôn",
            "size": "Sofa: D2250 - R900 - C790, Đôn: D720 - R720 - C420",
            "image": [
                {
                    "public_id": "Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-768x511_sd8k56",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710860110/nhaxinh/uploads/sofa/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-768x511_sd8k56.jpg"
                },
                {
                    "public_id": "Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-1-768x511_h7wewz",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710860107/nhaxinh/uploads/sofa/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-1-768x511_h7wewz.jpg"
                },
                {
                    "public_id": "Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-2-768x511_bvg0ui",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710860107/nhaxinh/uploads/sofa/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-2-768x511_bvg0ui.jpg"
                },
                {
                    "public_id": "Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-3-768x511_sog5ll",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710860109/nhaxinh/uploads/sofa/Sofa-Bolero-3-cho-Don-M3-vai-xanh-MB408-3-768x511_sog5ll.jpg"
                }
            ],
            "categoryId": "product-category-1"
        },
        {
            "_id": 2,
            "name": "Sofa Maxine M2-3C Da Mush 1141-VACT8377",
            "slug": "sofa-maxine-m2-3c-da-mush-1141-vact8377",
            "description": "Sofa Maxine M2-3C Da Mush 1141-VACT8377",
            "price": 47140000,
            "inStock": true,
            "materials": "Chân kim loại màu gold - Khung da bò tự nhiên - Nệm vải",
            "size": "D2100 - R850 - C830 mm",
            "image": [
                {
                    "public_id": "Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-768x511_vrid8g",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861212/nhaxinh/uploads/sofa/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-768x511_vrid8g.jpg"
                },
                {
                    "public_id": "Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-1-768x511_d6zeyr",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861202/nhaxinh/uploads/sofa/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-1-768x511_d6zeyr.jpg"
                },
                {
                    "public_id": "Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-3_kjo9vy",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861209/nhaxinh/uploads/sofa/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-3_kjo9vy.jpg"
                },
                {
                    "public_id": "Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-2-768x511_usq5cz",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861204/nhaxinh/uploads/sofa/Sofa-Maxine-M2-3C-Da-Mush-1141-VACT8377-2-768x511_usq5cz.jpg"
                }
            ],
            "categoryId": "product-category-1"
        },
        {
            "_id": 3,
            "name": "Sofa Happy 2 chỗ và 2 armchair vải",
            "slug": "sofa-happy-2-cho-va-2-armchair-vai",
            "description": "Sofa Happy 2 chỗ và 2 armchair vải",
            "price": 45220000,
            "discount": 50,
            "inStock": true,
            "materials": "Khung gỗ thông - Bọc vải cao cấp",
            "size": ["Sofa 2 chỗ D1500-R820-C810mm", "1 chỗ: D740-R820-C810mm"],
            "image": [
                {
                    "public_id": "sofa-happy-500-bo1-768x511_quo78m",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861759/nhaxinh/uploads/sofa/sofa-happy-500-bo1-768x511_quo78m.jpg"
                },
                {
                    "public_id": "sofa-happy-bang-dai-1-500_bucd4j",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861762/nhaxinh/uploads/sofa/sofa-happy-bang-dai-1-500_bucd4j.jpg"
                },
                {
                    "public_id": "ghe-don-happy-1-500_bahtaw",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861750/nhaxinh/uploads/sofa/ghe-don-happy-1-500_bahtaw.jpg"
                },
                {
                    "public_id": "ghe-don-happy-1000-1-768x511_mkwhmd",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861752/nhaxinh/uploads/sofa/ghe-don-happy-1000-1-768x511_mkwhmd.jpg"
                },
                {
                    "public_id": "phong-khach-happy-500-300x200_tdcott",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710861756/nhaxinh/uploads/sofa/phong-khach-happy-500-300x200_tdcott.jpg"
                }
            ],
            "categoryId": 'product-category-1'
        },

        // sản phẩm liên quan tới Armchair
        {
            "_id": 1,
            "name": "Armchair Peony Flower 84685K",
            "slug": "armchair-peony-flower-84685k",
            "description": "Armchair Peony Flower 84685K",
            "price": 31820000,
            "inStock": true,
            "materials": "Chân kim loại xoay màu gold-khng gỗ -nệm bọc vải 100% Polyester",
            "size": "D810-R750-C700 mm",
            "image": [
                {
                    "public_id": "ARMCHAIR-PEONY-FLOWER-84685K-1-768x461_kvjlvc",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915066/nhaxinh/uploads/sofa/ARMCHAIR-PEONY-FLOWER-84685K-1-768x461_kvjlvc.jpg"
                },
                {
                    "public_id": "ARMCHAIR-PEONY-FLOWER-84685K-2_wqxdb4.jpg",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915172/nhaxinh/uploads/sofa/ARMCHAIR-PEONY-FLOWER-84685K-2_wqxdb4.jpg"
                },
                {
                    "public_id": "ARMCHAIR-PEONY-FLOWER-84685K-3-1-rotated_llzrig",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915173/nhaxinh/uploads/sofa/ARMCHAIR-PEONY-FLOWER-84685K-3-1-rotated_llzrig.jpg"
                },
                {
                    "public_id": "ARMCHAIR-PEONY-FLOWER-84685K-4-768x511_otf7le",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915176/nhaxinh/uploads/sofa/ARMCHAIR-PEONY-FLOWER-84685K-4-768x511_otf7le.jpg"
                }
            ],
            "categoryId": "product-category-2"
        },
        {
            "_id": 2,
            "name": "Armchair Royal vải MB-LD 1/7",
            "slug": "armchair-royal-vai-mb-ld-1-7",
            "description": "Armchair Royal vải MB-LD 1/7",
            "price": 11690000,
            "inStock": true,
            "materials": "Chân kim loại 2 màu - nệm bọc vải cao cấp",
            "size": "D760 - R750 - C730 mm",
            "image": [
                {
                    "public_id": "armchair-Royal-vai-dep-xanh-den-1-768x511_nyfdln",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915698/nhaxinh/uploads/sofa/armchair-Royal-vai-dep-xanh-den-1-768x511_nyfdln.jpg"
                },
                {
                    "public_id": "armchair-Royal-vai-dep-xanh-den-2-768x511_othfig",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915710/nhaxinh/uploads/sofa/armchair-Royal-vai-dep-xanh-den-2-768x511_othfig.jpg"
                }
            ],
            "categoryId": "product-category-2"
        },
        {
            "_id": 3,
            "name": "Armchair xoay Jadora vải VACT3399 tặng kèm gối",
            "slug": "armchair-xoay-jadora-vai-vact3399",
            "description": "Armchair xoay Jadora vải VACT3399 tặng kèm gối",
            "price": 15900000,
            "discount": 15,
            "inStock": true,
            "materials": "Vải bọc, khung gỗ, xoay 360°",
            "size": "D800 - R800 - C670 mm",
            "image": [
                {
                    "public_id": "Armchair-xoay-Jadora-vai-VACT3399-1-768x511_wjnzas",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915869/nhaxinh/uploads/sofa/Armchair-xoay-Jadora-vai-VACT3399-1-768x511_wjnzas.jpg"
                },
                {
                    "public_id": "Armchair-xoay-Jadora-vai-VACT3399-4-768x511_wfszqs",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915875/nhaxinh/uploads/sofa/Armchair-xoay-Jadora-vai-VACT3399-4-768x511_wfszqs.jpg"
                },
                {
                    "public_id": "Armchair-xoay-Jadora-vai-VACT3399-3-768x511_hovavq",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915874/nhaxinh/uploads/sofa/Armchair-xoay-Jadora-vai-VACT3399-3-768x511_hovavq.jpg"
                },
                {
                    "public_id": "Armchair-xoay-Jadora-vai-VACT3399-2-768x511_cwezgx",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915872/nhaxinh/uploads/sofa/Armchair-xoay-Jadora-vai-VACT3399-2-768x511_cwezgx.jpg"
                },
                {
                    "public_id": "armchair-jadora-lua-chon-tuyet-voi-768x511_o4xxn9",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710915868/nhaxinh/uploads/sofa/armchair-jadora-lua-chon-tuyet-voi-768x511_o4xxn9.jpg"
                }
            ],
            "categoryId": "product-category-2"
        },

        // sản phẩm liên quan tới bàn nước
        {
            "_id": 1,
            "name": "Bàn nước Fence",
            "slug": "ban-nuoc-fence",
            "description": "Bàn nước Fence",
            "price": 27500000,
            "inStock": true,
            "materials": "Chân kim loại - mặt kính",
            "size": "D1200 - R360 - C600 mm",
            "image": [
                {
                    "public_id": "Ban-nuoc-Fence-768x511_u06sxg",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916120/nhaxinh/uploads/sofa/Ban-nuoc-Fence-768x511_u06sxg.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Fence-1-768x511_rtwj7t",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916108/nhaxinh/uploads/sofa/Ban-nuoc-Fence-1-768x511_rtwj7t.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Fence-7-768x511_xcvltb",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916112/nhaxinh/uploads/sofa/Ban-nuoc-Fence-7-768x511_xcvltb.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Fence-8-768x511_olplby",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916117/nhaxinh/uploads/sofa/Ban-nuoc-Fence-8-768x511_olplby.jpg"
                },
            ],
            "categoryId": "product-category-3"
        },
        {
            "_id": 2,
            "name": "Bàn nước Layered",
            "slug": "ban-nuoc-layered",
            "description": "Bàn nước Layered",
            "price": 21500000,
            "inStock": true,
            "materials": "Chân kim loại - mặt đá/ gỗ công nghiệp",
            "size": "D1300 - R550 - C450 mm",
            "image": [
                {
                    "public_id": "Ban-nuoc-Layered-1-768x511_nnlfyo",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916376/nhaxinh/uploads/sofa/Ban-nuoc-Layered-1-768x511_nnlfyo.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Layered-4-768x511_e9kzsj",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916378/nhaxinh/uploads/sofa/Ban-nuoc-Layered-4-768x511_e9kzsj.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Layered-5-768x511_uh9df8",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916380/nhaxinh/uploads/sofa/Ban-nuoc-Layered-5-768x511_uh9df8.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Layered-7-768x511_qyf8m4",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916383/nhaxinh/uploads/sofa/Ban-nuoc-Layered-7-768x511_qyf8m4.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Layered-768x511_d0w1ff",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916393/nhaxinh/uploads/sofa/Ban-nuoc-Layered-768x511_d0w1ff.jpg"
                },
                {
                    "public_id": "Ban-nuoc-Layered-13-768x511_hlrtdk",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916390/nhaxinh/uploads/sofa/Ban-nuoc-Layered-13-768x511_hlrtdk.jpg"
                }
            ],
            "categoryId": "product-category-3"
        },

        // sản phẩm liên quan tới bàn ăn
        {
            "_id": 1,
            "name": "Bàn ăn 6 chỗ Coastal",
            "slug": "ban-an-6-cho-coastal",
            "description": "Bàn ăn 6 chỗ Coastal",
            "price": 11900001,
            "inStock": true,
            "materials": "Gỗ Ash - MDF veneer Ash",
            "size": "D1600 - R800 - C755 mm",
            "image": [
                {
                    "public_id": "Ban-an-6-cho-Coastal-768x511_fl9wr6",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916836/nhaxinh/uploads/sofa/Ban-an-6-cho-Coastal-768x511_fl9wr6.jpg"
                },
                {
                    "public_id": "Ban-an-6-cho-Coastal-1-768x511_ibha61",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916758/nhaxinh/uploads/sofa/Ban-an-6-cho-Coastal-1-768x511_ibha61.jpg"
                },
                {
                    "public_id": "phong-an-coastal-768x512_g9be3s",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710916840/nhaxinh/uploads/sofa/phong-an-coastal-768x512_g9be3s.jpg"
                }
            ],
            "categoryId": "product-category-4"
        },
        {
            "_id": 2,
            "name": "Bàn ăn Breeze mặt kính bronze/GM2",
            "slug": "ban-an-breeze-mat-kinh-bronze-gm2",
            "description": "Bàn ăn Breeze mặt kính bronze/GM2",
            "price": 207900000,
            "inStock": true,
            "materials": "Chân kim loại màu Bronze, kính cường lực màu Bronze",
            "size": "D2490 - R1190 - C760",
            "image": [
                {
                    "public_id": "ban-an-breeze-mat-kinh-bronze-gm2-2-768x511_rwzc0u",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710917163/nhaxinh/uploads/sofa/ban-an-breeze-mat-kinh-bronze-gm2-2-768x511_rwzc0u.jpg"
                },
                {
                    "public_id": "Ban-an-Breeze-mat-kinh-bronze-GM2-1-768x511_govxg2",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710917157/nhaxinh/uploads/sofa/Ban-an-Breeze-mat-kinh-bronze-GM2-1-768x511_govxg2.jpg"
                },
                {
                    "public_id": "Ban-an-Breeze-mat-kinh-bronze-GM2-2-768x511_1_tl1aol",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710917158/nhaxinh/uploads/sofa/Ban-an-Breeze-mat-kinh-bronze-GM2-2-768x511_1_tl1aol.jpg"
                }
            ],
            "categoryId": "product-category-5"
        },

        // sản phẩm liên quan tới ghế ăn
        {
            "_id": 1,
            "name": "Ghế ăn Bolero ACC001 Da AB1142",
            "slug": "ghe-an-bolero-acc001-da-ab1142",
            "description": "Ghế ăn Bolero ACC001 Da AB1142",
            "price": 6280000,
            "inStock": true,
            "materials": "Chân inox màu gold - Bọc da bò cao cấp",
            "size": "D470 - R570 - C860 mm",
            "image": [
                {
                    "public_id": "Ghe-an-Bolero-ACC001-Da-AB1142-768x511_rp3uh5",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710917374/nhaxinh/uploads/sofa/Ghe-an-Bolero-ACC001-Da-AB1142-768x511_rp3uh5.jpg"
                }
            ],
            "categoryId": "product-category-5"
        },
        {
            "_id": 2,
            "name": "Ghế ăn Coastal KD1085-18",
            "slug": "ghe-an-coastal-kd1085-18",
            "description": "Ghế ăn Coastal KD1085-18",
            "price": 5100000,
            "inStock": true,
            "materials": "Gỗ Ash - nệm bọc vải",
            "size": "D435 - R525 - C840 mm",
            "image": [
                {
                    "public_id": "Ghe-an-Coastal-xanh-768x511_jshyqx",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710917639/nhaxinh/uploads/sofa/Ghe-an-Coastal-xanh-768x511_jshyqx.jpg"
                },
                {
                    "public_id": "phong-an-coastal-1_sblutc",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710917640/nhaxinh/uploads/sofa/phong-an-coastal-1_sblutc.jpg"
                },
                {
                    "public_id": "phong-an-coastal-768x512_1_wfa2q7",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710917641/nhaxinh/uploads/sofa/phong-an-coastal-768x512_1_wfa2q7.jpg"
                }
            ],
            "categoryId": "product-category-5"
        },

        // sản phẩm liên quan tới tủ ly
        {
            "_id": 1,
            "name": "Tủ thấp Barbier Walnut",
            "slug": "tu-thap-barbier-walnut",
            "description": "Tủ thấp Barbier Walnut",
            "price": 30670000,
            "inStock": true,
            "materials": "gỗ cao su, MDF",
            "size": "1200x400x580 mm",
            "image": [
                {
                    "public_id": "TU-THAP-BARBIER-WALNUT-4300019Z-768x511_qaiofq",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918048/nhaxinh/uploads/sofa/TU-THAP-BARBIER-WALNUT-4300019Z-768x511_qaiofq.jpg"
                },
                {
                    "public_id": "TU-THAP-BARBIER-WALNUT-4300019Z-1-768x511_zt0ksk",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918048/nhaxinh/uploads/sofa/TU-THAP-BARBIER-WALNUT-4300019Z-1-768x511_zt0ksk.jpg"
                },
                {
                    "public_id": "TU-THAP-BARBIER-WALNUT-4300019Z-7-768x511_zmkd5k",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918048/nhaxinh/uploads/sofa/TU-THAP-BARBIER-WALNUT-4300019Z-7-768x511_zmkd5k.jpg"
                }
            ],
            "categoryId": "product-category-6"
        },
        {
            "_id": 2,
            "name": "Tủ thấp Fence",
            "slug": "tu-thap-fence",
            "description": "Tủ thấp Fence",
            "price": 35900000,
            "inStock": true,
            "materials": "Chân kim loại - mặt nhựa giả mây/ kính",
            "size": "D800 - R398 - C800 mm",
            "image": [
                {
                    "public_id": "Tu-thap-Fence-768x511_g0leai",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918184/nhaxinh/uploads/sofa/Tu-thap-Fence-768x511_g0leai.jpg"
                },
                {
                    "public_id": "Tu-thap-Fence-2-768x511_jmif7q",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918180/nhaxinh/uploads/sofa/Tu-thap-Fence-2-768x511_jmif7q.jpg"
                },
                {
                    "public_id": "Tu-thap-Fence-4-768x511_shgynx",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918182/nhaxinh/uploads/sofa/Tu-thap-Fence-4-768x511_shgynx.jpg"
                }
            ],
            "categoryId": "product-category-6"
        },

        // sản phẩm liên quan tới giường ngủ
        {
            "_id": 1,
            "name": "Giường Coastal KD1058-18 1m6",
            "slug": "giuong-coastal-1m6-xanh",
            "description": "Giường Coastal KD1058-18 1m6",
            "price": 28900000,
            "inStock": true,
            "materials": "Khung gỗ Ash - nệm bọc vải",
            "size": "D2000 - R1600 - C1080 mm",
            "image": [
                {
                    "public_id": "Giuong-Coastal-1m6-xanh-768x511_peiavs",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918434/nhaxinh/uploads/bed/Giuong-Coastal-1m6-xanh-768x511_peiavs.jpg"
                }
            ],
            "categoryId": "product-category-7"
        },
        {
            "_id": 2,
            "name": "Giường Coastal vàng 1m8",
            "description": "Giường Coastal vàng 1m8",
            "slug": "giuong-coastal-1m8-vang",
            "price": 31900000,
            "inStock": true,
            "materials": "Khung gỗ Ash - nệm bọc vải",
            "size": "D2000 - R1800 - C1080 mm",
            "image": [
                {
                    "public_id": "Giuong-Coastal-1m8-vang-2-768x511_dpyruk",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918500/nhaxinh/uploads/bed/Giuong-Coastal-1m8-vang-2-768x511_dpyruk.jpg"
                }
            ],
            "categoryId": "product-category-7"
        },

        // sản phẩm liên quan tới tủ áo
        {
            "_id": 1,
            "name": "Tủ áo Acrylic",
            "slug": "tu-ao-acrylic",
            "description": "Tủ áo Acryli",
            "price": 32310000,
            "inStock": true,
            "materials": "Thùng MFC chống ẩm - mặt MDF Acrylic Parc50",
            "size": "D1600 - R600 - C2000 mm",
            "image": [
                {
                    "public_id": "Tu-ao-Acrylic-768x511_eeorum",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918622/nhaxinh/uploads/closet/Tu-ao-Acrylic-768x511_eeorum.jpg"
                }
            ],
            "categoryId": "product-category-8"
        },

        // sản phẩm liên quan tới bàn đầu giường
        {
            "_id": 1,
            "name": "Bàn đầu giường Madame màu P67W",
            "slug": "ban-dau-giuong-madame-mau-p67w",
            "description": "Bàn đầu giường Madame màu P67W",
            "price": 41900000,
            "inStock": true,
            "materials": "Chân kim loại màu đen nhấn gold, mặt bàn MDF veneer",
            "size": "D550 - R460 - C830",
            "image": [
                {
                    "public_id": "Ban-dau-giuong-Madame-mau-P67W-768x511_amybal",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918720/nhaxinh/uploads/table/Ban-dau-giuong-Madame-mau-P67W-768x511_amybal.jpg"
                },
                {
                    "public_id": "Ban-dau-giuong-Madame-mau-P67W-2-768x511_emx6yx",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918715/nhaxinh/uploads/table/Ban-dau-giuong-Madame-mau-P67W-2-768x511_emx6yx.jpg"
                }
            ],
            "categoryId": "product-category-9"
        },
        {
            "_id": 2,
            "name": "Bàn đầu giường Cabo PMA532058 F1",
            "slug": "ban-dau-giuong-cabo-pma532058-f1",
            "description": "Bàn đầu giường Cabo PMA532058 F1",
            "price": 9100000,
            "inStock": true,
            "materials": "MDF màu walnut, chân kim loại sơn đen, mặt ngoài hộc kéo màu xanh Olive",
            "size": "D500 - R400 - C550 mm",
            "image": [
                {
                    "public_id": "BAN-DAU-GIUONG-CABO-PMA532058-F1-768x511_f9aysw",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918910/nhaxinh/uploads/table/BAN-DAU-GIUONG-CABO-PMA532058-F1-768x511_f9aysw.jpg"
                },
                {
                    "public_id": "ban-dau-giuong-cabo-pma532058-f1-2-768x495_lgch0n",
                    "url": "https://res.cloudinary.com/dq7vzcw0s/image/upload/v1710918906/nhaxinh/uploads/table/ban-dau-giuong-cabo-pma532058-f1-2-768x495_lgch0n.jpg"
                }
            ],
            "categoryId": "product-category-3"
        }
    ]
}