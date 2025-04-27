package com.planner.backend.factory;

import com.planner.backend.Jogador;

public class JogadorFactory {
   public static Jogador criarJogador(String nome) {
        Jogador jogador = new Jogador();
        jogador.setNome(nome);
        return jogador;
    }
}
