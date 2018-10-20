#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Oct 19 23:11:23 2018

@author: nishita
"""

#to calculate the trace of a square matrix
try:
    print("calculation of trace of a square matrix")
    n=int(input("enter the order of matrix : "))
    m=[]
    for i in range(n):
        ri=[]
        print("\nenter the elements of row " +str(i+1))
        for j in range(n):
            ri.append(input())
        m.append(ri)
    
    t=0
    for k in range(n):
        t=t+int(m[k][k])
        
    print("Trace of this matrix is = Sum of diagonal elements = "+ str(t))
except:
    print("can't calculate trace , invalid input!!!")
