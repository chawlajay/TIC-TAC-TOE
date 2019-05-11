#include <stdio.h>
#include <stdlib.h>

void add(int count,int i,int j,char a[10],char b[10])
{
    a[count]=i;
    b[count]=j;
}

int check(int count,int i,int j,char a[10],char b[10])     //check function to check whether space is used or not
{
    int x;
    for(x=0;x<count;x++)
        {
             if(a[x]==i&&b[x]==j)
             {
               printf("Place is already used,so enter again\n");
               return 1;
             }
        }
    return 0;
}

int win(char t[3][3])      // win function have the conditions when a player can win
{
   if(t[0][0]==t[1][0] && t[0][0]==t[2][0] && t[0][0]!='-')
      return 1;
   else if(t[0][1]==t[1][1] && t[0][1]==t[2][1] && t[0][1]!='-')
      return 1;
   else if(t[0][2]==t[1][2] && t[0][2]==t[2][2] && t[0][2]!='-')
      return 1;
   else if(t[0][0]==t[0][1] && t[0][0]==t[0][2] && t[0][0]!='-')
      return 1;
   else if(t[1][0]==t[1][1] && t[1][0]==t[1][2] && t[1][0]!='-')
      return 1;
   else if(t[2][0]==t[2][1] && t[2][0]==t[2][2] && t[2][0]!='-')
      return 1;
   else if(t[0][0]==t[1][1] && t[0][0]==t[2][2] && t[0][0]!='-')
      return 1;
   else if(t[0][2]==t[1][1] && t[0][2]==t[2][0] && t[0][2]!='-')
      return 1;
   else
      return 0;
}




int main()
{
    int i,j,count=0,x;
    char p1,p2;
    char t[3][3],a[10],b[10];
    printf("start the game \n");
    printf("Player 1 choose $ or #\n");
    scanf("%c",&p1);

    if(p1=='$')
        p2='#';
    else
        p2='$';

    for(i=0;i<3;i++)
     {
        for(j=0;j<3;j++)
         {
            t[i][j]='-';
            printf("%c\t",t[i][j]);
         }
        printf("\n");
     }

again :

again1 :
        printf("Player 1 chance\n");
        printf("Enter row(1,2,3) , column(1,2,3) \n");
        scanf("%d%d",&i,&j);

       if(check(count,i,j,a,b))
          goto again1;
       else
        {
            add(count,i,j,a,b);
            t[i-1][j-1]=p1;
            count++;


        }

      for(i=0;i<3;i++)
       {
            for(j=0;j<3;j++)
           {
             printf("%c\t",t[i][j]);
           }
             printf("\n");
       }

       x=win(t);
       if(x==1)
        {
           printf("Player 1 Won the game\n");
           goto end;
        }
       else if(count==9)
        {
            printf("Game is over, Nobody wins the game\n");
            goto end;
        }



again2 :
    printf("Player 2 's chance\n");
    printf("Enter row(1,2,3) , column(1,2,3) \n");
    scanf("%d%d",&i,&j);

    if(check(count,i,j,a,b)==1)
          goto again2;
    else
      {
         add(count,i,j,a,b);
         t[i-1][j-1]=p2;
         count++;
      }

    for(i=0;i<3;i++)
       {
          for(j=0;j<3;j++)
           {
            printf("%c\t",t[i][j]);
           }
            printf("\n");
       }

       x=win(t);
       if(x==1)
        {
           printf("Player 2 Won the game\n");
           goto end;
        }

    goto again;

end :



   printf("Game is over and results are already declared.\n");
   for(i=0;i<3;i++)
       {
         for(j=0;j<3;j++)
        {
          printf("%c\t",t[i][j]);
        }
          printf("\n");
       }

    return 0;
}

