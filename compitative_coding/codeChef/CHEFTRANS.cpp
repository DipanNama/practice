#include<iostream>
using namespace std;
int main(){
    int X,Y,Z,T;
    cin >> T;
    while(T--)
    {
        cin >> X >> Y >> Z;
        int planeBus = X+Y;
        if(planeBus<Z)
            cout << "PLANEBUS" << endl;
        else if (planeBus==Z)
            cout << "EQUAL" << endl;
        else
            cout << "TRAIN" << endl;
    }
    return 0;
}