import React from 'react'
import SideBar from '../SideBar';

const ProductList = ({ products }) => {
    const formatVND = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    return (
      <div className="container mx-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Mã sản phẩm</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Mô tả sản phẩm</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Vật liệu</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Kích cỡ</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Danh mục</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Bộ sưu tập</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Chức năng</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map(product => (
              <tr key={product.ProductID} className='align-top'>
                <td className="px-6 py-4">{product.ProductID}</td>
                <td className="px-6 py-4">{product.ProductName}</td>
                <td className="px-6 py-4">{product.Description}</td>
                <td className="px-6 py-4">{formatVND(product.Price)}</td>
                <td className="px-6 py-4">
                    {product.Image && product.Image.map((imageUrl, index) => (
                        <div key={index}>
                            <a href={imageUrl} className="hover:underline" target="_blank" rel="noopener noreferrer">
                                {imageUrl.length > 20 ? imageUrl.substring(0, 20) + "..." : imageUrl}
                            </a>
                        </div>
                    ))}
                </td>
                <td className="px-6 py-4">{product.Material}</td>
                <td className="px-6 py-4">{product.Size}</td>
                <td className="px-6 py-4">{product.Category}</td>
                <td className="px-6 py-4">{product.Collection}</td>
                <td className="px-6 py-4 flex flex-row">
                    <a href='./product/edit' className='hover:text-orange-300'>Xóa</a>
                    <p className='mx-[2px]'>|</p>
                    <a href='./product/edit' className='hover:text-orange-300'>Sửa</a>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default function AdminHome() {
    // Dữ liệu mẫu sản phẩm
    const products = [
    { 
        ProductID: 1, 
        ProductName: 'Product 1', 
        Description: 'Description 1', 
        Price: 100000, 
        Image: 
        [
            'https://nhaxinh.com/wp-content/uploads/2024/03/sofa-3-cho-hung-king.jpg',
            'https://nhaxinh.com/wp-content/uploads/2024/03/hung-king-1.jpg',
            'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Bolero-3-cho-Don-M3-vai-xam-MB4010.jpg',
        ],
        Material: 'Chân kim loại sơn đen, bọc vải cao cấp, bao gồm sofa băng dài & đôn',
        Size: 'Sofa: D2250 - R900 - C790, Đôn: D720 - R720 - C420',
        Category: 'Sofa',
        Collection: '...'
    },
    { 
        ProductID: 1, 
        ProductName: 'Product 1', 
        Description: 'Description 1', 
        Price: 1000000, 
        Image: 
        [
            'https://nhaxinh.com/wp-content/uploads/2024/03/sofa-3-cho-hung-king.jpg',
            'https://nhaxinh.com/wp-content/uploads/2024/03/hung-king-1.jpg',
            'https://nhaxinh.com/wp-content/uploads/2024/01/Sofa-Bolero-3-cho-Don-M3-vai-xam-MB4010.jpg',
        ],
        Material: 'Chân kim loại sơn đen, bọc vải cao cấp, bao gồm sofa băng dài & đôn',
        Size: 'Sofa: D2250 - R900 - C790, Đôn: D720 - R720 - C420',
        Category: 'Sofa',
        Collection: '...'
    },
    ];

    return (
        <div>
            <SideBar />
            <h1 className='w-full text-center my-[30px] text-[30px]'>Quản lý sản phẩm website nhaxinh.com</h1>
            <div className='mb-[30px]'>
                <a href='./product/add' className='border-2 p-[5px] hover:text-white hover:bg-black font-semibold ml-[20px]'>Thêm sản phẩm</a>
            </div>
            <ProductList products={products} />
        </div>
    )
}
