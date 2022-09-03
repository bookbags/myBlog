import game from "@/pages/game";
import aboutMe from "@/pages/aboutMe";
import blog from "@/pages/blog";
import login from "@/pages/login";
import message from "@/pages/message";
import notFound from "@/pages/notFound";
import blogDetail from "@/pages/blog/blogDetail"

const routes = [
    {
        path: "/",
        redirect: "/login"
    }, {
        path: "/game",
        component: game,
        name: "game"
    }, {
        path: "/aboutMe",
        component: aboutMe,
        name: "aboutMe"
    }, {
        path: "/blog",
        component: blog,
        name: "blog"
    }, {
        path: "/blog/:id",
        component: blogDetail,
        name: blogDetail,
        noMenu: true
    },{
        path: "/login",
        component: login,
        name: "login"
    }, {
        path: "/message",
        component: message,
        name: "message"
    },{
        path: "*",
        component: notFound,
        name: "notFound"
    }
];
export default routes;