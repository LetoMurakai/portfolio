'use server';

import Mensagem from '@/model/mensagem';

export default async function conversar(chatId: string, message: Mensagem): Promise<string> {
	try {
		const webhookUrl = process.env.CHAT_WEBHOOK;

		if (!webhookUrl) {
			console.error('CHAT_WEBHOOK não está definido.');
			return 'Não foi possível enviar a mensagem. Tente novamente mais tarde.';
		}

		const response = await fetch(webhookUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ chatId, message: message.texto }),
		});

		if (!response.ok) {
			console.error(`Erro ao chamar o webhook: ${response.status} ${response.statusText}`);
			return 'Não foi possível enviar a mensagem. Tente novamente mais tarde.';
		}

		const data = await response.json();
		return data?.[0]?.output ?? 'A resposta do chatbot está indisponível no momento.';
	} catch (error) {
		console.error('Erro ao enviar mensagem:', error);
		return 'Não foi possível enviar a mensagem. Tente novamente mais tarde.';
	}
}
