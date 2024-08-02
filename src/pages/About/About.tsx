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

	return (
		<ContactContainer $isLoaded={isLoaded}>
			<ContactHeader>
				<ContactTitle>Sobre</ContactTitle>
			</ContactHeader>
			<PageContainer>
				{" "}
				<Name>
					Me chamo João Batista e sou <span>Desenvolvedor Web</span>
				</Name>
				<Description>
					Sou um Desenvolvedor. Atualmente estou em transição de carreira da
					área de logística e varejo para a programação. Fascinado pela
					tecnologia e suas transformações, decidi buscar novas oportunidades na
					área. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas
					e constantemente estou explorando novas ferramentas e linguagens. Sou
					proativo, adaptável e estou ansioso para enfrentar novos desafios e
					contribuir para soluções inovadoras. Além dos estudos, tenho me
					dedicado a projetos pessoais.
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
				<div>
					<Button>Baixar CV</Button>
					<Button>Contate-me</Button>
				</div>
				<SkillIcons>
					<SkillIcon src="/path/to/html-icon.png" alt="HTML" />
					<SkillIcon src="/path/to/css-icon.png" alt="CSS" />
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
