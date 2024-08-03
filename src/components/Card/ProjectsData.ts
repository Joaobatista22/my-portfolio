import CarProject from "../../assets/imgproject/CarImage.png";
import Codburger from "../../assets/imgproject/Codeburger.png";
import ConvertMoney from "../../assets/imgproject/ConvertMoney.png";
import GithubFinder from "../../assets/imgproject/GithubFinder.png";
import OnePiece from "../../assets/imgproject/Onepiece.png";
import Starbucks from "../../assets/imgproject/Starbucks.png";
import TibiaProject from "../../assets/imgproject/Tibia.png";
import Backend from "../../assets/imgproject/backend.png";
import Dice from "../../assets/imgproject/dice.png";
import Gta from "../../assets/imgproject/gta.png";
import Netflix from "../../assets/imgproject/netflix.png";
import RsSuportes from "../../assets/imgproject/rssuporte.png";

export interface Project {
	id: number;
	title: string;
	image: string;
	description: string;
	github: string;
	deploy: string;
	technologies: string[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: "Code Burger",
		image: Codburger,
		description:
			"Projeto completo FullStack, contando com tela de login, registrar, página principal, página categorias, carrinho. contando com tela de admin onde pode ser adicionado produtos, categorias, editar, deletar e atualizar status dos pedidos. ",
		github: "https://github.com/Joaobatista22/code-burger-interface",
		deploy: "https://code-burger-interface-five.vercel.app/login",
		technologies: ["React", "Node", "PostreSQL", "Styled", "JavaScript"],
	},
	{
		id: 2,
		title: "Landing Page Car",
		image: CarProject,
		description:
			"Para este projeto, desenvolvi uma landing page de amostra de carros utilizando HTML, CSS e JavaScript. O objetivo foi criar um site dinâmico e visualmente atraente que destaca as principais características dos veículos exibidos.",
		github: "https://github.com/Joaobatista22/Page_Car",
		deploy: "https://joaobatista22.github.io/Page_Car/",
		technologies: ["Html", "Css", "JavaScript"],
	},
	{
		id: 3,
		title: "Github Finder",
		image: GithubFinder,
		description:
			"Projeto em React com TypeScript consumindo api do github para encontrar usuários e retornar dados, usei o react-router-dom para criar um novo path onde listar os melhores repositórios do usuário.",
		github: "https://github.com/Joaobatista22/github_finder",
		deploy:
			"https://github-finder-mi7noflz7-joaobatista22s-projects.vercel.app/",
		technologies: ["Vite", "React", "TypeScript", "Styled"],
	},
	{
		id: 4,
		title: "Landing Tibia MMORP",
		image: TibiaProject,
		description: "Página inspirada no MMORPG Tibia.",
		github: "https://github.com/Joaobatista22/Tibia_React_Vite",
		deploy: "https://tibia-react-vite.vercel.app/",
		technologies: ["Vite", "React", "JavaScript", "Styled"],
	},
	{
		id: 5,
		title: "Convert Money",
		image: ConvertMoney,
		description:
			"O objetivo principal dessa aplicação é proporcionar aos usuários a capacidade de realizar conversões de valores de moedas de diferentes países.",
		github: "https://github.com/Joaobatista22/ProgetoMoney",
		deploy: "https://joaobatista22.github.io/ProgetoMoney/",
		technologies: ["Html", "Css", "JavaScript"],
	},
	{
		id: 6,
		title: "Dice Show",
		image: Dice,
		description:
			"O objetivo principal dessa aplicação é sortear um numero aleatorio entre o numero inicial e o final que cosiste na escolha do usuaro.",
		github: "https://github.com/Joaobatista22/PROJETO-DEVSORTEIO",
		deploy: "https://joaobatista22.github.io/PROJETO-DEVSORTEIO/",
		technologies: ["Html", "Css", "JavaScript"],
	},
	{
		id: 7,
		title: "Landing One Piece",
		image: OnePiece,
		description:
			"Criei uma landing page inspirada no universo do anime One Piece, com o objetivo de capturar a essência e o estilo visual da série. A página foi projetada para ser atraente e fácil de navegar, proporcionando uma experiência imersiva aos fãs do anime.",
		github: "https://github.com/Joaobatista22/One-Piece-Landing-Page",
		deploy: "https://joaobatista22.github.io/One-Piece-Landing-Page/",
		technologies: ["Html", "Css", "JavaScript"],
	},
	{
		id: 8,
		title: "Page RS Suportes",
		image: RsSuportes,
		description:
			"Site Projetado para o cliente de ferragens e suportes de calhas. (Atualmente no ar)",
		github: "https://github.com/Joaobatista22/RS-SUPORTES-FERRAGENS",
		deploy: "https://rssuportes.com.br/",
		technologies: ["Html", "Css", "JavaScript", "Bootstrap"],
	},
	{
		id: 9,
		title: "Starbucks LandingPage",
		image: Starbucks,
		description: "LandingPage do Starbucks.",
		github: "https://github.com/Joaobatista22/Starbucks-LandingPage",
		deploy: "https://joaobatista22.github.io/Starbucks-LandingPage/",
		technologies: ["Html", "Css", "JavaScript"],
	},
	{
		id: 10,
		title: "Backend Code Burger",
		image: Backend,
		description:
			"A arquitetura deste projeto backend é modular e organizada. Contendo controllers, middlewares, models, e esquemas de dados (schemas). A pasta config contém configurações de autenticação (auth.js), banco de dados, e upload de arquivos. A pasta database possui arquivos de configuração e inicialização do banco de dados.",
		github: "https://github.com/Joaobatista22/code-burger-node",
		deploy: "https://github.com/Joaobatista22",
		technologies: ["Node", "Backend", "JavaScript"],
	},
	{
		id: 11,
		title: "Grand Thinft Auto",
		image: Gta,
		description: "LandingPage do Grand Thinft Auto.",
		github: "https://github.com/Joaobatista22/Projeto-GTA",
		deploy: "https://joaobatista22.github.io/Projeto-GTA/",
		technologies: ["Html", "Css", "JavaScript"],
	},
	{
		id: 12,
		title: "Netflix Page",
		image: Netflix,
		description: "LandingPage do Netflix.",
		github: "https://github.com/Joaobatista22/projeto-netflix",
		deploy: "https://joaobatista22.github.io/projeto-netflix/",
		technologies: ["Html", "Css", "JavaScript"],
	},
];
