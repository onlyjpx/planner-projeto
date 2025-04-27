package com.planner.backend.decorator;

public class BonusTempoSobrevivido extends PontuacaoDecorator {
   private final int segundos;

   public BonusTempoSobrevivido(CalculadoraPontuacao componente, int segundos) {
       super(componente);
       this.segundos = segundos;
   }

   @Override
   public int calcular() {
       int bonus = segundos > 60 ? 100 : (segundos > 30 ? 50 : 0);
       return componente.calcular() + bonus;
   }
}
