/*
   - Problem?
   Union typelarda number veya string olmalıydı ancak
   İmkansız olsa da olabilecek bir diğer senaryo
   Değişkenin veya default parametre içinde geçilen type'ın
   Hem string hem de number olabilme olasılığı yönünde? :D
   Olur mu olur.
*/

// let weight: number & string; 

// Tertemiz örnek
type Draggable = {
   drag: () => void;
}
type Resizable = {
   resize: () => void;
}
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
   drag: () => {},
   resize: () => {}
}