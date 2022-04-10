# -*- coding: utf-8 -*-

produto1 = input().split(' ')
produto2 = input().split(' ')

total = float(produto1[1]) * float(produto1[2]) + \
    float(produto2[1]) * float(produto2[2])

print(f'VALOR A PAGAR: R$ {total:.2f}')
