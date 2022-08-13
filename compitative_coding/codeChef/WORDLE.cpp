#include<bits/stdc++.h>
using namespace std;
int main(){
    char str[7], str2[7], str3[6];
    int T;
    cin >> T;
    while(T--)
    {
        cin >> str >> str2;
        for(int j=0;j<5;j++)
        {
            if(str[j] == str2[j])
            {
                str3[j] = 'G';
            }
            else{
                str3[j] = 'B';
            }
        }


        cout << str3 << endl;
    }
    return 0;
}