import type { Tecnologia } from "@core";
import { Controller, Get } from '@nestjs/common';
import { TecnologiaProvider } from './tecnologia.provider';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly repo: TecnologiaProvider) {}
  @Get()
  async obterTodas(): Promise<Tecnologia[]>{
    return await this.repo.obterTodas();
  }

  @Get('destaques')
  async obterDestaques(): Promise<Tecnologia[]>{
    return await this.repo.obterDestaques();
  }
}
