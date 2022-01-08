# Proje 1 (Insertion Sort)

[22,27,16,2,18,6]

1- Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Adım 1: En küçük sayı 2 &#8594; [2,27,16,22,18,6]

Adım 2: En küçük 2. sayı 6 &#8594; [2,6,16,22,18,27]

Adım 3: En küçük 3. sayı 16 &#8594; [2,6,16,22,18,27]

Adım 4: En küçük 4. sayı 18 &#8594; [2,6,16,18,22,27]
\
\
2- Big-O gösterimini yazınız.

O(n<sup>2</sup>)
\
\
3- Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.

Average case: O(n<sup>2</sup>/2)

Worst case: O(n<sup>2</sup>)

Best case: O(1)
\
\
4- Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

18 sayısı dizinin tam ortasıda olduğu için average case kapsamına girer.
\
\
[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

Adım 1: En küçük sayı 2 &#8594; [2,3,5,8,7,9,4,15,6]

Adım 2: En küçük 2. sayı 3 &#8594; [2,3,5,8,7,9,4,15,6]

Adım 3: En küçük 3. sayı 4 &#8594; [2,3,4,8,7,9,5,15,6]

Adım 4: En küçük 4. sayı 5 &#8594; [2,3,4,5,7,9,8,15,6]