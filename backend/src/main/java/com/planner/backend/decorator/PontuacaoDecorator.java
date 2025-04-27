package com.planner.backend.decorator;

public abstract class PontuacaoDecorator implements CalculadoraPontuacao {
   protected CalculadoraPontuacao componente;

   public PontuacaoDecorator(CalculadoraPontuacao componente) {
       this.componente = componente;
   }
}