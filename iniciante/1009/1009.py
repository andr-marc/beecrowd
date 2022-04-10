# -*- coding: utf-8 -*-

nome = input()
sal_fixo = float(input())
vendas = float(input())

salario = sal_fixo + vendas * 0.15

print(f'TOTAL = R$ {salario:.2f}')
