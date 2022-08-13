#include<bits/stdc++.h>
using namespace std;
int main(){
    unsigned long long int N;
    int T;
    cin >> T;
    while(T--)
    {
        cin >> N;
        if(N<6)
            cout<< 0 << endl;
        else if(N==6)
            cout<<  1 << endl;
        else{
            if(N%7 == 0)
                cout<<  (N/7) + 1 << endl;
            else
                cout<<  N/7 << endl;
        }
    }
    return 0;
}