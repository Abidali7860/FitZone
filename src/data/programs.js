import weightLossImage from "../assets/images/hero/hero1.webp";
import muscleBuildingImage from "../assets/images/hero/hero2.webp";
import strengthTrainingImage from "../assets/images/about/abt.webp";

const programs = [
  {
    id: 1,
    number: "01",
    title: "Weight Loss",
    description:
      "Burn fat, improve your stamina and build a healthier body with our structured weight loss program.",
    duration: "12 Weeks",
    level: "Beginner",
    image: weightLossImage,
  },

  {
    id: 2,
    number: "02",
    title: "Muscle Building",
    description:
      "Build lean muscle, increase your strength and transform your physique with expert guidance.",
    duration: "16 Weeks",
    level: "Intermediate",
    image: muscleBuildingImage,
  },

  {
    id: 3,
    number: "03",
    title: "Strength Training",
    description:
      "Push your limits with progressive strength training designed to improve power and performance.",
    duration: "10 Weeks",
    level: "Advanced",
    image: strengthTrainingImage,
  },
];

export default programs;
