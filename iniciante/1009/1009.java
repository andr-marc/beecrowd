import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {

        String nome;
        double salario, vendas, total;
        Scanner sc = new Scanner(System.in);
        nome = sc.nextLine();
        salario = sc.nextDouble();
        vendas = sc.nextDouble();
        total = salario + (vendas * 0.15);
        System.out.printf("TOTAL = R$ %.2f\n", total);
        sc.close();

    }

}