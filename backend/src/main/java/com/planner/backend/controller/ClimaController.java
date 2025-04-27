package com.planner.backend.controller;

import com.planner.backend.adapter.ClimaProvider;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/clima")
public class ClimaController {

    private final ClimaProvider climaProvider;

    public ClimaController(ClimaProvider climaProvider) {
        this.climaProvider = climaProvider;
    }

    @GetMapping("/atual")
    public ResponseEntity<Map<String, String>> obterClimaAtual() {
        String condicao = climaProvider.obterCondicaoAtual("Sao Paulo"); 
        Map<String, String> resposta = new HashMap<>();
        resposta.put("condicao", condicao);
        return ResponseEntity.ok(resposta);
    }
}
