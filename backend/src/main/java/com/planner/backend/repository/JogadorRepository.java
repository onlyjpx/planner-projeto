package com.planner.backend.repository;

import com.planner.backend.Jogador;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {
   Optional<Jogador> findByNome(String nome);
   Optional<Jogador> findById(Number Id);
}
