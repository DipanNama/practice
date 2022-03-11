package com.CodeChef;

public class Main {

    public static void main(String[] args) {
	// write your code here
        for (int i = 0; i < 5; i++) {
            System.out.print(i);
            if (i < 3) {
                continue;
            } else {
                for (int j = 0; j < 5; j++) {
                    System.out.print(j);
                }
            }
        }
    }
}
