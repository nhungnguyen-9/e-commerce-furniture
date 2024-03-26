'use client'
import React from 'react'
import Image from 'next/image'

import Carousel from 'react-material-ui-carousel'

export default function About() {
    var pages = [
        {
            imageUrl: '/blogs/stories/design-talk-2-16-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Nhà Báo Vũ Kim Hạnh: "Kết nối" liệu có phải là hạnh phúc',
            description: 'Một buổi sáng ngày cuối năm giữa bộn bề công việc, quẩn quanh với những con số, đội ngũ AKA [...]',
        },
        {
            imageUrl: '/blogs/stories/chien-luoc-phu-dong.jpg',
            width: 860,
            height: 574,
            title: 'Chiến lược “Phù Đổng” của công ty đứng sau thương hiệu Nhà Xinh',
            description: 'Không những làm nội thất cho hàng loạt công trình nổi tiếng trong nước như Landmark 81, JW Marriott Phú [...]',
        },
        {
            imageUrl: '/blogs/stories/design-talk-2-11-1199x800.jpg',
            width: 1199,
            height: 800,
            title: 'Design Talk 2 – Gặp gỡ Nhà thiết kế Nguyễn Đình Hòa',
            description: 'Design Talk là hoạt động giao lưu trò chuyện được AKA tổ chức thường xuyên, gồm những buổi trao đổi [...]',
        },
        {
            imageUrl: '/blogs/stories/dao-tao-02-8-1400x760.jpg',
            width: 1400,
            height: 760,
            title: 'Design Talk 1 – Chuyện trò về những xu hướng nội thất',
            description: 'Cuối tuần vừa qua, tập thể AKA đã hân hạnh đón chào một nhà thiết kế quen thuộc, người mà [...]',
        },
        {
            imageUrl: '/blogs/stories/quy-trinh-boc-sofa-da-khung-go-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Quy trình bọc nệm sofa da cao cấp khung gỗ',
            description: 'Tại sao có những bộ sofa luôn tạo cảm giác êm ái cho người dùng? Liệu quy trình hoàn thiện [...]',
        },
        {
            imageUrl: '/blogs/stories/hanh-trinh-sang-tao-11-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Đến Nhà Xinh trò chuyện về hành trình sáng tạo',
            description: 'Cuối tuần vừa qua, Nhà Xinh Phú Mỹ Hưng hân hạnh được chào đón diễn giả Trần Đình Thông cùng [...]',
        },
        {
            imageUrl: '/blogs/stories/AA-Tay-Ninh-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Chiêm ngưỡng AA Tây Ninh – nhà máy sản xuất nội thất hiện đại với quy mô 50ha',
            description: 'Là một thành viên của tập đoàn AA, nhà máy AA Tây Ninh tọa lạc tại huyện Trảng Bàng, thành [...]',
        },
        {
            imageUrl: '/blogs/stories/quy-trinh-tao-san-pham-15-1200x800.jpg',
            width: 1200,
            height: 800,
            title: 'Khám phá quy trình tạo ra sản phẩm Bridge và Elegance',
            description: 'Bridge và Elegance là hai dòng sản phẩm do nhà thiết kế Đan Mạch – Hans Sandgren Jakobsen tạo ra, [...]',
        },
    ]

    const groupedPages = pages.reduce((acc, item, index) => {
        const groupIndex = Math.floor(index / 2);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(item);
        return acc;
    }, []);
    
    return (
        <div className=''>
            <div className='relative'>
                <div className='relative mt-[30px] bg-about_vechungtoi w-full h-[550px] bg-contain bg-no-repeat brightness-[70%]'>
                </div>
                <h1 className='absolute top-[400px] left-[150px] font-medium text-[50px] text-white'>Về chúng tôi</h1>
            </div>

            <div className=' w-[80%] ml-[10%] mb-[70px]'>
                <h1 className='font-semibold text-[30px]'>LỊCH SỬ HÌNH THÀNH</h1>
                <p className='mt-[10px] text-[20px]'>
                    Ra đời từ ý tưởng tạo nên sự khác biệt, Nhà Xinh đã giữ vững và phát triển trở thành vị trí hàng đầu trong thị trường nội thất Việt Nam. Đến nay, Nhà Xinh đã có nhiều cửa hàng quy mô và chuyên nghiệp tại các thành phố lớn là Hà Nội và TP.HCM, Bình Dương.
                </p>
            </div>

            <div className='flex flex-col h-fit w-[90%] ml-[5%] mb-[100px] space-y-[60px]'>
                <div className='w-full h-[8 00px] flex flex-row'>
                    <div className='w-[42%] overflow-hidden'>
                        <img
                        src='https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-may-net-viet-duong-dai-3.jpg'
                        alt='Bộ sưu tập'
                        />
                    </div>
                    <div className='w-[58%] space-y-[20px] pl-[3%]'>
                        <p className='text-[18px]'>
                            <b>2021: </b>
                            <span>
                                Khẳng định thương hiệu bền vững với những bước phát triển mới dù đối mặt những khó khăn do dịch bệnh Covid. Hệ thống cửa hàng mở rộng, với showroom mới tại Bình Dương.
                            </span>
                        </p>
                        <p className='text-[18px]'>
                            <b>2020: </b>
                            <span>
                                Đơn vị chủ quản thương hiệu Nhà Xinh – AKA Furniture Group tái cơ cấu trở thành thành viên của tập đoàn AA Corporation – Tập đoàn sản xuất và thi công nội thất chất lượng cao hàng đầu Châu Á.
                            </span>
                        </p>
                        <p className='text-[18px]'>
                            <b>2019: </b>
                            <span>
                                Đây là năm mang dấu ấn đặc biệt của thương hiệu Nhà Xinh – Đánh dấu chặng đường phát triển 20 năm. Với sự xuất hiện của 2 cửa hàng tại Nguyễn Văn Hưởng (Q2, HCM) và Trung tâm nội thất Thụy Khuê (Tây Hồ, Hà Nội).
                            </span>
                        </p>
                        <p className='text-[18px]'>
                            <b>2016: </b>
                            <span>
                                Mở rộng hệ thống Nhà Xinh với 2 cửa hàng lớn ở ngay trung tâm thủ đô Hà Nội thuộc quận Hoàn Kiếm và quận Đống Đa.
                            </span>
                        </p>
                        <p className='text-[18px]'>
                            <b>2011 – 2014: </b>
                            <span>
                                Khẳng định thương hiệu với sự xuất hiện của 2 cửa hàng mới tại ngã tư trung tâm Q1, TP.HCM (Hai Bà Trưng – Trần Cao Vân) và TTTM Royal City Hà Nội.
                            </span>
                        </p>
                        <p className='text-[18px]'>
                            <b>2005 – 2010: </b>
                            <span>
                                Phát triển mạnh mẽ với hệ thống cửa hàng trên các khu đô thị mới là Nhà Xinh Yên Hòa, Nhà Xinh Phú Mỹ Hưng và Nhà Xinh Centre – khu vực trung tâm Q1.
                            </span>
                        </p>
                        <p className='text-[18px]'>
                            <b>2002 – 2005: </b>
                            <span>
                                Nhà Xinh Cát Linh tại Hà Nội và Nhà Xinh Citimart tại TP.HCM nhằm hoàn thiện hệ thống và phục vụ tốt hơn cho Khách hàng.
                            </span>
                        </p>
                        <p className='text-[18px]'>
                            <b>1999: </b>
                            <span>
                                Ra đời với 2 cửa hàng lớn tại Hà Nội và TP.HCM, mang đậm phong cách riêng về thiết kế và cách bày trí.
                            </span>
                        </p>
                    </div>
                </div>

                <div className='w-full h-[8 00px] flex flex-row'>
                    <div className='w-[42%] overflow-hidden'>
                        <img
                        src='https://nhaxinh.com/wp-content/uploads/2023/08/ong-nguyen-quoc-khanh.jpg'
                        alt='Bộ sưu tập'
                        />
                    </div>
                    <div className='w-[58%] pl-[3%]'>
                        <h1 className='font-bold text-[20px] mb-[10px]'>Nhà sáng lập</h1>
                        <p>
                            Ông Nguyễn Quốc Khanh là người sáng lập tập đoàn AA, thương hiệu nội thất Nhà Xinh và hiện tại Ông đang giữ vị trí chủ tịch hiệp hội chế biến gỗ TP.HCM (Hawa). Là một kiến trúc sư, nhà thiết kế nội thất, Ông đam mê ngành gỗ cũng như tham vọng mang thương hiệu Việt ra toàn thế giới.
                        </p>
                    </div>
                </div>

                <div className='w-full h-[8 00px] flex flex-row'>
                    <div className='w-[42%] overflow-hidden'>
                        <img
                        src='https://nhaxinh.com/wp-content/uploads/2021/11/bo-suu-tap-maxine-phong-an-600x899.jpg'
                        alt='Bộ sưu tập'
                        />
                    </div>
                    <div className='w-[58%] pl-[3%]'>
                        <h1 className='font-bold text-[20px] mb-[10px]'>Giá trị và sự khác biệt</h1>
                        <p>
                        Với mong muốn phát triển thương hiệu Việt bằng nội lực, Nhà Xinh đã chú trọng vào thiết kế và sản xuất nội thất trong nước. Danh mục sản phẩm của Nhà Xinh thường xuyên được đổi mới và cập nhật, liên tục cung cấp cho khách hàng các dòng sản phẩm theo xu hướng mới nhất. Do chính người Việt thiết kế và sản xuất, nội thất thương hiệu Nhà Xinh luôn phù hợp với cuộc sống Á Đông, đem đến sự tiện nghi hoàn hảo trong mọi không gian sống.<br/><br/>
                        Hơn 70% sản phẩm của Nhà Xinh được thiết kế, sản xuất bởi đội ngũ nhân viên cùng công nhân ưu tú với nhà máy có cơ sở vật chất hiện đại bậc nhất tại Việt Nam.<br/><br/>
                        Sự khác biệt của Nhà Xinh chính là sáng tạo nội thất thành phong cách riêng, phù hợp với nhu cầu khách hàng. Không chỉ là sản phẩm nội thất đơn thuần, mà còn là không gian sống theo phong cách riêng với cách bày trí hài hòa từ đồ nội thất kết hợp với đồ trang trí. Giúp khách hàng cảm nhận được một không gian sống thực sự, cảm thấy thoải mái để tận hưởng cuộc sống.<br/><br/>
                        </p>
                    </div>
                </div>

                <div className='w-full h-[8 00px] flex flex-row'>
                    <div className='w-[42%] overflow-hidden'>
                        <img
                        src='https://nhaxinh.com/wp-content/uploads/2021/11/nha-xinh-gioi-thieu-chat-luong-251121.jpg'
                        alt='Bộ sưu tập'
                        />
                    </div>
                    <div className='w-[58%] pl-[3%]'>
                        <h1 className='font-bold text-[20px] mb-[10px]'>Chất lượng và dịch vụ</h1>
                        <p>
                            Chất lượng của nguyên vật liệu, phụ kiện và quy trình sản xuất đều được kiểm định và giám sát chặt chẽ bởi hệ thống quản lý chất lượng ISO 9001. Sản phẩm của Nhà Xinh được thiết kế theo định hướng công năng sử dụng, thẩm mỹ và chất lượng. Trong những năm gần đây, thương hiệu luôn hướng đến xu hướng thiết kế xanh nhằm đóng góp không chỉ một không gian sống tiện nghi mà còn là một môi trường sống trong lành cho người sử dụng và cộng đồng. Với nhiều cống hiến như vậy, Nhà Xinh vinh dự nhiều năm liền được trao tặng các danh hiệu “Hàng Việt Nam chất lượng cao”, “Trusted brand” và “Top 100 nhà cung cấp hàng đầu”.<br/><br/>
                            Bên cạnh đó, Nhà Xinh tự hào sở hữu đội ngũ tư vấn thiết kế và kỹ sư chuyên nghiệp, có kiến thức sâu rộng trong lĩnh vực đồ gỗ nội thất. Tập thể nhân viên tại Nhà Xinh cam kết nỗ lực tư vấn và trợ giúp khách hàng lựa chọn sản phẩm ưng ý nhất. Dịch vụ tư vấn thiết kế của Nhà Xinh sẽ giúp khách hàng kiến tạo một không gian sống như ý thông qua sự phối hợp điêu luyện giữa các sản phẩm nội thất và đồ trang trí.
                        </p>
                    </div>
                </div>

                <div className='w-full h-[8 00px] flex flex-row'>
                    <div className='w-[42%] overflow-hidden'>
                        <img
                        src='https://nhaxinh.com/wp-content/uploads/2021/11/nha-may-aa-tayninh-1400x786.jpg'
                        alt='Bộ sưu tập'
                        />
                    </div>
                    <div className='w-[58%] pl-[3%]'>
                        <h1 className='font-bold text-[20px] mb-[10px]'>Nhà máy</h1>
                        <p>
                            Phần lớn sản phẩm của Nhà Xinh được sản xuất tại nhà máy của Tổng công ty AA (AA Đức Hòa, Long An và AA Tây Ninh) có diện tích 80.000m2, với trang thiết bị hiện đại nhất và theo tiêu chuẩn ISO 9001, chuyên sản xuất các sản phẩm nội thất chất lượng cao cho các khách sạn, nhà hàng 5 sao, dự án nội thất cao cấp và xuất khẩu.
                        </p>
                        <h1 className='font-bold text-[20px] mb-[10px]'>Nhà Xinh và Cộng Đồng</h1>
                        <p>
                            Đóng góp cho cộng đồng nằm trong sứ mệnh của Nhà Xinh. Để trở thành thương hiệu tiên phong và văn minh, Nhà Xinh đã thực hiện nhiều các hoạt động cộng đồng như hỗ trợ trẻ em nghèo, tham gia các hoạt động vì môi trường như thiết kế xanh, đi bộ từ thiện,… Những bước chân, hành động không ngừng nghỉ để góp phần cho cuộc sống tốt hơn.
                        </p>
                    </div>
                </div>

                <div className='w-full h-[8 00px] flex flex-row'>
                    <div className='w-[42%] overflow-hidden'>
                        <img
                        src='https://nhaxinh.com/wp-content/uploads/2022/08/nha-may-aa-tay-ninh-5-1200x800.jpg'
                        alt='Bộ sưu tập'
                        />
                    </div>
                    <div className='w-[58%] pl-[3%]'>
                    </div>
                </div>

                <div className='w-full h-[8 00px] flex flex-row'>
                    <div className='w-[42%] overflow-hidden'>
                        <img
                        src='https://nhaxinh.com/wp-content/uploads/2022/08/nha-may-aa-tay-ninh-12-1200x800.jpg'
                        alt='Bộ sưu tập'
                        />
                    </div>
                    <div className='w-[58%] pl-[3%]'>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-[40px] font-medium mb-7'>Chuyện Nhà Xinh</h1>
                {/* <Carousel className='mb-[70px] h-[550px] block mobile:hidden average:hidden' animation='slide'>
                    {groupedPages.map((group, groupIndex) => (
                        <div key={groupIndex} className='w-auto flex flex-row'>
                            {group.map((item, i) => (
                                <Item key={i} item={item} />
                            ))}
                        </div>
                    ))}
                </Carousel> */}

                <Carousel className='mb-[70px] h-[550px] block' animation='slide'>
                    {pages.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

function Item(props)
{
    return (
        <div className='flex h-[500px] justify-center items-center w-screen'>
            <a href='' className='flex flex-col justify-center items-center space-y-[16px] w-[50%] group mobile:w-full'>
                <div className='w-[700px] h-[380px] overflow-hidden relative group-hover:brightness-105'>
                    <Image 
                    src={props.item.imageUrl}
                    width={props.item.width}
                    height={props.item.height}
                    style={{objectFit: 'cover'}}
                    quality={100}
                    alt="Item 1"
                    />
                </div>
                <div className='h-[100px] transition duration-300 group-hover:-translate-y-2 mobile:h-[300px] mobile:w-full'>
                    <h2 className='text-[20px] font-medium h-[50px] w-[700px] text-center mobile:w-full mobile:h-[80px]'>{props.item.title}</h2>
                    <p className='h-[50px] w-[700px] text-center mobile:w-full mobile:h-[80px]'>{props.item.description}</p>
                </div>
            </a>
        </div>
    )
}