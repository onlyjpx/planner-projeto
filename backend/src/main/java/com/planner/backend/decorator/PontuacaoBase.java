package com.planner.backend.decorator;

public class PontuacaoBase implements CalculadoraPontuacao {
   private final int pontosBase;

   public PontuacaoBase(int pontosBase) {
       this.pontosBase = pontosBase;
   }

   @Override
   public int calcular() {
       return pontosBase;
   }
}

