#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Oct  4 19:30:32 2018

@author: nishita
"""

m=int(input("enter an integer"))
n=int(input("enter another integer"))
list=[]
print("enter ", m*n, "more integers")
for k in range(0,m*n):
    list.append(input())
for j in range(0,n):
    for i in range(0+m*j,m+m*j):
        print(list[i]+"   ",end="")
        if i==m+m*j-1:
            print(" ")

