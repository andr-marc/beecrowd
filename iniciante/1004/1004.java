import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int a, b;
        Scanner sc = new Scanner(System.in);
        a = sc.nextInt();
        b = sc.nextInt();
        int prod = a * b;
        System.out.printf("PROD = %d\n", prod);
        sc.close();
    }

}
