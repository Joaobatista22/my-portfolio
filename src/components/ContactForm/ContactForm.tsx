import emailjs from "emailjs-com";
import type React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input, TextArea } from "./ContactForm.styles";

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		assunto: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const result = await toast.promise(
				emailjs.sendForm(
					"service_zyb642p",
					"template_jedfg9g",
					e.currentTarget,
					"tMYWyOEtaht5vC1ju",
				),
				{
					pending: "Enviando mensagem...",
					success: "Mensagem enviada com sucesso!",
					error:
						"Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
				},
			);

			console.log(result.text);
			// Limpar o formulário após o envio bem-sucedido
			setFormData({ name: "", email: "", assunto: "", message: "" });
		} catch (error) {
			console.error("Erro ao enviar e-mail:", error);
		}
	};

	return (
		<>
			<ToastContainer autoClose={1000} />
			<Form onSubmit={handleSubmit}>
				<div>
					<Input
						type="text"
						name="name"
						placeholder="Nome"
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<Input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<Input
						type="text"
						name="assunto"
						placeholder="Assunto"
						value={formData.assunto}
						onChange={handleChange}
						required
					/>
				</div>
				<TextArea
					name="message"
					placeholder="Mensagem"
					rows={5}
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<Button type="submit">Enviar</Button>
			</Form>
		</>
	);
};

export default ContactForm;
