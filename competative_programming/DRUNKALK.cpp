#include<iostream>
using namespace std;
int main(){
    int T,k,pos=0,count=0;
    cin >> T;
    while(T--){
        cin >> k;
        for(int i=1;i<=k;i++)
        {
            if(i%2 == 0)
                pos -=1;
            else
                pos +=3;
        }
        cout << pos << endl;
        pos = 0;
    }
    return 0;
}