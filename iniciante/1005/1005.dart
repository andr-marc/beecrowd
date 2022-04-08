import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  double a = double.parse(stdin.readLineSync());
  double b = double.parse(stdin.readLineSync());

  double media = (a * 0.035 + b * 0.075) / 0.11;

  print("MEDIA = ${media.toStringAsFixed(5)}");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  double a = double.parse(stdin.readLineSync()!);
  double b = double.parse(stdin.readLineSync()!);

  double media = (a * 0.035 + b * 0.075) / 0.11;

  print("MEDIA = ${media.toStringAsFixed(5)}");
}
