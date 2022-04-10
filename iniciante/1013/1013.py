# -*- coding: utf-8 -*-

entrada = input().split(' ')

a = int(entrada[0])
b = int(entrada[1])
c = int(entrada[2])

aux = (a + b + abs(a - b)) / 2
maior = (aux + c + abs(aux - c)) / 2

print(f'{maior:.0f} eh o maior')
