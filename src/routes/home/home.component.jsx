import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Dog Food",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_VU8-dfo_4S7BcOKxVyJpuLZbjclIKGeQA&usqp=CAU",
    },
    {
      id: 2,
      title: "Cat Food",
      imageUrl:
        "https://images.unsplash.com/photo-1571151596869-2663a84c1e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      title: "Fish & Turtles",
      imageUrl:
        "https://images.unsplash.com/photo-1516970739312-08b075784b71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjYzfHxmaXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      title: "Birds",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1678599259621-99af8cde8913?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fFBhcnJvdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      title: "Nutritional Suppliments",
      imageUrl:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F01%2F06%2FNutrition-Strength-Vitamin-C-for-Dogs-1.jpg",
    },
    {
      id: 6,
      title: "Pet Grooming",
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRz04l7kmGLTjCAtGIOEL5riXZNwfykRlIT9xw1F_txRXoGEopp",
    },
    {
      id: 7,
      title: "Pet Accessories",
      imageUrl:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/716dCJ9LRLL._SL1500_.jpg",
    },
    {
      id: 8,
      title: "Cages & Carriers",
      imageUrl:
        "https://www.airpets.in/icy/assets/products/71af7f05423716302283d4cb2d722a21.png",
    },
  ];
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
