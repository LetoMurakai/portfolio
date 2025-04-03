import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { ChatBotController } from './chat-bot/chat-bot.controller';
import { ChatBotModule } from './chat-bot/chat-bot.module';

@Module({
  imports: [DbModule, ProjetoModule, TecnologiaModule, ChatBotModule],
  controllers: [AppController, ChatBotController],
})
export class AppModule {}
