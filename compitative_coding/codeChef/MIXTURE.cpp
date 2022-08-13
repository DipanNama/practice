#include<iostream>
using namespace std;
int main(){
    int A,B,T;
    cin >> T;
    while(T--)
    {
        cin >> A >> B;
        cout << ((A > 0 && B > 0) ? "Solution": (A == 0) ? "Liquid" : (B==0) ? "Solid" : "") << endl;
    }
    return 0;
}