export const taskData = [
  {
    title: "Ikoyi 3 Bedroom Apartment",
    desc: "Luxury apartment with modern finishing",
    rate: "High",
    type: "Flat",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    progess: 100,
    projectID: 113,
    status: "complete",
  },
  {
    title: "Ajah 4 Bedroom Duplex",
    desc: "Spacious family home with parking space",
    rate: "Medium",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    progess: 40,
    projectID: 114,
    status: "on progress",
  },
  {
    title: "Victoria Island 2 Bedroom Flat",
    desc: "Modern apartment close to business district",
    rate: "High",
    type: "Flat",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    progess: 83,
    projectID: 115,
    status: "in review",
  },
  {
    title: "Yaba 1 Bedroom Apartment",
    desc: "Affordable apartment in a quiet location",
    rate: "Low",
    type: "Flat",
    image: "",
    progess: 0,
    projectID: 116,
    status: "to-do",
  },
  {
    title: "Chevron 5 Bedroom Duplex",
    desc: "Premium smart home with spacious rooms",
    rate: "High",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    progess: 55,
    projectID: 117,
    status: "on progress",
  },
  {
    title: "Sangotedo 3 Bedroom Flat",
    desc: "Newly built apartment with modern facilities",
    rate: "Medium",
    type: "Flat",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    progess: 75,
    projectID: 118,
    status: "in review",
  },
  {
    title: "Surulere 2 Bedroom Apartment",
    desc: "Renovated apartment in a central location",
    rate: "Medium",
    type: "Flat",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    progess: 100,
    projectID: 119,
    status: "complete",
  },
  {
    title: "Osapa 4 Bedroom Duplex",
    desc: "Contemporary duplex with private compound",
    rate: "High",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    progess: 0,
    projectID: 120,
    status: "to-do",
  },
  {
    title: "Gbagada 2 Bedroom Flat",
    desc: "Well-finished apartment with steady power",
    rate: "Low",
    type: "Flat",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    progess: 100,
    projectID: 121,
    status: "complete",
  },
  {
    title: "Oniru 3 Bedroom Duplex",
    desc: "Luxury residential property with modern design",
    rate: "High",
    type: "Duplex",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
    progess: 60,
    projectID: 122,
    status: "on progress",
  },
];



//Filtering Data
export const todo = taskData.filter((status) => status.status === "to-do");
export const onProgress = taskData.filter(
  (status) => status.status === "on progress",
);
export const inReview = taskData.filter(
  (status) => status.status === "in review",
);
export const complete = taskData.filter(
  (status) => status.status === "complete",
);
