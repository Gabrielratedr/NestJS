import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBSM(): string {
    return 'Responsabilidade Pessoal<br>Mentalidade de Crescimento<br>Orientação ao Futuro<br>Persistência<br>Comunicação<br>Trabalho em Equipe<nr>Atenção aos Detalhes<br>Proatividade<br>Profissionalismo<br>Precisão Técnica';
  }
  getObjetivo(): string {
    return 'Aprender back-end, no geral.';
  }
}
