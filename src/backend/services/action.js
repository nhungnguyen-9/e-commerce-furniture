export const getProductDetail = async (slug) => {
    try {
        const res = await fetch(
            `http://localhost:3000/api/product?slug=${slug}`,
            {
                method: 'GET',
                cache: "no-store"
            }
        );
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}