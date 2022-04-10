import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  const pi = 3.14159;
  int raio = int.parse(stdin.readLineSync());

  double volume = (4.0 / 3.0) * pi * raio * raio * raio;

  print("VOLUME = ${volume.toStringAsFixed(3)}");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  const pi = 3.14159;
  int raio = int.parse(stdin.readLineSync()!);

  double volume = (4.0 / 3.0) * pi * raio * raio * raio;

  print("VOLUME = ${volume.toStringAsFixed(3)}");
}
