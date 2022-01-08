# Proje 2 (Merge Sort)

[16,21,11,8,12,22]

1- Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

Adım 1: Dizi tek eleman kalana kadar bölünür. &#8594; [16,21,11] [8,12,22]

Adım 2: [16] [21,11] [8] [12,22]

Adım 3: [16] [21] [11] [8] [12] [22]

Adım 4: Bölündükten sonra sol tarafta küçük sayı yazılacak şekilde birleştirilir. &#8594; [16] [11,21] [8] [12,22]

Adım 5: [11,16,21] [8,12,22]

Adım 6: [8,11,12,16,21,22]
\
\
2- Big-O gösterimini yazınız.

O(n log(n))