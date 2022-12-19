let phrase = prompt ('Quel est votre phrase ? ');

let changer
changer =prompt (' Quel mot changer ? ');

let nouveau_mot 
nouveau_mot = prompt ( 'Le nouveau mot ? ')

let phrase_modif
phrase_modif=phrase.replace ( changer , nouveau_mot )

alert(phrase_modif)