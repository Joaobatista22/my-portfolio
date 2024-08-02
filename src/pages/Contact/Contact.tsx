import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import ContactForm from "../../components/ContactForm/ContactForm";

import { useIsLoaded } from "../../contexts/IsLoadedContext";
import {
	ContactContainer,
	ContactHeader,
	ContactTitle,
	ContainerIcons,
	ContainerText,
	ReflexLink,
	Title,
} from "./Contact.styles";

const Projects: React.FC = () => {
	const { isLoaded } = useIsLoaded();

	return (
		<ContactContainer $isLoaded={isLoaded}>
			<ContactHeader>
				<ContactTitle>Contato</ContactTitle>
			</ContactHeader>
			<ContainerText $isLoaded={isLoaded}>
				<Title>Você tem alguma pergunta?</Title>
				<h3>ESTOU AO SEU SERVIÇO.</h3>
			</ContainerText>
			<ContainerIcons $isLoaded={isLoaded}>
				<div>
					<FaPhoneVolume style={{ fontSize: "2rem" }} />
					<h3>Celular</h3>
					<ReflexLink href="tel:11943363366" target="_blank" rel="noreferrer">
						(11)94336-3366
					</ReflexLink>
				</div>
				<div>
					<MdEmail style={{ fontSize: "2rem" }} />
					<h3>Email</h3>
					<ReflexLink
						href="mailto:joaobatiista.ds@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						joaobatiista.ds@gmail.com
					</ReflexLink>
				</div>
				<div>
					<IoLocationSharp style={{ fontSize: "2rem" }} />
					<h3>Endereço</h3>
					<ReflexLink
						href="https://www.google.com/maps?q=Av+Paulista,+1234,+São+Paulo,+SP"
						target="_blank"
						rel="noreferrer"
					>
						São Paulo, SP
					</ReflexLink>
				</div>
				<div>
					<TiSocialLinkedin style={{ fontSize: "2rem" }} />
					<h3>LinkedIn</h3>
					<ReflexLink
						href="https://www.linkedin.com/in/joão-batista-ds"
						target="_blank"
						rel="noreferrer"
					>
						in/joão-batista-ds
					</ReflexLink>
				</div>
			</ContainerIcons>
			<ContainerText $isLoaded={isLoaded}>
				<Title>Me mande um email</Title>
				<h3>Minha resposta costuma ser rápida.</h3>
			</ContainerText>
			<ContactForm />
		</ContactContainer>
	);
};

export default Projects;
