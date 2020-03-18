if __name__ == '__main__':
    cases=int(input())
    a=[]
    mini=10000000000000000000
    secondMini=10000000000000000
    for i in range(cases):
        name=input()
        score=float(input())
        if(score<mini):
            secondMini=mini
            mini=score
        if(score<secondMini and score>mini):
            secondMini=score
        a.append([name,score])
    a=sorted(a)
    for i in a:
        if(i[1]==secondMini):
            print(i[0])

        