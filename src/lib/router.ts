import Home from "../routes/Home.svelte";
import Opere from "../routes/Opere.svelte";
import OperaDetail from "../routes/OperaDetail.svelte";
import Patrimonio from "../routes/Patrimonio.svelte";
import BookDetail from "../routes/BookDetail.svelte";
import Compagnie from "../routes/Compagnie.svelte";
import CompanyPage from "../routes/CompanyPage.svelte";
import CompanyOperaDetail from "../routes/CompanyOperaDetail.svelte";
import MisureDiSalvaguardia from "../routes/MisureDiSalvaguardia.svelte";
import MuseoPasqualino from "../routes/MuseoPasqualino.svelte";
import Contatti from "../routes/Contatti.svelte";
import NotFound from "../routes/NotFound.svelte";

export const routes = {
  "/": Home,
  "/opere": Opere,
  "/opere/:id": OperaDetail,
  "/patrimonio": Patrimonio,
  "/patrimonio/:id": BookDetail,
  "/compagnie": Compagnie,
  "/compagnie/:slug": CompanyPage,
  "/compagnie/:slug/:id": CompanyOperaDetail,
  "/misuredisalvaguardia": MisureDiSalvaguardia,
  "/musei": MuseoPasqualino,
  "/contatti": Contatti,
  "*": NotFound,
};
