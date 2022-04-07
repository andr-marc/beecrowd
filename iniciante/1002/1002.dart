import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  double raio = double.parse(stdin.readLineSync());
  double pi = 3.14159;

  double area = pi * raio * raio;

  print("A=${area.toStringAsFixed(4)}");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  double raio = double.parse(stdin.readLineSync()!);
  double pi = 3.14159;

  double area = pi * raio * raio;

  print("A=${area.toStringAsFixed(4)}");
}
