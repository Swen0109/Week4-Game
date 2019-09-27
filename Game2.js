alert ('Je komt thuis na een lange reis door Europa, en bent blij weer thuis te zijn');
alert ('Je word thuis afgezet en loopt naar de deur, je ziet alle lampen aan staan en je beld aan bij de deur. ');
alert ('Er word niet op gedaan en je begint bang te worden.');
alert ('Je roept naar binnen en je hoort helemaal niks ');
alert ('Toen je door het raam keek zag je iemand lopen in een pak en je herkende hem niet. Je weet er is wat gebeurd!');
alert ('Je kan kiezen tussen: je loopt naar de achterdeur en gaat daar naar binnen/ Je klimt via de zijkant van het huis naar boven en klimt via het raam naar binnen');
var vraag1 = prompt ('Wat kies je? 1= achterdeur, of 2= het raam?');

if (vraag1 == '1'){
alert ('Je loopt naar binnen en word vermoord door de man in het pak.')
document.write ('Helaas, je bent game-over.')
}

else if (vraag1 == '2'){
alert ('Je bent veilig binnen gekomen en staat in je slaapkamer.')
alert ('Je komt aan in je slaapkamer en ziet je kamer helemaal overhoop. Je begint te denken dat het een inbreker is.')
alert ('Maar waar zijn je ouders?')
alert ('Je besluit om iets te zoeken waar je jezelf mee kan verdedigen.')
alert ('Je vind een knuppel en een paintballgeweer.')
document.write ('Je bent via het raam naar binnengeklommen en bent veilig in je kamer.<br><br>')
var vraag2 = prompt ('Wat kies je? 1= knuppel of 2= paintballgeweer?')
}

if (vraag2 == '1'){
	alert ('Je pakt de knuppel op en bedenkt een plan.')
   alert ('Je loopt je kamer uit naar je ouders hun kamer.')
   alert ('Je opent de deur en ziet heel de kamer overhoop, je besluit de kamer door te zoeken voor sporen.')
   alert ('Je vind een brief en daar staat op dat je ouders ook op vakantie zijn, maar je denkt niet dat ze op vakantie zijn.')
   alert ('Je hoort een raar geluid van de kelder komen en beseft je dat je ouders zijn opgesloten.')
   alert ('Je weet dat de inbreker ook nog binnen loopt en bedenkt wat je gaat doen.')
   alert ('Wat kies je? Je doorzoekt nog de rest van de verdieping/Je gaat meteen naar beneden.')
   document.write ('Je hebt gekozen voor de knuppel. <br><br>')
   var vraag3 = prompt ('Wat kies je? 1= doorzoeken of 2= naar beneden.')
}

else if (vraag2 == '2.'){
	alert ('je pakt het paintballgeweer en bedenkt een plan.')
   alert ('Je pakt de knuppel op en bedenkt een plan.')
   alert ('Je loopt je kamer uit naar je ouders hun kamer.')
   alert ('Je opent de deur en ziet heel de kamer overhoop, je besluit de kamer door te zoeken voor sporen.')
   alert ('Je vind een brief en daar staat op dat je ouders ook op vakantie zijn, maar je denkt niet dat ze op vakantie zijn.')
   alert ('Je hoort een raar geluid van de kelder komen en beseft je dat je ouders zijn opgesloten.')
   alert ('Je weet dat de inbreker ook nog binnen loopt en bedenkt wat je gaat doen.')
   alert ('Wat kies je? Je doorzoekt nog de rest van de verdieping/Je gaat meteen naar beneden.')
   document.write ('Je hebt voor het paintballgeweer gekozen.<br><br>')
   var vraag3 = prompt ('Wat kies je? 1= doorzoeken of 2= naar beneden.')
}

if (vraag3 == '2'){
   alert ('je rent naar beneden, waar je word vermoord door de inbreker.')
   document.write ('Helaas, je bent game-over.')
}

else if (vraag3 == '1'){
alert ('Je gaat de rest van de verdieping doorzoeken.')
alert ('Je besluit om naar de badkamer te lopen.')
alert ('Je opent de deur en ziet allemaal bloed op de grond liggen.')
alert ('Je schrikt je dood, maar je moet doorzoeken.')
alert ('Je vind je vader zijn telefoon, die nog aan staat.')
alert ('Je ziet dat hij een berichtje naar je wou sturen met HELP, dit was 2 dagen geleden.')
alert ('Je beseft je dat je ouders al 2 dagen zijn opgesloten en je ze snel moet helpen.')
alert ('Wat doe je? Je kijkt stiekem naar beneden/ of je rent snel naar beneden om je ouders te helpen')
document.write ('Je bent de rest van de verdieping gaan doorzoeken. <br><br>')
var vraag4 = prompt ('Wat kies je? 1= rennen of 2= stiekem kijken?')
}


