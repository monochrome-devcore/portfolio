// Assets
import Project1Img from "@/assets/project1.jpg";
import Project2Img from "@/assets/project2.jpg";
import Project3Img from "@/assets/project3.jpg";
import Project4Img from "@/assets/project4.jpg";
import Project5Img from "@/assets/project5.jpg";
import Project6Img from "@/assets/project6.jpg";

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
    title: "Todo List",
    description:
      "Ghi chú nhanh chóng, tiện lơi. Giao diện dễ sử dụng, thân thiện với người dùng.",
    developBy: "Monochrome",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    id: crypto.randomUUID(),
    image: Project2Img,
    title: "Trang Thông Tin Công Nghệ",
    description:
      "Cập nhật tin tức mới nhất về công nghệ. Theo dõi tình hình công nghệ trên toàn thế giới.",
    developBy: "Monochrome",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    id: crypto.randomUUID(),
    image: Project3Img,
    title: "Spotify Clone",
    description:
      "Nghe nhạc, xem video hoàn toàn miễn phí. Nghe những album yêu thích ngay cả khi không có kết nối mạng.",
    developBy: "Monochrome",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    id: crypto.randomUUID(),
    image: Project4Img,
    title: "Facebook Clone",
    description:
      "Kết nối, trò chuyện với bạn bè ở khắp nơi. Chia sẻ những khoảnh khắc thú vị trong cuộc sống.",
    developBy: "Monochrome",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    id: crypto.randomUUID(),
    image: Project5Img,
    title: "Quản Lý Doanh Nghiệp",
    description:
      "Quản lý nhân viên, theo dõi chấm công, tự động tính toán bảng lương cho nhân viên.",
    developBy: "Monochrome",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
  {
    id: crypto.randomUUID(),
    image: Project6Img,
    title: "Portfolio",
    description:
      "Trang giới thiệu online, giúp mọi người có thể tìm kiếm, xem thông tin và liên hệ dễ dàng.",
    developBy: "Monochrome",
    githubUrl: "https://github.com/",
    demoUrl: "",
  },
];
