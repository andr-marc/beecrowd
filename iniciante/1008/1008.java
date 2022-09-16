import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {

        int numero, qtHora;
        double valorHora, total;
        Scanner sc = new Scanner(System.in);
        numero = sc.nextInt();
        qtHora = sc.nextInt();
        valorHora = sc.nextDouble();
        total = qtHora * valorHora;
        System.out.printf("NUMBER = %d\nSALARY = U$ %.2f\n", numero, total);
        sc.close();

    }

}