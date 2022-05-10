using System;

class beecrowd
{

    static void Main(string[] args)
    {
        const double PI = 3.14159;
        double raio = Double.Parse(System.Console.ReadLine().Trim());

        double area = PI * raio * raio;

        Console.Write("A={0:F4}\n", area);
    }

}