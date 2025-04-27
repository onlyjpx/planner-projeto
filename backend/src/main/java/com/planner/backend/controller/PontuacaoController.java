package com.planner.backend.controller;

import com.planner.backend.Pontuacao;
import com.planner.backend.PontuacaoDTO;
import com.planner.backend.service.PontuacaoService;
import com.planner.backend.utils.PontuacaoManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/pontuacoes")
public class PontuacaoController {

    @Autowired
    private PontuacaoService pontuacaoService;

    @PostMapping
    public Pontuacao registrarPontuacao(@RequestBody PontuacaoDTO dto) {
        return pontuacaoService.salvarPontuacao(
            dto.getJogadorId(),
            dto.getBasePontos(),
            dto.getVelocidade(),
            dto.getTempoSobrevivido()
        );
    }

    @GetMapping("/highscore")
    public ResponseEntity<Integer> getHighScoreGlobal() {
    int highScore = PontuacaoManager.getInstance().getHighScore();
    return ResponseEntity.ok(highScore);
    }

    @GetMapping("/ranking")
    public ResponseEntity<List<Pontuacao>> rankingGeral() {
    List<Pontuacao> ranking = pontuacaoService.buscarRankingGeral();
    return ResponseEntity.ok(ranking);
    }
}

