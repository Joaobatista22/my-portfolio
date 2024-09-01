import { FooterContainer, TextFooter } from "./footer.styles";

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<TextFooter>
				© 2024 Developed By{" "}
				<span style={{ fontWeight: "bold" }}>João Batista</span>
			</TextFooter>
		</FooterContainer>
	);
};

export default Footer;
