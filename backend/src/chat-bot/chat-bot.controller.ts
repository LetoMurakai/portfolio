import { Body, Controller, Post } from '@nestjs/common';
import { ChatBotProvider } from './chat-bot.provider';

interface ChatBot {
	chatId: number;
	message: string;
}

@Controller('chat-bot')
export class ChatBotController {
	constructor(private readonly chat: ChatBotProvider) {}

	@Post('mensagem')
	async enviarMensagem(@Body() body: ChatBot): Promise<ChatBot | null> {
		return this.chat.enviarMensagem(body);
	}
}