if (vraag4 == '1'){
	alert ('De moordenaar wacht je op en vermoord je.')
   document.write ('Helaas, je bent game-over.')
}
if (vraag4 == '2'){
	alert ('Je ziet de inbreker lopen met een wapen en beseft je dat hij een moordernaar is.')
alert ('Je bedenkt je wat veiliger te doen, omdat het heel gevaarlijk is.')
alert ('Je ziet de moordernaar naar de kelder lopen en je weet niet wat je moet doen.')
alert ('Of je gaat achter de moordenaar aan naar de kelder, of je gaat snel de keuken in.')
document.write ('Je bent er achter gekomen dat de inbreker gevaarlijk is. <br><br>')
var vraag5 = prompt ('Wat kies je? 1= kelder of 2= keuken')
}

if (vraag5 == '1'){
	alert ('De moordenaar draait zich om en heeft je door. Je bent game-over!')
   document.write ('Helaas, je bent game-over.')
}

else if (vraag5 =='2'){
	alert ('De moordenaar is de kelder in en jij bent veilig in de keuken.')
   alert ('Je bent in de keuken en je hoort gepraat van de kelder komen.')
   alert ('Je hoort de moordenaar naar boven komen en je moet snel weg.')
   alert ('Je kan kiezen tussen 2 dingen.')
   alert ('Of je gaat de woonkamer in, of je gaat naar de garage.')
   document.write ('Je bent veilig in de keuken.<br><br>')
   var vraag6 = prompt ('Wat kies je? 1= woonkamer, of 2= garage?')
   }
    if (vraag6 == '1'){
   alert ('De moordernaar is naar de garage gegaan en je bent veilig in de woonkamer.')
alert ('De moordenaar is in de garage en je moet kiezen.')
alert ('Of je rent snel de kelder in, of je blijft in de woonkamer.')
alert ('Wat kies je?')
document.write ('Je bent veilig in de woonkamer. <br><br>')
var vraag7 = prompt ('Wat kies je? 1= de kelder of 2= de woonkamer?')
}


else if (vraag6 == '2'){
alert ('Je rent naar de garage je verstopt je en je hoort de moordenaar aan komen lopen.')
alert ('Hij opent de garage deur en doorzoekt de garage waardoor hij je vind. Je bent game-over')
document.write ('Helaas, je bent game-over.')
}


if (vraag7 == '1'){
	alert ('Je bent net op tijd de kelder in en de moordenaar is de woonkamer in gegaan!')
alert('Je bent in de kelder en er zijn 2 kamers.')
alert ('Welke kamer kies je de linker of de rechter?')
document.write ('Je bent in de kelder gegaan en bent er veilig. <br><br>')
var vraag8 = prompt ('Welke kamer kies je 1 of 2?')
}

else if (vraag7 == '2'){
	alert ('De moordenaar besluit ook de woonkamer te checken en vind jouw. Je bent game-over!')
   document.write ('Helaas, je bent game-over.')
}

   if (vraag8 == '2'){
   	alert ('Je opent de deur en ziet je ouders vastgebonden zitten.')
   	alert ('Je moet niet te hard zijn en besluit ze los te maken.')
   	alert ('De moordenaar komt weer naar de kelder en je moet kiezen.')
   	alert ('Of je pakt je knuppel en slaat hem als hij binnenkomt, of je verstopt je in de kamer.')
      document.write ('Je hebt voor kamer 2 gekozen. <br><br>')
      var vraag9 = prompt ('Wat kies je? 1= knuppel of 2= verstoppen?')
   }

   	else if (vraag8 == '1'){
      alert ('De moordenaar heeft een val in kamer 1 gezet en je bent game-over')
      document.write ('Helaas, je bent game-over.')
   }


         if (vraag9 == '1'){
   		alert('De moordenaar komt binnen en je slaat hem knock-out')
   		alert ('Je bent eindelijk even veilig en je ouders ook.')
   		alert ('Je moet nu kiezen of je beld de politie of je bind hem vast en beld daarna snel de politie.')
         document.write ('Je hebt de inbreker knock-out geslagen. <br><br>')
         var vraag10 = prompt ('Wat kies je? 1= nu bellen of 2= vastbinden en dan bellen?')
   }
    
    else if (vraag9 == '1'){
      alert ('De inbreker komt de kamer in en vind je. Je bent game-over.')
    document.write ('Helaas, je bent game-over.')
}
   
   if (vraag10 == '2'){
   	alert ('Gefeliciteerd! De moordenaar is vastgebonden en word zo opgehaald door de politie! Je hebt het spel uitgespeeld!')
      document.write ('Gefeliciteerd, je hebt het spel uitgespeeld.')
   }

    else if (vraag10 == '1'){
   	alert ('De moordenaar word wakker voor de politie er is. Game-over.')
      document.write ('Helaas, je bent game-over.')
   	
}
