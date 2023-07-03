public class pattern {
     public static void main(String [] args)
     {
         for (int i = 1; i <=7; i++){
             for (int j=1;j<=j;j++)
             {
                 if(j==1||j==7||i==j&&i>=4||i==6&&j==2||i==5&&j==3)
                 {
                    System.out.print("*");
                 }
                 else{
                     System.out.print(" ");
                 }
             }
             System.out.println(" ");
         }
     }
}