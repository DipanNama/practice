#include<iostream>
using namespace std;
int main(){
    char col1,col2,T;
    cin >> T;
    while(T--)
    {
        cin >> col1 >> col2;
        cout << "hello world" << endl;
        if ((col1 == 'G' || col2 == 'G' ) && (col1 == 'R' || col2 == 'R' ))
            cout << "R" << endl;
        else if (col1 == 'B' && col2 == 'B' )
            cout << "B" << endl;
        else if ((col1 == 'G' || col2 == 'G' ) && ((col1 == 'B' || col2 == 'B' )))
            cout << "B" << endl;
        else if (col1 == 'G' && col2 == 'G' )
            cout << "G" << endl;
    }
    return 0;
    
}