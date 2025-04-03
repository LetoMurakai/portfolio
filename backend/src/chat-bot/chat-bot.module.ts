import { Module } from '@nestjs/common';
import { ChatBotProvider } from './chat-bot.provider';
import { ChatBotController } from './chat-bot.controller';

@Module({
	providers: [ChatBotProvider],
	controllers: [ChatBotController],
	exports: [ChatBotProvider],
})
export class ChatBotModule {}
