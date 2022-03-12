#include<bits/stdc++.h>
using namespace std;
int main(){
    char str[100];
    cin.get(str, 100, '\n');
    for(int i=0;i<strlen(str);i++)
    {
        if(str[i] == 'a' || str[i] == 'A' || str[i] == 'o' || str[i] == 'O' || str[i] == 'y' || str[i] == 'Y' || str[i] == 'e' || str[i] == 'E' || str[i] == 'u' || str[i] == 'U' || str[i] == 'i' || str[i] == 'I')
        {
            str[i] = '';
            if(isupper(str[i]))
            {
                str[i] = str[i] + 32;

            }
        }
    }
    cout << str;
    return 0;
}