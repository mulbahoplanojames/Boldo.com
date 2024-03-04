//! navLinks Data
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
];

//! Team Data
import team1 from "/src/assets/team1.png";
import team2 from "/src/assets/team2.png";
import team3 from "/src/assets/team3.png";
export const teamMembers = [
  { id: 1, image: team1, name: "Oplano James Mulbah", position: "Co-Founder" },
  { id: 1, image: team2, name: "Dwight Schrute", position: "General Manager" },
  { id: 1, image: team3, name: "John Stephen", position: "Softwere Engineer" },
];

//! Home Blog Data
import blogimg1 from "/src/assets/1.png";
import profile1 from "/src/assets/profile1.png";
import blogimg2 from "/src/assets/2B.png";
import profile2 from "/src/assets/profile2.png";
import blogimg3 from "/src/assets/3B.png";
import profile3 from "/src/assets/profile3.png";
export const homeBlogs = [
  {
    id: 1,
    profileImage: profile1,
    blogImage: blogimg1,
    name: "Chandler Bing",
    description: "Pitch termsheet backing validation focus release",
    data: "Novmember 25, 2022",
  },
  {
    id: 2,
    profileImage: profile2,
    blogImage: blogimg2,
    name: "Monica Geller",
    description:
      "Beta protostye sale ipad Gen-z marketing network effect value proposition",
    data: "October 25, 2022",
  },
  {
    id: 3,
    profileImage: profile3,
    blogImage: blogimg3,
    name: "Rachel Green",
    description:
      "Seed round direct mailling non-disclosure agreement graphical user interface rockstar",
    data: "Novmember 25, 2022",
  },
];
