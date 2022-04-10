import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  List entrada = stdin.readLineSync().split(" ");
  int a = int.parse(entrada[0]);
  int b = int.parse(entrada[1]);
  int c = int.parse(entrada[2]);

  double aux = (a + b + (a - b).abs()) / 2;
  double maior = (aux + c + (aux - c).abs()) / 2;

  print('${maior.toInt()} eh o maior');
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  List entrada = stdin.readLineSync()!.split(" ");
  int a = int.parse(entrada[0]);
  int b = int.parse(entrada[1]);
  int c = int.parse(entrada[2]);

  double aux = (a + b + (a - b).abs()) / 2;
  double maior = (aux + c + (aux - c).abs()) / 2;

  print('${maior.toInt()} eh o maior');
}
