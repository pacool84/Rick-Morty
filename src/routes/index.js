import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header =
    null ||
    document.getElementById(
      "header"
    ); /* Este es el header que se encuentra en el html como id */
  const content =
    null ||
    document.getElementById(
      "content"
    ); /* Este es el content que se encuentra en el html en el tag de section */

  header.innerHTML = await Header(); /* Aqui es donde empujamos el header hacia el html */
};

export default router;
