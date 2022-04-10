import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  String nome = stdin.readLineSync();
  double sal_fixo = double.parse(stdin.readLineSync());
  double vendas = double.parse(stdin.readLineSync());

  double salario = sal_fixo + vendas * 0.15;

  print("TOTAL = R\$ ${salario.toStringAsFixed(2)}");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  String nome = stdin.readLineSync()!;
  double sal_fixo = double.parse(stdin.readLineSync()!);
  double vendas = double.parse(stdin.readLineSync()!);

  double salario = sal_fixo + vendas * 0.15;

  print("TOTAL = R\$ ${salario.toStringAsFixed(2)}");
}
