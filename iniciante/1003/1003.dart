import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  int a = int.parse(stdin.readLineSync());
  int b = int.parse(stdin.readLineSync());

  int soma = a + b;

  print("SOMA = $soma");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  int a = int.parse(stdin.readLineSync()!);
  int b = int.parse(stdin.readLineSync()!);

  int soma = a + b;

  print("SOMA = $soma");
}
