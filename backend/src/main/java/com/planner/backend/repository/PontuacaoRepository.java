package com.planner.backend.repository;

import com.planner.backend.Pontuacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PontuacaoRepository extends JpaRepository<Pontuacao, Long> {
    @Query("SELECT p FROM Pontuacao p JOIN FETCH p.jogador ORDER BY p.pontos DESC")
    List<Pontuacao> findAllOrderByPontosDesc();
}