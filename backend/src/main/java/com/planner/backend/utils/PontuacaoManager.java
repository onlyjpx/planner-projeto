package com.planner.backend.utils;

public class PontuacaoManager {

    private static PontuacaoManager instance;
    private int pontuacaoAtual;
    private int highScore;

    private PontuacaoManager() {
        pontuacaoAtual = 0;
        highScore = 0;
    }

    public static PontuacaoManager getInstance() {
        if (instance == null) {
            instance = new PontuacaoManager();
        }
        return instance;
    }

    public void adicionarPontos(int pontos) {
        pontuacaoAtual += pontos;
        if (pontuacaoAtual > highScore) {
            highScore = pontuacaoAtual;
        }
    }

    public void resetarPontuacao() {
        pontuacaoAtual = 0;
    }

    public int getPontuacaoAtual() {
        return pontuacaoAtual;
    }

    public int getHighScore() {
        return highScore;
    }
}
