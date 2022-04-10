import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  List entrada = stdin.readLineSync().split(" ");
  double a = double.parse(entrada[0]);
  double b = double.parse(entrada[1]);
  double c = double.parse(entrada[2]);

  double triangulo = (a * c) / 2;
  double circulo = 3.14159 * c * c;
  double trapezio = 0.5 * (a + b) * c;
  double quadrado = b * b;
  double retangulo = a * b;

  print('TRIANGULO: ${triangulo.toStringAsFixed(3)}');
  print('CIRCULO: ${circulo.toStringAsFixed(3)}');
  print('TRAPEZIO: ${trapezio.toStringAsFixed(3)}');
  print('QUADRADO: ${quadrado.toStringAsFixed(3)}');
  print('RETANGULO: ${retangulo.toStringAsFixed(3)}');
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  List entrada = stdin.readLineSync()!.split(" ");
  double a = double.parse(entrada[0]);
  double b = double.parse(entrada[1]);
  double c = double.parse(entrada[2]);

  double triangulo = (a * c) / 2;
  double circulo = 3.14159 * c * c;
  double trapezio = 0.5 * (a + b) * c;
  double quadrado = b * b;
  double retangulo = a * b;

  print('TRIANGULO: ${triangulo.toStringAsFixed(3)}');
  print('CIRCULO: ${circulo.toStringAsFixed(3)}');
  print('TRAPEZIO: ${trapezio.toStringAsFixed(3)}');
  print('QUADRADO: ${quadrado.toStringAsFixed(3)}');
  print('RETANGULO: ${retangulo.toStringAsFixed(3)}');
}
