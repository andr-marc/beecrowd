import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  int numero = int.parse(stdin.readLineSync());
  int quant_hr = int.parse(stdin.readLineSync());
  double valor_hr = double.parse(stdin.readLineSync());

  double salario = quant_hr * valor_hr;

  print("NUMBER = $numero");
  print("SALARY = U\$ ${salario.toStringAsFixed(2)}");
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  int numero = int.parse(stdin.readLineSync()!);
  int quant_hr = int.parse(stdin.readLineSync()!);
  double valor_hr = double.parse(stdin.readLineSync()!);

  double salario = quant_hr * valor_hr;

  print("NUMBER = $numero");
  print("SALARY = U\$ ${salario.toStringAsFixed(2)}");
}
