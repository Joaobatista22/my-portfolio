import type React from "react";
import { techIcons } from "../../components/Card/techIcons";
import { useIsLoaded } from "../../contexts/IsLoadedContext";
import { ContactHeader, ContactTitle } from "../Contact/Contact.styles";
import {
	Button,
	ContactContainer,
	ContactInfo,
	ContactItem,
	Description,
	Name,
	PageContainer,
	SkillIcon,
	SkillIcons,
	TimelineColumn,
	TimelineDate,
	TimelineDescription,
	TimelineItem,
	TimelineSection,
	TimelineTitle,
} from "./About.styles";

const About: React.FC = () => {
	const { isLoaded } = useIsLoaded();

	const handleDownloadCV = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const link = document.createElement("a");
		link.href =
			"https://drive.google.com/uc?export=download&id=1Euqh55q_9IRwSPP1PsxmSvsUGNbRgjkx";
		link.download = "CV_JoaoBatista.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<ContactContainer $isLoaded={isLoaded}>
			<ContactHeader>
				<ContactTitle>Sobre</ContactTitle>
			</ContactHeader>
			<PageContainer>
				<Name>
					Me chamo João Batista e sou <span>Desenvolvedor Web</span>
				</Name>
				<Description>
					Atualmente estou em transição de carreira da área de logística e
					varejo para a programação. Fascinado pela tecnologia e suas
					transformações, decidi buscar novas oportunidades na área. Atualmente,
					estou cursando Análise e Desenvolvimento de Sistemas e constantemente
					estou explorando novas ferramentas e linguagens. Sou proativo,
					adaptável e estou ansioso para enfrentar novos desafios e contribuir
					para soluções inovadoras. Além dos estudos, tenho me dedicado a
					projetos pessoais.
				</Description>
				<ContactInfo>
					<ContactItem>Cidade : São Paulo</ContactItem>
					<ContactItem>Estado : SP</ContactItem>
					<ContactItem
						href="mailto:joaobatiista.ds@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						Email: joaobatiista.ds@gmail.com
					</ContactItem>
					<ContactItem href="tel:11943363366" target="_blank" rel="noreferrer">
						Telefone : (11) 94336-3366
					</ContactItem>
					<ContactItem
						href="https://www.linkedin.com/in/joão-batista-ds"
						target="_blank"
						rel="noreferrer"
					>
						LinkedIn : joão-batista-ds
					</ContactItem>
					<ContactItem
						href="https://github.com/Joaobatista22"
						target="_blank"
						rel="noreferrer"
					>
						GitHub : Joaobatista22
					</ContactItem>
				</ContactInfo>
				<div style={{ margin: "2rem 0" }}>
					<Button to="#" onClick={handleDownloadCV}>
						Baixar CV
					</Button>
					<Button to="/contact">Contate-me</Button>
				</div>
				<SkillIcons>
					<SkillIcon src={techIcons.Html} alt="HTML" />
					<SkillIcon src={techIcons.Css} alt="CSS" />
					<SkillIcon src={techIcons.JavaScript} alt="JavaScript" />
					<SkillIcon src={techIcons.React} alt="React" />
					<SkillIcon src={techIcons.TypeScript} alt="TypeScript" />
					<SkillIcon src={techIcons.Node} alt="Node.js" />
					<SkillIcon src={techIcons.Vite} alt="Vite" />
					<SkillIcon src={techIcons.Styled} alt="Styled Components" />
					<SkillIcon src={techIcons.PostreSQL} alt="PostgreSQL" />
					<SkillIcon src={techIcons.Backend} alt="Backend" />
					<SkillIcon src={techIcons.Bootstrap} alt="Bootstrap" />
				</SkillIcons>
				<TimelineSection>
					<TimelineColumn>
						<h2>Educação</h2>
						<TimelineItem>
							<TimelineTitle>
								Análise e Desenvolvimento de Sistemas
							</TimelineTitle>
							<TimelineDate>2024 - 2026</TimelineDate>
							<TimelineDescription>
								Estudando atualmente Análise e Desenvolvimento de Sistemas, com
								foco em arquitetura de software e desenvolvimento de aplicações.
								Experiência em modelagem de dados, gestão de projetos e
								requisitos.
							</TimelineDescription>
						</TimelineItem>
					</TimelineColumn>
					<TimelineColumn>
						<h2>Curso</h2>
						<TimelineItem>
							<TimelineTitle>FullStack - DevClub</TimelineTitle>
							<TimelineDate>2023 - 2024</TimelineDate>
							<TimelineDescription>
								A formação destaca uma abordagem prática com projetos reais
								desde o início, onde os alunos aprendem HTML/CSS, JavaScript,
								TypeScript, Frameworks como React para frontend e Node.js para
								backend, com ênfase no uso de Docker para gerenciamento de
								contêineres. O treinamento inclui o uso de ferramentas como
								Postgres, MongoDB,, Insomnia para testes de API, e Git e GitHub
								para controle de versão e colaboração, além do consumo eficaz de
								APIs de terceiros.
							</TimelineDescription>
						</TimelineItem>
					</TimelineColumn>
				</TimelineSection>
			</PageContainer>
		</ContactContainer>
	);
};

export default About;
