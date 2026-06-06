// Assets
import Project1Img from '@/assets/project-portfolio.png';
import Project2Img from '@/assets/project-mini-apt.png';
import Project3Img from '@/assets/project-weather.png';
// import Project4Img from '@/assets/project4.jpg';
// import Project5Img from '@/assets/project5.jpg';
// import Project6Img from '@/assets/project6.jpg';

interface ProjectData {
  id: string;
  image: string;
  title: string;
  description: string;
  developBy: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const mockProjectData: ProjectData[] = [
  {
    id: crypto.randomUUID(),
    image: Project1Img,
    title: 'Portfolio',
    description:
      'Dự án thiết kế và phát triển trang web cá nhân đóng vai trò như một bản CV trực quan sinh động nhất. Nơi tổng hợp toàn bộ thông tin, kỹ năng chuyên môn và các cột mốc ấn tượng trong quá trình làm nghề của bản thân.',
    developBy: 'Monochrome',
    githubUrl: '',
    demoUrl: 'https://portfolio-wine-alpha-70.vercel.app/',
  },
  {
    id: crypto.randomUUID(),
    image: Project2Img,
    title: 'Mini Apartment Management',
    description:
      'Hệ thống dashboard thông minh giúp tối ưu hóa việc quản lý vận hành chung cư mini từ doanh thu, hợp đồng đến dịch vụ điện nước. Giao diện trực quan cung cấp số liệu phân tích thời gian thực, giúp chủ nhà và quản lý đưa ra quyết định chính xác, nhanh chóng.',
    developBy: 'Monochrome',
    githubUrl: 'https://github.com/quandevfr/mini-apt-frontend',
    demoUrl: '',
  },
  {
    id: crypto.randomUUID(),
    image: Project3Img,
    title: 'Weather App',
    description:
      'Ứng dụng cung cấp thông tin dự báo thời tiết theo thời gian thực với độ chính xác cao về nhiệt độ, độ ẩm và tốc độ gió.',
    developBy: 'Monochrome',
    githubUrl: '',
    demoUrl: 'https://weather-app-one-beta-12.vercel.app/',
  },
  // {
  //   id: crypto.randomUUID(),
  //   image: Project4Img,
  //   title: 'Facebook Clone',
  //   description:
  //     'Kết nối, trò chuyện với bạn bè ở khắp nơi. Chia sẻ những khoảnh khắc thú vị trong cuộc sống.',
  //   developBy: 'Monochrome',
  //   githubUrl: 'https://github.com/',
  //   demoUrl: '',
  // },
  // {
  //   id: crypto.randomUUID(),
  //   image: Project5Img,
  //   title: 'Quản Lý Doanh Nghiệp',
  //   description:
  //     'Quản lý nhân viên, theo dõi chấm công, tự động tính toán bảng lương cho nhân viên.',
  //   developBy: 'Monochrome',
  //   githubUrl: 'https://github.com/',
  //   demoUrl: '',
  // },
  // {
  //   id: crypto.randomUUID(),
  //   image: Project6Img,
  //   title: 'Portfolio',
  //   description:
  //     'Trang giới thiệu online, giúp mọi người có thể tìm kiếm, xem thông tin và liên hệ dễ dàng.',
  //   developBy: 'Monochrome',
  //   githubUrl: 'https://github.com/',
  //   demoUrl: '',
  // },
];
