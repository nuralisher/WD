if __name__ == '__main__':
    n = int(input())
    a = []
    for _ in range(n):
        c = input().strip()
        if c == 'print':
            print(a)
        else:
            c = c.split()
            if len(c) == 3:
                getattr(a, c[0])(int(c[1]), int(c[2]))
            elif len(c) == 2:
                getattr(a, c[0])(int(c[1]))
            else:
                getattr(a, c[0])()
        