package com.planner.backend.controller;

import com.planner.backend.Jogador;
import com.planner.backend.JogadorDTO;
import com.planner.backend.service.JogadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/jogadores")
public class JogadorController {

    @Autowired
    private JogadorService jogadorService;

    @PostMapping
    public Jogador criarJogador(@RequestBody JogadorDTO dto) {
    return jogadorService.criarJogador(dto.getNome());
    }

    @GetMapping
    public List<Jogador> listarTodos() {
    return jogadorService.listarTodos();
}
}
