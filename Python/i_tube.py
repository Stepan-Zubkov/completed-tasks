# Beta
# https://www.codewars.com/kata/60ea5cf06df55a0006c938c0/
'''
There is an tube of length N filled with 0's with a hole at index H.

tube = [0,0,0,0,0]
pipe = [2,1,4,3,5,6,7]

The contents of pipe enter the tube through
the hole(*). Your task is to fill a tube from the given pipe.

— Alternately fill the sides of the tube with portions;
— The first part first goes to the left side(if possible);
— If the side of the tube is already full, all the
flow is redirected to the opposite side;
— The hole may be located "outside" the tube in
which case it should be returned as is.

For example:

#   tube          pipe            result
[0,0,0,'*',0] + [1,2,3,4,5,6] => [1,3,4,5,2]
['*',0,0,0,0] + [1,2,3]       => [3,2,1,0,0]
[0,0,0,0]     + [1,2,3,4]     => [0,0,0,0]
# H ≥ N in last examample
# so we cant find the hole
'''


def i_tube(pipe, n, h):
    if not pipe or h >= n:
        return [0 for i in range(n)]
    pipe = pipe[:n] if n < len(pipe) else pipe
    left, right = [], []
    l_max, r_max = h, n-h-1
    curr = 'left'
    for index, i in enumerate(pipe):
        if index == len(pipe)-1:
            hole = i
        elif curr == 'left' and len(left) < l_max:
            left.append(i)
        elif curr == 'right' and len(right) < r_max:
            right.append(i)
        else:
            left.append(i) if curr == 'right' else right.append(i)
        curr = 'left' if curr == 'right' else 'right'
    return [
        *[0 for i in range(l_max-len(left))],
        *left, hole, *right[::-1],
        *[0 for i in range(r_max-len(right))]
    ]
