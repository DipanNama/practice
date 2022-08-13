#include <stdio.h>
int main(){
    printf("Enter one Number:");
    int n;
    int count=1;
    scanf("%d",&n);
    int m=n;
    for(int i=1;i<=n;i++){
        for(int sp=m-1;sp>=0;sp--){
            printf("   ");
        }
        for(int j=1;j<=2*i-1;j++){
            if(j<=i){
                printf(" %d ",count);
                count++;
            }
            // else if(j==i){
            //     printf(" %d ",count);
            //     count--;                
            // }
            else
            {
                count--;
                printf(" %d ",count);
            }
        }
        m--;
        printf("\n");
    }
}