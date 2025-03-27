"use server"
import Mensagem from "@/Model/Mensagem"

export default async function conversar(
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBHOOK
	if (!webhookUrl) return null

	const resposta = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatId,
			mensagem: mensagem.texto,
		}),
	})

	const raw = await resposta.text()
	const msg = await JSON.parse(raw)
	return msg['Resposta:']
}
