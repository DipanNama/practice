#include<iostream>
using namespace std;
int main(){
    int A,sunny=0,rainy=0,T;
    cin >> T;
    while(T--){
        for(int i=7;i>0;i--){
            cin >> A;
            if(A==1)
                sunny +=1;
            else if(A==0)
                rainy +=1;
        }
        cout << (sunny>rainy ? "YES" : "NO") <<endl;
        sunny = rainy = 0;
    }
    return 0;
}