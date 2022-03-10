#include<iostream>
using namespace std;
int main(){
    int A,B,C,T;
    cin >> T;
    while (T--)
    {
        cin >> A >> B >> C;
        if(C < B && C < A)
            cout << "Alice" << endl;
        else if (B < C && B < A)
            cout << "Bob" << endl;
        else 
            cout << "Draw" << endl;
    }
    return 0;
    
}