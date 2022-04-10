# -*- coding: utf-8 -*-

entrada = input().split(' ')

a = float(entrada[0])
b = float(entrada[1])
c = float(entrada[2])

triangulo = (a * c) / 2
circulo = 3.14159 * c * c
trapezio = 0.5 * (a + b) * c
quadrado = b * b
retangulo = a * b

print(f"""TRIANGULO: {triangulo:.3f}
CIRCULO: {circulo:.3f}
TRAPEZIO: {trapezio:.3f}
QUADRADO: {quadrado:.3f}
RETANGULO: {retangulo:.3f}""")
