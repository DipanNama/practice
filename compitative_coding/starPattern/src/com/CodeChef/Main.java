// package com.CodeChef;

public class Main {

    public static void main(String[] args) {
        int n=5;
        int m=n;
        int p=m;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                if(i==j){
                    System.out.print("*");
                    for(int k=1;k<=2*m-3;k++){
                        System.out.print(" ");
                    }
                    m--;
                    if (!(j==n)){
                        System.out.print("*");
                    }
                }
                else{
                    System.out.print(" ");
                }
            }
            for(int a=1;a<=i;a++){
                if(i==a){
                    System.out.print("*");
                    for(int b=1;b<=2*p-3;b++){
                        System.out.print(" ");
                    }
                    p--;
                    if (!(a==n)){
                        System.out.print("*");
                    }
                }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}
