package com.planner.backend.adapter;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class OpenMeteoAdapter implements ClimaProvider {

    @Override
    public String obterCondicaoAtual(String cidade) {
        String latitude = "-23.5505";
        String longitude = "-46.6333";

        String url = String.format("https://api.open-meteo.com/v1/forecast?latitude=%s&longitude=%s&current_weather=true", latitude, longitude);

        RestTemplate restTemplate = new RestTemplate();
        ClimaResponse resposta = restTemplate.getForObject(url, ClimaResponse.class);

        if (resposta == null || resposta.getCurrent_weather() == null) {
         return "clima desconhecido";
        }

        int weatherCode = resposta.getCurrent_weather().getWeathercode();

        // Tradução simples baseada no código
        switch (weatherCode) {
            case 0: return "ensolarado";
            case 3: return "nublado";
            case 61: return "chuva leve";
            case 95: return "tempestade";
            default: return "clima desconhecido";
        }
    }
}

