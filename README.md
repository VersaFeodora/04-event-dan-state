## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720156|
| Nama |  Versacitta Feodora Ramadhani |
| Kelas | TI - 3I |

### Practicum 1
![Screenshot](README-pic/1a.png)
In this button, three events are assigned with the following;
- When the mouse hovers over the button, a message will appear
![Screenshot](README-pic/1b.png)
- When the mouse clicks the button, a message will appear
![Screenshot](README-pic/1c.png)
- When the mouse hovers out of the button, a message will appear
![Screenshot](README-pic/1d.png)
<br/>

### Practicum 2
![Screenshot](README-pic/2a.png)
![Screenshot](README-pic/2b.png)
A new button will appear along with the text assigned within namaTombol parameter. When the said button is clicked, a message based on text that has been assigned in isiPesan parameter will appear.
<br/>
As seen in the code, when calling the component `<Tombol2 />`, two parameter are also assigned under the name `isiPesan` and `namaTombol`. Those parameters later are carried over into Tombol2 function as the value within specified variable. In this case, `namaTombol` will become the text inside the button, and `isiPesan` becomes alert message when it is clicked.
<br/>

### Practicum 3
![Screenshot](README-pic/3a.png)
New two green buttons will appear will appear
![Screenshot](README-pic/3b.png)
When the first button is clicked, a message will appear corresponding to its parameter
![Screenshot](README-pic/3c.png)
When the second button is clicked, a message will appear corresponding to its parameter

### Practicum 4
![Screenshot](README-pic/4a.png)
When the button is clicked, a new set of sculpture data (name, image, desc, etc.) will be changed, as well as the number of `... of 5`. It is because the button will increase the current index by 1, thus will call the next set within sculptureList.
<br/>
1. If the button is clicked when the current page is 5 of 5, it will cause an error that declares that the sculpture data isn't exist. This is due to the button iterates the index that exceed the length of the list, which is 5.
![Screenshot](README-pic/4b.png)
<br/>
2. The solution of this is to have the list go back into the first index within the list, which is 0, when it reaches the last index. This can be achieved by using if statement.
![Screenshot](README-pic/4c.png)
3. The back button is initialized in `gallery.tsx`, where its function will have the index go back by 1. In addition, when it reaches 0, the button will set the index into the last one instead, which is 4.
![Screenshot](README-pic/4d.png)
![Screenshot](README-pic/4e.png)