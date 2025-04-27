package com.planner.backend.adapter;

public class ClimaResponse {
   private CurrentWeather current_weather;

   public CurrentWeather getCurrent_weather() {
       return current_weather;
   }

   public void setCurrent_weather(CurrentWeather current_weather) {
       this.current_weather = current_weather;
   }

   public static class CurrentWeather {
       private int weathercode;

       public int getWeathercode() {
           return weathercode;
       }

       public void setWeathercode(int weathercode) {
           this.weathercode = weathercode;
       }
   }
}

