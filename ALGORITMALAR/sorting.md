## INSERTION SORT
Verilen örüntüdeki en küçük sayıyı bulup örüntünün ilk sırasındaki sayı ile yer değiştirir. Daha sonra ikinci en küçük elemanı bulup örüntünün baştan 2. Elemanı ile yer değiştirir. Eğer 2. En küçük eleman zaten 2. Sırada ise elemanın yerinde değişiklik yapılmaz ve en küçük 3.eleman aranır. Örüntü küçükten büyüğe sıralanmış hale gelene kadar işlem devam eder.
\
\
Örnek: [65,27,13,23,10]

Adım 1: En küçük sayı 10. 10 ile 65 sayısının yerlerini değiştir. &#8594; [10,27,13,23,65]

Adım 2: Dizideki en küçük ikinci sayı 13. 13 ile 27 sayısının yerini değiştir. &#8594; [10,13,27,23,65]

Adım 3: Dizideki en küçük üçüncü sayı 23 &#8594; [10,13,23,27,65] O(n<sup>2</sup>)

---

## MERGE SORT
Sayı dizisini parçalara ayırarak daha küçük parçalar içerisinde sıralayıp birleştirir.
\
\
Örnek: [38,27,43,3,9,82,10]

Adım 1: Liste tek eleman kalıncaya kadar bölünür &#8594; [38,27,43,3] ve [9,82,10] 

Adım 2: [38,27] [43,3] [9,82] [10] 

Adım 3:  [38] [27] [43] [3] [9] [82] [10]

Adım 4: Bölündükten sonra sol tarafta küçük sayı yazılacak şekilde birleştirilir. &#8594; [27,38] [3,43] [9,82] [10]

Adım 5: [3,27,38,43] [9,10,82] 

Adım 6: [3,9,10,27,38,43,82] O(n log(n))

---

## QUICK SORT
Merge sortda olduğu gibi sayı dizi parçalanarak ilerlenir fakat bu çözümde bir pivot değer vardır.  Pivot değerden küçük ve eşitler sol kısma, pivottan büyük ve eşitler sağ kısma yazılır. 
\
\
Örnek: [7,-2,4,1,6,5,0,-4,2]

Adım 1: Pivot ***2*** &#8594; [-2,1,0,4] ***[2]*** [7,4,6,5]

Adım 2: Pivot sol ***-4***, Pivot sağ ***5*** &#8594; ***[-4]*** [-2,1,0] ***[2]*** [4] ***[5]*** [7,6]

Adım 3: Pivot sol ***0***, Pivot sağ ***6*** &#8594; ***[-4]*** [-2] ***[0]*** [1]  ***[2]***  [4] ***[5]*** ***[6]*** [7]

Adım 4: [-4,-2,0,1,2,4,5,6,7] Average Case &#8594; O(n log(n))  Worst case &#8594; O(n<sup>2</sup>)

