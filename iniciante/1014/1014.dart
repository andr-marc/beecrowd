import 'dart:io';

// RESPOSTA DO BEECROWD (SEM NULL-SAFETY)
/*
void main() {
  int km = int.parse(stdin.readLineSync());
  double l = double.parse(stdin.readLineSync());

  double media = km / l;

  print('${media.toStringAsFixed(3)} km/l');
}
*/

// RESPOSTA COM NULL-SAFETY
void main() {
  int km = int.parse(stdin.readLineSync()!);
  double l = double.parse(stdin.readLineSync()!);

  double media = km / l;

  print('${media.toStringAsFixed(3)} km/l');
}
