import { Injectable } from '@nestjs/common';

interface ChatBot {
	chatId: number;
	message: string;
}

@Injectable()
export class ChatBotProvider {
	async enviarMensagem(body: ChatBot): Promise<ChatBot | null> {
		try {
			const response = await fetch(
				'https://letomurakai.app.n8n.cloud/webhook-test/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				},
			);

			const text = await response.text();
			if (!text) {
				return null;
			}

			return JSON.parse(text);
		} catch (error) {
			console.error('Erro ao enviar mensagem:', error);
			return null;
		}
	}
}
