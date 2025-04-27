package com.planner.backend;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Pontuacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int pontos;

    private LocalDateTime data = LocalDateTime.now();

    @ManyToOne
    private Jogador jogador;
}
