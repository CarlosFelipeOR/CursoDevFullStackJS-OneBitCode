let velocidade = 60;

do {
  alert(`A velocidade do veículo é ${velocidade}km/h`);
  velocidade -= 20;
} while (velocidade > 0);

alert(`Velociade final: ${velocidade}km/h`);
