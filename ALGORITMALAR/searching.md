## LINEAR SEARCH

Tek tek elemanların arasında dolanıp istenen elemanın aranmasıdır.
\
\
Örnek: [10,20,30,40,50] Aranan: 30

Adım 1: Dizinin 1. elamanı 30'a eşit mi? Değil. 2. sıraya geç

Adım 2: Dizinin 2. elemanı 30'a eşit mi? Değil. 3. sıraya geç

Adım 3: Dizinin 3. elamanı 30'a eşit mi? Eşit. Algoritma sonlanır. O(n)

---

## BINARY SEARCH

Binary search dizinin sıralı olduğunu varsayar. Diziyi her seferinde ikiye bölerek ikili arama yapar. Dizideki minimum değer ve maksimum değer belirlenir. Aranan sayı dizinin ortanca sayısı ile kıyaslanır. Aranan sayı ortanca sayıdan büyük ise yeni bir minimum değer belirlenir. Aranan sayı ortanca sayıdan küçük ise yeni bir maksimum değer belirlenir ve aranann değer yeni ortanca sayıyla karşılaştırılır.
\
\
Örnek: [-5,-2,0,1,2,4,5,6,7,10] Aranan: 7

Adım 1: 10 sayısını max, -5 sayısını min ilan eder. Ortada kalan sayı 2'dir. 7 sayısı 2'den büyüktür. &#8594; [4,5,6,7,10]

Adım 2: 4 sayısını min, 10 sayısını max ilan eder. 7 sayısı 6'dan büyüktür. &#8594; [7,10]

Adım 3: 7 sayısı min ve ortanca, 10 sayısı max ilan eder. Aranan sayı bulunur O(log n)


---

## BINARY SEARCH TREE

Bir düğüm her iki tarafa da referans verebilir. Sağ tarafında kendinden büyük elemanlar, sol tarafında kendinden küçük elemanlar bulunur.
\
\
Örnek: 3 sayısını ağaç yapısına ekle.

                                    37
                                  /    \
                                15      48
                               / \        \
                              7   26       60
                             / \
                            2   8
                                 \
                                  9

Adım 1: 3 rootdan büyük mü? Hayır. Sol düğüme (15) ilerle.

Adım 2: 3 15'ten büyük mü? Hayır. Sol düğüme (7) ilerle.

Adım 3: 3 7'den büyük mü? Hayır. Sol düğüme (2) ilerle.

Adım 3: 3 2'den büyük mü? Evet. Sorgulanan düğümün sağ altına ekle.

                                    37
                                  /    \
                                15      48
                               /  \        \
                              7    26       60
                             /  \
                            2    8
                              \    \
                                3    9

