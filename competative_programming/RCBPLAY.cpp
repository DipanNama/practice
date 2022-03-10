#include<iostream>
using namespace std;
int main(){
    int T,X,Y,Z,playOffs;
    cin >> T;
    while (T--){
        cin >> X >> Y >> Z;
        int scoreNeed = Y - X;
        if (Z * 1 >= scoreNeed || Z * 2 >= scoreNeed)
            cout << "YES" << endl;
        else 
            cout << "NO" << endl;
    }
    return 0;
}