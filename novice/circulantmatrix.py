#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct 20 13:13:42 2018

@author: nishita
"""

l=input("matrix: ")
m=l.index(";")
sc=l.count(";")
n=sc+1
l1=l.split(";")
print("matrix: " +str(l1))
print("no. of columns= ",m)
t=[]
for i in range(0,sc):
    for j in range(0,m-1):
        if l1[i][j+1]==l1[i+1][j]:
            t.append("yes")
        else:
            t.append("no")
            break
if t.count("no")==0:
    print("yes")        
else:
    print("no")