import Image from 'next/image';
import Link from 'next/link';

// Menu items
const menuItems = [
  {
    menu: 'Đơn hàng',
    link: '/admin/order',
  },
  {
    menu: 'Khách hàng',
    link: '/admin/customer',
  },
  {
    menu: 'Sản phẩm',
    link: '/admin/product',
  },
];

export default function Home() {

const displayMenu = () => {
    return menuItems.map((item) => (
      <Link
        key={item.menu}
        href={item.link}
        className='pb-5 hover:text-orange-400 md:pb-0 md:pl-6'
      >
        {item.menu}
      </Link>
    ));
  };

  return (
    <div>
      <div className='flex justify-start p-7 shadow-lg items-center'>

          {/* Menu links */}
          <div>
            <div className='text-red'>
              {displayMenu()}
            </div>
          </div>
        </div>
    </div>
  );
}