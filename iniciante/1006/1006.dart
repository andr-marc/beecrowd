import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  double a = double.parse(stdin.readLineSync());
  double b = double.parse(stdin.readLineSync());
  double c = double.parse(stdin.readLineSync());

  double media = (a * 0.02 + b * 0.03 + c * 0.05) / 0.1;

  print("MEDIA = ${media.toStringAsFixed(1)}");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  double a = double.parse(stdin.readLineSync()!);
  double b = double.parse(stdin.readLineSync()!);
  double c = double.parse(stdin.readLineSync()!);

  double media = (a * 0.02 + b * 0.03 + c * 0.05) / 0.1;

  print("MEDIA = ${media.toStringAsFixed(1)}");
}
