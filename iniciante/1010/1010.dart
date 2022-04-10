import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  List produto1 = stdin.readLineSync().split(' ');
  List produto2 = stdin.readLineSync().split(' ');

  double total = double.parse(produto1[1]) * double.parse(produto1[2]) +
      double.parse(produto2[1]) * double.parse(produto2[2]);
  print("VALOR A PAGAR: R\$ ${total.toStringAsFixed(2)}");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  List produto1 = stdin.readLineSync()!.split(' ');
  List produto2 = stdin.readLineSync()!.split(' ');

  double total = double.parse(produto1[1]) * double.parse(produto1[2]) +
      double.parse(produto2[1]) * double.parse(produto2[2]);
  print("VALOR A PAGAR: R\$ ${total.toStringAsFixed(2)}");
}
