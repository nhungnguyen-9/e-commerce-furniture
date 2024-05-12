import Category from "../models/Category";

export const getProductsByCategory = async (roomSlug, categorySlug) => {
    try {
        // const category = await Category.findOne({ slug: categorySlug })
        //     .populate({
        //         path: 'room',
        //         match: { slug: roomSlug },
        //         populate: { path: 'product', model: 'Product' }
        //     })
        //     .exec();
        // console.log('🚀 ~ getProductsByCategory ~ category:', category)

        // if (!category || !category.room.length) {
        //     throw new Error('Category or room not found');
        // }

        // return category.room[0].product;
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/danh-muc/${roomSlug}/${categorySlug}`)
        return response.data
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};