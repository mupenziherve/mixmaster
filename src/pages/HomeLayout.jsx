import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return  <>

    <Navbar/>
    <Outlet/>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe praesentium sunt ea hic deleniti debitis iusto nostrum, amet, nesciunt tenetur atque, odio laborum quisquam dolores error laboriosam veniam voluptas? Veritatis.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minus tempora nulla unde! Velit saepe quidem culpa. Facere magni dicta beatae in nostrum, optio iure est, cum accusantium deleniti incidunt!

  </> ;
};
export default HomeLayout;
