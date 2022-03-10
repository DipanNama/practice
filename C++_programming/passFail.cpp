#include<iostream>
using namespace std;
int main(){
    int N,X,P;
    int T;
    cin >> T;
    while(T--){
        cin >> N >> X >> P;
        int rem = N - X;
        int marks = (X*3 + (rem * (-1)));
        if (marks >= P ){
            cout << "PASS" << endl;
        }

        else{
            cout << "FAIL" << endl;
        }
    }
    return 0;
}