#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct 20 15:25:09 2018

@author: nishita
"""

m1=input("matrix 1 : ")
m2=input("matrix 2 : ")
l1=m1.split(";")
l2=m2.split(";")
col=m1.index(";")
row=m1.count(";")+1
m=[]
for i in range(row):
    ei=""
    for j in range(col):
        ei=ei+str(int(l1[i][j])+int(l2[i][j]))+" "
    m.append(ei)
print(m)