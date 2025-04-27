package com.planner.backend.strategy;

public class MultiplicadorStrategy implements PontuacaoStrategy {

   @Override
   public int calcularPontuacao(int base, double velocidade) {
       return (int) (base * velocidade);
   }
}
