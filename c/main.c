#include <stdio.h>
int main(){
    // ------------------playing with pointers --------------------

    // int a =5;
    // int * prt = &a;
    // printf("The value of a : %d\n",a);
    // printf("The Address of &a : %d\n",&a);
    // printf("The value of ptr : %d\n",prt);
    // printf("The address of &ptr : %d\n",&prt);
    // printf("The value of *ptr : %d\n",*prt);
    // printf("The value of &(*ptr) : %d\n",&(*prt));
    // // printf("The value of **ptr : %d\n",**prt);
    // printf("The value of *(&ptr) : %d\n",*(&prt));

    // ------------------- printiing patterns ---------------

    // Q1.
    // *
    // **
    // ***
    // ****
    // *****
    // int n=15;
    // for (int i=0;i<n; i++){
    //     for (int j=0;j<i;j++){
    //         printf("*");
    //     }
    //     printf("\n");
    // }
    


    // Q2.
    // *****
    // ****
    // ***
    // **
    // *
    // int n=15;
    // for (int i=n;i>0; i--){
    //     for (int j=0;j<i;j++){
    //         printf("*");
    //     }
    //     printf("\n");
    // }



    // Q3.
    // *****
    // *   *
    // *   *
    // *   *
    // *****
    // int n=15;
    // for (int i=1;i<=n; i++){
    //     for (int j=1;j<=n;j++){
    //         if(i==1 || i==n || j==1 || j==n)
    //         printf("*");
    //         else
    //         printf(" ");
    //     }
    //     printf("\n");
    // }




    // Q4.
    // *******
    // **   **
    // * * * *
    // *  *  *
    // * * * *
    // **   **
    // *******
    int n=15;
    for (int i=1;i<=n; i++){
        for (int j=1;j<=n;j++){
            if(i==1 || i==n || j==1 || j==n || i==j || j==n-i+1)
            printf("*");
            else
            printf(" ");
        }
        printf("\n");
    }




    // Q5.
    //     *****
    //    *****
    //   *****
    //  *****
    // *****
    // int n=5;
    // for (int i=n;i>0; i--){
    //     for (int j=0;j<i-1;j++){
    //         printf(" ");
    //     }
    //     for(int k=0;k<n;k++){
    //         printf("*");
    //     }
    //     printf("\n");
    // }




    // Q6.
    // *****
    //  *****
    //   *****
    //    *****
    //     *****
    // int n=5;
    // for (int i=1;i<=n; i++){
    //     for (int j=0;j<i-1;j++){
    //         printf(" ");
    //     }
    //     for(int k=0;k<n;k++){
    //         printf("*");
    //     }
    //     printf("\n");
    // }




    // Q7.
    //*****
    // *   *
    //  *   *
    //   *   *
    //    *****
    // int n=5;
    // for (int i=1;i<=n; i++){
    //     for(int k=0;k<i-1;k++){
    //         printf(" ");
    //     }
    //     for (int j=1;j<=n;j++){
    //         if(i==1 || i==n || j==1 || j==n)
    //         printf("*");
    //         else
    //         printf(" ");
    //     }
    //     printf("\n");
    // }



    // Q8.
    //     *****
    //    *   *
    //   *   *
    //  *   *
    // *****
    // int n=5;
    // for (int i=n;i>0; i--){
    //     for(int k=0;k<i-1;k++){
    //         printf(" ");
    //     }
    //     for (int j=1;j<=n;j++){
    //         if(i==1 || i==n || j==1 || j==n)
    //         printf("*");
    //         else
    //         printf(" ");
    //     }
    //     printf("\n");
    // }




    // Q9.
    // *
    // **
    // * *
    // *  *
    // *****
    // int n=5;
    // for (int i=1;i<=n; i++){
    //     for (int j=1;j<=i;j++){
    //         if(j==1 || i==n || i==j )
    //             printf("*");
    //         else
    //             printf(" ");
    //     }
    //     printf("\n");
    // }




    // Q10.
    // *****
    // *  *
    // * *
    // **
    // *
    // int n=5;
    // for (int i=n;i>0; i--){
    //     for (int j=1;j<=i;j++){
    //         if(j==1 || i==n || i==j )
    //             printf("*");
    //         else
    //             printf(" ");
    //     }
    //     printf("\n");
    // }



    // Q11.
    //     *
    //    **
    //   ***
    //  ****
    // *****
    // int n=5;
    // for (int i=n;i>0; i--){
    //     for (int j=0;j<i-1;j++){
    //         printf(" ");
    //     }
    //     for(int k=0;k<n-i+1;k++){
    //         printf("*");
    //     }
    //     printf("\n");
    // }





    // Q12. ERROR 
    //     *
    //    **
    //   * *
    //  *  *
    // *****
    // int n=5;
    // for (int i=n;i>=1; i--){
    //     for (int j=1;j<i-1;j++){
    //         printf(" ");
    //     }
    //     for(int k=0;k<n-i+1;k++){
    //         if(k==1 || i==n || i==k || k==n )
    //             printf("*");
    //         else
    //             printf(" ");
    //     }
    //     printf("\n");
    // }


    // Q13.
    // 1 2 3 4 5
    // 1 2 3 4 5
    // 1 2 3 4 5
    // 1 2 3 4 5
    // 1 2 3 4 5
    // int n=5;
    // for (int i=0;i<n;i++){
    //     for(int j=0;j<n;j++){
    //         printf("%d ",j+1 );
    //     }
    //     printf("\n");
    // }


    // Q14.
    // 5 4 3 2 1
    // 5 4 3 2 1
    // 5 4 3 2 1
    // 5 4 3 2 1
    // 5 4 3 2 1
    
    // int n=5;
    // for (int i=n;i<0;i++){
    //    for(int j=n;j<0;j++){
    //        printf("%d ",j);
    //    }
    //    printf("\n");
    //}



    return 0;
}
