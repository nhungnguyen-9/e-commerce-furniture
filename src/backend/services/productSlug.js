// import Product from "../models/Product"
// import Category from "../models/Category"
// import Room from "../models/Room"

// export async function getBreadcrumbsBySlug(slug) {
//     try {
//         const product = await Product.findOne({ slug: slug })
//             .populate('categoryId')
//             .populate('room')

//         if (!product) {
//             return [];
//         }

//         const room = await Room.findById(product?.roomId);
//         const category = await Category.findById(product?.categoryId);

//         const breadcrumbs = [
//             { name: 'Trang chủ', url: '/' },
//             { name: room.name, url: `/danh-muc/${room?.slug}` },
//             { name: category.name, url: `/danh-muc/${room?.slug}/${category?.slug}` },
//             { name: product.name, url: `/products/${product?.slug}` }
//         ];

//         return breadcrumbs;

//     } catch (error) {
//         console.error("Error fetching breadcrumbs:", error);
//         return [];
//     }
// }