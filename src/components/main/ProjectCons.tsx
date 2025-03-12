// Define ProjectItem interface
export interface ProjectItem {
    id: string;
    name: string;
    desc: string;
    image: string;
    tech: string;
    link_git: string;
    link_demo: string;
}

// List of projects: 2 e-commerce websites + 1 car rental website
export const Projects: ProjectItem[] = [
    {
        id: "ecommerce_1",
        name: "Furniture Website",
        desc: "An online furniture store with a user-friendly interface and integrated online payment system with PayOS, VnPay. Using Third-Party API: Google, FaceBook .",
        image: "../projects/image2.png",
        tech: "Javascript, Ajax, Laravel, MySql",
        link_git: "https://github.com/NguyenVanPhuoc1/webnoithat",
        link_demo: "https://noithatnvp.store/"
    },
    {
        id: "ecommerce_2",
        name: "Gift Shop",
        desc: "The Website build with Html, Css and Libary Support: Aos, TypeWriter, ...",
        image: "../projects/image1.png",
        tech: "Ajax, Laravel, MySql, Docker",
        link_git: "https://github.com/NguyenVanPhuoc1/web-gift",
        link_demo: "#"
    },
    {
        id: "rental_car",
        name: "EasyCar Rental",
        desc: "A car rental service website with an online booking system and rental history management.",
        image: "../projects/image3.png",
        tech: "Vue.js, MongoDB, Laravel, Ant Design Vue",
        link_git: "https://github.com/NguyenVanPhuoc1/booking_vehicle",
        link_demo: "https://booking-vehicle-hibw.vercel.app/"
    }
];
