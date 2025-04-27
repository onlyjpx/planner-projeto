package com.planner.backend.service;

import com.planner.backend.Jogador;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.planner.backend.repository.JogadorRepository;
import com.planner.backend.factory.JogadorFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Optional;

@Service
public class JogadorService {

   @Autowired
   private JogadorRepository jogadorRepository;

   public Jogador criarJogador(String nome) {
     Optional<Jogador> existente = jogadorRepository.findByNome(nome);
     if (existente.isPresent()) {
         throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nome já está em uso.");
     }

     Jogador novoJogador = JogadorFactory.criarJogador(nome);
     return jogadorRepository.save(novoJogador);
   }


   public List<Jogador> listarTodos() {
      return jogadorRepository.findAll();
   }
}

