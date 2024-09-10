export type TFeaturedService = {
    name: string;
    image: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
    id: string;
  };
  export const serviceData = [
    {
      id: "11",
      name: "Exterior Cleaning",
      image: "https://i.ibb.co/rpb3Z49/feature1.jpg",
      description:
        "A 30-minute introductory session where we’ll explore your main concerns, evaluate your needs, and outline a strategy to meet your goals. This consultation serves as a first step in understanding how our services can best support you.",
      price: 150,
      duration: 40,
      isDeleted: false,
    },
    {
      id: "22",
      name: "Interior Cleaning",
      image: "https://i.ibb.co/sjwCqxQ/feature2.jpg",
      description:
        "A Comprehensive One-Hour Therapy Session focused on providing In-Depth Counseling and Support. We will explore Ongoing Challenges, develop effective Coping Strategies, and work towards Sustainable, Long-Term Solutions. This session is ideal for those seeking more Intensive Guidance and Care.",
      price: 190,
      duration: 60,
      isDeleted: false,
    },
    {
      id: "33",
      name: "Engine Service",
      image: "https://i.ibb.co/1Jmwjpb/feature3.jpg",
      description:
        "A personalized 45-minute session focusing on nutritional advice tailored to your specific health goals and dietary needs. This session includes a detailed analysis of your current diet and actionable recommendations for improvement.",
      price: 110,
      duration: 45,
      isDeleted: false,
    },
    {
      id: "44",
      name: "Engine oil change",
      image: "https://i.ibb.co/Bj2Z9NK/feature4.jpg",
      description:
        "A brief 20-minute session to review progress, address any concerns, and adjust the treatment plan as necessary. This session ensures that you stay on track and continue to make improvements towards your goals.",
      price: 50,
      duration: 30,
      isDeleted: false,
    },
    {
      id: "55",
      name: "Car battery chekup",
      image: "https://i.ibb.co/j33kVRm/feature5.jpg",
      description:
        "A 90-minute group session focusing on techniques to manage and reduce stress. Participants will learn about mindfulness, relaxation exercises, and practical tools to handle stressful situations effectively. Ideal for individuals or teams.",
      price: 200,
      duration: 90,
      isDeleted: false,
    },
    {
      id: "66",
      name: "Maintanance Advice",
      image: "https://i.ibb.co/1ZL32TJ/feature6.jpg",
      description:
        "This service has been marked as deleted and is no longer available. It was previously offered as a part of our program but has since been discontinued. Please refer to other available services for your needs.",
      price: 20,
      duration: 30,
      isDeleted: false,
    },
  ];