package com.planner.backend;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PontuacaoDTO {
   private Long jogadorId;
   private int basePontos;
   private double velocidade;
   private int tempoSobrevivido;
}
