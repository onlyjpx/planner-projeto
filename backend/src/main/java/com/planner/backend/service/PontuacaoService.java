package com.planner.backend.service;

import com.planner.backend.Jogador;
import com.planner.backend.Pontuacao;
import com.planner.backend.repository.JogadorRepository;
import com.planner.backend.repository.PontuacaoRepository;
import com.planner.backend.strategy.PontuacaoStrategy;
import com.planner.backend.strategy.MultiplicadorStrategy;
import com.planner.backend.decorator.BonusTempoSobrevivido;
import com.planner.backend.decorator.CalculadoraPontuacao;
import com.planner.backend.decorator.PontuacaoBase;
import com.planner.backend.utils.PontuacaoManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PontuacaoService {

    private final PontuacaoStrategy strategy = new MultiplicadorStrategy(); // injetável se quiser depois

    @Autowired
    private PontuacaoRepository pontuacaoRepository;

    @Autowired
    private JogadorRepository jogadorRepository;

    public Pontuacao salvarPontuacao(Long jogadorId, int basePontos, double velocidade, int tempoSobrevivido) {
        Jogador jogador = jogadorRepository.findById(jogadorId).orElseThrow(() -> new RuntimeException("\"Jogador com ID \" + jogadorId + \" não encontrado.\""));
        int pontosBase = strategy.calcularPontuacao(basePontos, velocidade);

        CalculadoraPontuacao calculadora = new PontuacaoBase(pontosBase);
        calculadora = new BonusTempoSobrevivido(calculadora, tempoSobrevivido);

        int pontosFinais = calculadora.calcular();

        PontuacaoManager.getInstance().adicionarPontos(pontosFinais);

        Pontuacao pontuacao = new Pontuacao();
        pontuacao.setPontos(pontosFinais);
        pontuacao.setJogador(jogador);
        return pontuacaoRepository.save(pontuacao);
    }

    public List<Pontuacao> buscarRankingGeral() {
        return pontuacaoRepository.findAllOrderByPontosDesc();
    }
}
