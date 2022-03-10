#include<iostream>
using namespace std;
int main(){
    int x,m,d,T;
    cin >> T;
    while(T--){
        cin >> x >> m >> d ;
        int takeTime = x * m;
        int haveTime = x + d;
        if (takeTime < haveTime)
            cout << takeTime << endl;
        else 
         cout << haveTime << endl;
    }
    
    return 0;
}