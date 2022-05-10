import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        double raio;
        double PI = 3.14159;
        Scanner sc = new Scanner(System.in);
        raio = sc.nextDouble();
        double area = PI * raio * raio;
        System.out.printf("A=%.4f\n", area);
        sc.close();
    }

}
