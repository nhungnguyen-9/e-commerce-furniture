// import Category from "../models/Category"
// import slugify from "slugify"

// export const createCategory = async (req, res) => {
//     const category = await Category(req.body)
//     res.status(200).json({
//         category
//     })
// try {
//     const { name, image } = req.json

//     const existingCategory = await Category.findOne({ name })
//     if (existingCategory) {
//         return res.status(200).send({
//             success: false,
//             message: 'Đã có danh mục sản phẩm này!'
//         })
//     }

//     const category = await new Category({
//         name,
//         image,
//         slug: slugify(name)
//     }).save()
//     res.status(201).send({
//         success: true,
//         message: "Danh mục sản phẩm đã được tạo!",
//         category,
//     })
// } catch (error) {
//     console.log(error)
//     res.status(500).send({
//         success: false,
//         error,
//         message: "Lỗi Danh mục sản phẩm!",
//     })
// }
// }