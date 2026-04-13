export interface CompanyDescription {
  title: string;
  logo?: string;
  html: string;
  website?: { url: string; label: string };
}

export const companyDescriptions: Record<string, CompanyDescription> = {
  napoli: {
    title: "Marionettistica Fratelli Napoli di Napoli Fiorenzo (Catania)",
    logo: "napoli-logo.jpg",
    website: {
      url: "http://www.fratellinapoli.it",
      label: "www.fratellinapoli.it",
    },
    html: `<p>La Marionettistica Fratelli Napoli viene fondata da Don Gaetano Napoli nel 1921, con l'apertura del Teatro Etna a Catania, nel quartiere di Cibali. Da allora e fino al 1973 la famiglia Napoli svolge un'intensa attività nei teatri popolari di quartiere, lavorando col mestiere storico, i pupi alti m.1,30 e pesanti fino a 30 - 35 chili. Vengono messe in scena a puntate cicliche serali tutte le storie del repertorio catanese. Nel corso di questi anni, il mestiere viene continuamente arricchito di pupi, scene e cartelli. Regole e tecniche di messinscena vengono acquisite e affinate, nelle rispettive specializzazioni, dai figli di don Gaetano: Pippo, Rosario e Natale, cui viene successivamente affidata anche la gestione dell'impresa. Questo patrimonio di competenze viene successivamente trasmesso a Fiorenzo, Giuseppe, Salvatore e Gaetano, figli di Natale e Italia Chiesa Napoli. Nel 1931 la Marionettistica dei Fratelli Napoli riceve, ex aequo col puparo Nino Insanguine, il più alto riconoscimento nella Prima Disfida regionale dei Pupi siciliani. Nel 1958, partecipando all' Expo Universale di Bruxelles, i Napoli ottengono il loro primo successo in ambito internazionale.</p>
<p>Gli anni Sessanta e Settanta del Novecento tuttavia innescano una grave crisi e i Napoli lavorano, sotto la guida di Natale e Italia, per adattare l'Opira catanese alle esigenze di un pubblico nuovo, pur mantenendosi fedeli ai codici e alle regole di messinscena della tradizione.</p>
<p>Natale Napoli, facendo tesoro dei suggerimenti di Nino Amico, escogita nel 1973 l'idea dei "pupi piccoli" di cm. 80, che, mantenendo intatti codici, regole e tecniche della messinscena tradizionale, assicurarono la possibilità di affezionare all'Opira catanese un nuovo pubblico, composto da giovani in età scolare e studenti universitari, professionisti, borghesi e uomini di cultura. Nel 1978 i fratelli Napoli ricevono dai Reali d'Olanda il prestigioso Praemium Erasmianum, che "corona persone e istituzioni che per la loro attività hanno arricchito la cultura europea". In questi anni, alla morte del padre Natale, Fiorenzo diventa direttore artistico della compagnia e i suoi figli Davide, Dario e Marco apprendono anch'essi le regole di mestiere, assicurando la continuità alla tradizione catanese dell'Opera dei Pupi. Oggi i Napoli, oltre a proporre spettacoli con recita a soggetto, rappresentano testi basati sulla tradizione degli antichi canovacci nei quali una moderna drammaturgia dell'Opera dei Pupi riesce a tener conto delle regole tradizionali di messinscena.</p>
<p>Tutti i membri della famiglia Napoli prendono parte agli spettacoli: Fiorenzo, direttore artistico della compagnia, coautore dei copioni, parraturi principale e maestro costruttore dei pupi; Giuseppe, capo manianti e scenografo; Gaetano parraturi; Davide, secondo parraturi, manianti e costruttore; Dario, direttore di scena e manianti; Marco manianti; Alessandro, antropologo (allievo di Antonio Pasqualino), autore dei copioni, manianti e addetto ai preparativi e al fabbisogno degli spettacoli; Agnese Torrisi, moglie di Fiorenzo, costumista e parratrici, avendo ereditato l'importante ruolo che fu di Italia Chiesa Napoli, da poco venuta a mancare nel 2018. Collabora assiduamente con la compagnia Giacomo Anastasi, che ha preso all'illuminotecnica e alla fonica il posto di Salvatore Napoli, recentemente scomparso nel 2019.</p>
<p>Oltre alla messa in scena degli spettacoli, la compagnia è impegnata nella realizzazione di pupi, scene e cartelli all'interno dell'antica casa-bottega di famiglia, che si trova nel centro storico di Catania, vicino al Castello Ursino e al mercato della Pescheria. Questo luogo rappresenta un patrimonio di grande importanza storico – culturale per il territorio, poiché, dai tempi di Gaetano Napoli a oggi, qui vengono tramandati di generazione in generazione i "saperi della mano" e le regole di mestiere che consentono la realizzazione di tutti gli oggetti di artigianato artistico legati alla tradizione dell'Opera dei Pupi catanese. Pippo Napoli aveva appreso fondamenti e tecniche di questa particolare forma di artigianato dagli antichi maestri ramaioli che nei primi decenni del Novecento sbalzavano le armature dei pupi da teatro e le ha tramandate al nipote Fiorenzo Napoli che le ha ulteriormente abbinandole a raffinate lavorazioni di oreficeria. Rosario Napoli prima e suo fratello Natale poi furono due dei più importanti pittori dell'Opera dei Pupi catanese. Giuseppe Napoli ha imparato dal padre Natale le tecniche della scenografia e della cartellonistica e ancora oggi, in bottega, dipinge scene e cartelli seguendo i dettami della tradizione. Davide Napoli, facendo propri gli insegnamenti del padre, ha applicato le antiche tecniche di sbalzo dei maestri ramaioli alla realizzazione di raffinati monili in oro, argento, alpacca, rame, ottone, acciaio. Anelli, bracciali, collane e orecchini vengono così lavorati interamente a mano con gli stessi procedimenti delle armature dei pupi.</p>
<p>All'interno della casa - bottega di via Reitano inoltre vengono frequentemente svolti incontri seminariali, laboratoriali e visite guidate sull'Opira catanese condotti da Fiorenzo Napoli, con la collaborazione della moglie Agnese e di tutti i componenti della compagnia.</p>
<h3><em>Il patrimonio</em></h3>
<p>La famiglia Napoli custodisce oggi l'unico antico mestiere di stile catanese rimasto integro e completo, col quale la Marionettistica ha lavorato dal 1921 a oggi. Parte di questo antico mestiere è oggi custodito al Museo internazionale delle marionette Antonio Pasqualino di Palermo a causa dell'impossibilità di trovare adeguata collocazione nella città di Catania. Il patrimonio, non ancora catalogato, raccoglie complessivamente circa 900 opere tra pupi, cartelli, scene, copioni e circa 400 attrezzi da lavoro.</p>`,
  },

  sicilia: {
    title:
      "Associazione Culturale Marionettistica Popolare Siciliana di A. Sicilia (Palermo)",
    logo: "sicilia-logo.jpg",
    website: {
      url: "http://www.facebook.com/angelo.sicilia.3",
      label: "www.facebook.com/angelo.sicilia.3",
    },
    html: `<p>Diretta da Angelo Sicilia, la compagnia nasce a Palermo nel 2001. Partendo dall'opera dei pupi tradizionale propone spettacoli che affiancano a storie del repertorio tradizionale vicende di cronaca, riattualizzando questa forma del teatro popolare, da sempre capace di intercettare le istanze dell'oggi. È così che accanto agli spettacoli tradizionali tratti dalla Storia dei paladini di Francia, dal repertorio religioso e dai drammi shakespeariani, la Compagnia propone una opera dei pupi "antimafia", mettendo la forza espressiva e comunicativa dei pupi tradizionali al servizio di spettacoli di impegno civile. La compagnia possiede un patrimonio di circa 500 opere, tra pupi, scene e cartelli, collezionati nel tempo da Angelo Sicilia.</p>`,
  },

  canino: {
    title:
      'Associazione Culturale Opera dei pupi Siciliani "G. Canino" (Alcamo, TP)',
    logo: "canino-logo.jpg",
    website: {
      url: "http://www.facebook.com/salvatore.oliveri.56",
      label: "www.facebook.com/salvatore.oliveri.56",
    },
    html: `<p>La compagnia di Alcamo nasce nel 1997. Il fondatore è Salvatore Oliveri, nipote materno di Gaspare Canino, ultimo puparo ed oprante attivo ad Alcamo ed in tutta la provincia di Trapani. Capostipite della famiglia fu Liberto Canino considerato tra gli iniziatori dell'opera dei pupi a Palermo. Nel lontano 1828 Liberto Canino aprì il primo teatro in via Formai nell'antico quartiere dell'Albergheria a Palermo. Uno dei suoi figli, Luigi, imparata l'arte del padre alla fine dell'ottocento, si trasferì ad Alcamo dove portava in scena tutte quelle storie che appassionavano i nostri avi: dalle vicende di Paladini di Francia, a Guido Santo, da Trabazio di Costantinopoli ai Beati Paoli. Dei cinque figli di Luigi soltanto due faranno i pupari: Guglielmo che, imparata l'arte si trasferisce a Sciacca, e Gaspare che resta ad Alcamo dove aiuta il vecchio padre. Dopo la sua scomparsa, nel 1977, l'opera dei pupi smette di essere rappresentata ad Alcamo ed in tutta la provincia di Trapani, finché nel 1990 il nipote Salvatore Oliveri torna a dedicarsi a questa arte, aprendo un teatro.</p>
<p>Custodisce circa 400 opere tra pupi, cartelli, scene e attrezzatura.</p>`,
  },

  bumbello: {
    title:
      "Associazione opera dei pupi Brigliadoro di Salvatore Bumbello (Palermo)",
    logo: "bumbello-logo.jpg",
    website: {
      url: "http://www.facebook.com/salvatore.bumbello",
      label: "www.facebook.com/salvatore.bumbello",
    },
    html: `<p>La compagnia Brigliadoro è stata fondata nel 2015 da Salvatore Bumbello, costruttore di pupi e oprante palermitano. Salvatore apprende l'arte dal padre Luciano (1948) che, rimasto orfano in tenera età, diventa presto allievo di Francesco Sclafani, da cui impara a costruire i pupi e a manovrarli. Quando nel 1990 Francesco Sclafani si ritira, Luciano prosegue la sua attività di costruttore. Nel frattempo, Salvatore, figlio di Luciano, inizia ad apprendere il mestiere e a 10 anni realizza, modellandolo e sbalzando l'aramtura, il suo primo pupo alto 35 centimetri. Nel 1995, alla morte del padre, eredita il mestiere con attrezzi e modelli, e la bottega, ancora in attività a Palermo in via Barbaraci. Nel corso degli anni affianca all'attività di artigiano quella di oprante, formandosi al fianco noti opranti di Palermo, tra cui Nino Cuticchio. Dopo la chiusura, nel 2010, del suo teatro Ippogrifo, Salvatore decide di fondare una propria compagnia.</p>
<p>Salvatore ha collaborato nel tempo con enti teatrali e artisti di rango nazionale e internazionale esibendosi in Italia e all'estero (in Russia, Venezuela, Dubai, Tunisia, Germania e Francia). Oggi la compagnia può contare sulla valida collaborazione dei figli di Salvatore, Luciano di 22 anni e Francesco che già a soli 14 anni ha l'importante compito di muovere i pupi e del nipote Luciano di 23 anni.</p>
<p>La figlia minore, Martina di 8 anni, si diletta già nel suonare il piano a cilindro.</p>
<p>La compagnia custodisce un teatro itinerante e circa 300 opere, sia ereditate dal padre che di recente fattura, tra cui: un centinaio di pupi (di cui 70 con armatura, 20 senza e una decina tra animali fantastici e diavoli; 50 scene e cartelli; numerosi stampi e attrezzi da lavoro, modelli per la realizzazione delle armature e ossature; vari strumenti musicali e pianini a cilindro.</p>`,
  },

  gargano: {
    title:
      'Associazione culturale "Opera dei pupi messinesi Gargano" (Messina)',
    logo: "gargano-logo.jpg",
    html: `<p>Venerando, Rosaria e Giorgio Gargano sono la quinta generazione di una famiglia di pupari che opera senza interruzione da 200 anni. Il capostipite è Venerando Gargano che, nella prima metà del 1800, comincia prima a collezionare e poi a costruire i pupi e a mettere in scena spettacoli nella sua fabbrica di sedie. Il figlio don Rosario Gargano affianca giovanissimo il padre in questa attività e, a 18 anni, scrive un'opera che diventerà l'elemento distintivo della famiglia Gargano nel variegato mondo dell'opera dei pupi: la saga del "Bellisario da Messana" portata in scena con 90 episodi. Nel 1920 apre il proprio teatro a Messina, con l'aiuto del figlio Venerando Gargano. Le gesta dei suoi pupi infiammano il "Ferragosto messinese", il teatro antico di Taormina, il pubblico lo acclama e lo frequenta assiduamente.</p>`,
  },

  mancuso: {
    title:
      "Associazione culturale teatrale Carlo Magno di Vincenzo Mancuso (Palermo)",
    logo: "mancuso-logo.jpg",
    website: {
      url: "http://www.mancusopupi.it",
      label: "www.mancusopupi.it",
    },
    html: `<p>L'Associazione culturale teatrale Carlo Magno è nata su iniziativa di Enzo Mancuso, ultimo discendente dell'omonima famiglia di pupari che diede inizio alla propria attività a Palermo nel 1928 quando Antonino Mancuso, nonno di Enzo, aprì un teatro dell'Opera dei Pupi nel quartiere Borgo Vecchio, in piazza don Luigi Sturzo. Fino ad allora Antonino Mancuso, allievo del puparo Pernice, aveva portato l'Opera dei Pupi in vari paesi della provincia viaggiando a bordo di un camion trasformato in teatro. Mancuso apportò alcune innovazioni alle armature con elmi alla greca e romani. Agli spettacoli partecipavano i figli Nino, papà di Enzo, Pino e Stefano. Enzo, figlio e nipote d'arte, è nato a Palermo nel 1974 ed è l'anima dell'attuale compagnia. Restaura alcuni pupi ereditati dal nonno ed inizia la sua attività nel 1994. Enzo Mancuso, oggi considerato uno dei più solidi pupari palermitani, non si è fermato all'apprendimento delle tecniche della costruzione e della manovra, ma ha approfondito lo studio di vecchi canovacci e perfezionato la tecnica recitativa. La sua compagnia partecipa per più edizioni ad importanti festival di teatro di figura.</p>`,
  },

  mauceri: {
    title:
      'Associazione "La compagnia dei pupari Vaccaro-Mauceri" (Siracusa)',
    logo: "mauceri-logo.png",
    website: {
      url: "http://www.teatrodeipupisiracusa.it",
      label: "www.teatrodeipupisiracusa.it",
    },
    html: `<p>Diverse generazioni di pupari si sono alternate in questi anni di operosità nel campo dell'Opra dei pupi a Siracusa. Dagli albori della tradizione siracusana con la famiglia Puzzo siamo giunti ai fratelli Vaccaro per poi aprire nuovi orizzonti con l'avvento dei fratelli Mauceri, figli della primogenita di Alfredo Vaccaro, Francesca. Dopo l'avvento della famiglia Puzzo, i Fratelli Vaccaro hanno riaperto il sipario sulla tradizione dei pupi coadiuvati dai membri della propria famiglia: Anna Cassarino, Lucia Cassarino, Francesco Cassarino, Francesca Vaccaro, Santina Vaccaro, Antonella Vaccaro, Francesca Vaccaro (ro zu Saru), Angela Vaccaro, Corrado Mauceri, Alfredo Mauceri, Daniel Mauceri, Elena Cifali, Christian Cifali. Nipoti e figli si sono avvicendati al fianco dei fratelli Vaccaro, dal 1978 al 1995. Dalla morte di Alfredo Vaccaro, avvenuta il 13 febbraio 1995, per quattro anni i figli e i nipoti di Alfredo hanno trainato l'opera dei pupi di Siracusa con l'ausilio dell'associazione "Opera dei pupi Alfredo Vaccaro" fin quando nuove idee, nuove modalità teatrali e nuovi progetti hanno portato ad una totale scissione della famiglia di origine, portando l'attuale famiglia Mauceri alla totale gestione dell'attività. La Famiglia Mauceri ha preso le redini dell'Opera dei pupi a Siracusa, perpetuando l'operato dei fratelli Vaccaro. Dopo lo scioglimento della vecchia associazione e la costituzione dell'attuale associazione "La compagnia dei pupari Vaccaro-Mauceri", avvenuta il 3 dicembre 1999, era importante per i due fratelli iniziare un loro percorso personale cercando di intraprendere le giuste vie, traendo dall'operato dei loro predecessori solo gli aspetti positivi e calarsi nel ruolo che gli competeva nel contesto socio-culturale che stavano vivendo. Tassello dopo tassello hanno costruito il loro mondo e la loro "favola", senza mai tralasciare di far conoscere la favola di cartapesta e legno dei fratelli Vaccaro. Nel repertorio della compagnia trovano posto, oltre agli spettacoli tradizionali, miti e leggende del siracusano, spettacoli per l'infanzia e allestimenti innovativi. La compagnia custodisce una propria collezione di materiali di scena che espone per la fruizione e costruisce da sé i pupi. La compagnia possiede una collezione di famiglia di circa 400 opere, gran parte catalogate e inventariate.</p>`,
  },

  gcuticchio: {
    title: "Compagnia TeatroArte Cuticchio di Girolamo Cuticchio (Palermo)",
    html: `<p>La Compagnia TeatroArte Cuticchio viene fondata nel 1989 dal maestro Girolamo, fratello minore del cavaliere Giacomo Cuticchio (1917) e suo allievo. Con lui collaborò sin dall'età di dieci anni, per esordire da solo pochi anni dopo nel teatro di corso dei Mille a Palermo. Si stabilisce in varie sedi - a Trabia e in diversi paesi vicini - fino al 1975, quando inizia una pluriennale collaborazione con il Museo internazionale delle marionette che terminerà nei primi anni del 2000. Nel 1979 gli viene assegnato il primo premio in occasione del Torneo di pupi siciliani. Dopo aver gestito per un paio di anni il Teatro stabile a Termini Imerese (PA), nel 1982 si sposta in via Agostino Todaro a Palermo. Nel 1989 costituisce con i figli Teresa, Carmelo, Francesco, Giacomo e Michele la cooperativa "Teatroarte Cuticchio", con sede in via Benedettini n. 9 a Palermo. Tra i materiali custoditi, una preziosa e vasta collezione di pianini a cilindro. La compagnia si esibisce in spettacoli saltuari su richiesta.</p>`,
  },

  fcuticchio: {
    title: 'Associazione culturale "Franco Cuticchio" (Palermo)',
    logo: "fcuticchio-logo.png",
    html: `<p>L'Associazione culturale "Franco Cuticchio" nasce nel 2013 su impulso di Franco, figlio di Girolamo (1933). Franco, terzogenito di Girolamo, è attivo sul palcoscenico sin dall'età di 5 anni, quando intraprende il suo lungo apprendistato come tradizione vuole: dando la voce, durante lo spettacolo, all'angioletto. A 8 anni, ottiene il ruolo di secondo oprante e inizia a seguire assiduamente il padre, in tutti i suoi spettacoli, sia in teatro che fuori sede. Alla fine del 2019, Franco riapre le porte del teatro di famiglia, acquistato da Girolamo negli anni Ottanta e chiuso dopo oltre dieci anni di attività, a metà degli anni Novanta per questioni burocratiche e amministrative.</p>
<p>Oggi collaborano con lui i suoi due figli, Girolamo ed Helenia, e il padre Girolamo in qualità di presidente onorario dell'Associazione. Franco si dedica inoltre alla realizzazione delle strutture e delle macchine sceniche, all'intaglio del legno ed alla forgiatura delle parti in metallo dei pupi. Helenia, realizza secondo le antiche tecniche, gli abiti e gli arredamenti di scena mentre Girolamo, si occupa della pittura degli scenari e della realizzazione di nuovi copioni di cui Franco segue la regia. Le mogli di Franco e Girolamo, Francesca Basile e Lavinia Polizzotto si occupano della programmazione e organizzazione di spettacoli e mostre. Ogni membro della famiglia si impegna nella manovra e nella recitazione.</p>
<p>La compagnia custodisce circa 250 opere. Gran parte dei pupi (una settantina in totale) risale agli anni '40-'50 del Novecento così come alcuni dei trenta copioni che sono stati scritti da Girolamo, padre di Franco. La collezione di famiglia include anche circa 60 cartelli e scene e alcuni volumi sul repertorio tradizionale dell'opera dei pupi (due collezioni complete della <em>Storia dei paladini di Francia</em>, una della <em>Gerusalemme liberata</em>, un romanzo dei <em>Beati Paoli</em> di Natoli e <em>I vespri siciliani</em>).</p>`,
  },

  argento: {
    title:
      "Associazione culturale Agramante di Vincenzo Argento (Palermo)",
    website: {
      url: "http://www.palazzoasmundo.com/it/il_palazzo/piano_terra_teatro_dei_pupi_siciliani",
      label:
        "www.palazzoasmundo.com/il_palazzo/piano_terra_teatro_dei_pupi_siciliani",
    },
    html: `<p>L'Associazione culturale Agramante nasce nel 1999 su impulso di Vincenzo Argento (1938), figlio e nipote di puparo. Il nonno, Don Cecè (1873), oprante e scultore di teste, è stato allievo dei Pernice e di Costantino Accardi e, attivo dal 1893, ebbe il suo teatro in diverse borgate e paesi delle province di Palermo e Agrigento e in diverse vie del quartiere palermitano di Borgo Vecchio. Nel 1912 a Lercara Friddi, alla fine di una rappresentazione della famiglia, nasce sul palcoscenico Giuseppe Argento, uno dei sei figli di Don Cecè. Un segno del destino che anticipa l'impegno di Giuseppe all'interno della compagnia. Giuseppe si alterna con Don Cecè in vari quartieri e borgate palermitane e della Sicilia occidentale fin quando nel 1934 si mette in proprio. Chiamato sotto le armi durante la Seconda Guerra Mondiale, viene preso prigioniero e trascorre il tempo dipingendo quadretti, ricamando piccoli arazzi di soggetto cavalleresco e raccontando ai suoi compagni la Storia dei paladini di Francia. Rimpatriato nel 1945, riprende l'attività teatrale spostandosi da una sede all'altra. Il figlio Vincenzo ha poco meno di 10 anni all'epoca e inizia ad apprendere l'arte del puparo. Suona il pianino a cilindro durante gli spettacoli fin quando, il padre non gli affida il ruolo di secondo manovratore. Nel frattempo Giuseppe eredita il mestiere di Don Cecè e il teatro di Corso Scinà a Palermo, dal quale però si trasferisce stabilendosi in diverse sedi. Dopo il crollo del soffitto dell'ultima sede, in via Pappagallo, la compagnia usufruisce di uno spazio offerto da Antonio Pasqualino all'interno del Museo internazionale delle marionette, situato ai tempi in Piazza Marina. Fu oprante, costruttore delle armature e pittore di scene e cartelli. Si esibisce in teatro per l'ultima volta nel 1985 e scompare nel 1993. Dopo qualche anno di stallo, Vincenzo Argento riprende le redini della compagnia facendo tesoro del patrimonio trasmessogli dal padre. Esprime il suo talento particolarmente nella costruzione dei pupi e nel 1999 insieme ai suoi figli, Anna, Nicolò e Dario, e alla moglie Teresa ricomincia così a creare e produrre gli spettacoli nel solco della tradizione e si dedica anche alla costruzione dei pupi, alla realizzazione delle scene, alla confezione dei costumi nonché all'elaborazione dei testi Il nuovo "Teatro Argento" ha da allora sede a Palermo in Via Pietro Novelli n. 1/a, di fronte alla Cattedrale all'interno di una dimora storica, Palazzo Asmundo, di cui occupa il piano terra. L'eredità tramandata in seno alla compagnia è oggi nelle mani dei suoi figli Anna, Nicolò e Dario, della moglie Teresa e del nipote benedetto Bruno che ogni giorno portano in scena le spettacolari avventure dei pupi siciliani. Gli Argento hanno portato negli anni i propri spettacoli in giro per il mondo, dall'America alla Spagna alla Germania. Ancora attivo è inoltre il laboratorio artigianale di corso Vittorio Emanuele n. 445 di Vincenzo, alla cui attività collabora anche la famiglia.</p>
<p>La compagnia conserva una collezione di circa 500 opere, inclusiva di materiali storici e di nuova fattura: 3 teatri, uno appartenuto a Don Cecè, uno di Giuseppe Argento e il terzo attualmente in uso; 500 pupi circa, di cui 160 senza armatura; una ottantina di cartelli e scene di cui 37 del mestiere storico, quasi 150 canovacci, di cui 46 appartenuti a Don Cecè e una trentina a Giuseppe; un centinaio di libri e circa 650 attrezzi.</p>`,
  },

  puglisi: {
    title: "Antica Compagnia Opera dei Pupi Famiglia Puglisi (Sortino, SR)",
    logo: "puglisi-logo.png",
    html: `<p>L'Antica Compagnia Opera dei Pupi Famiglia Puglisi deve il suo legame profondo con l'Opera dei Pupi a Don Ignazio Puglisi (1904), che impara l'arte dal padre Giovanni, allievo a sua volta del nonno Ignazio.</p>
<p>Don Ignazio aiuta il padre fin dai 14 anni e alla sua morte, all'età di 16 anni si mette in proprio facendo spettacoli in diversi paesi della provincia di Siracusa e spostandosi da una sede all'altra ogni 2-3 anni. Don Ignazio presta la voce a tutti i personaggi, maschili e femminili.</p>
<p>Dopo qualche anno dalla morte, il nipote Ignazio Manlio riprende le redini del patrimonio a lui trasmesso dal padre e dal nonno, stimolato da alcuni vecchi aiutanti del nonno. Ancora attiva all'interno del teatro comunale dell'Opera dei Pupi, la compagnia è oggi composta da Manlio che la dirige, dai figli Giancarlo (manovratore) e Davide (voci maschile e femminile). Oltre ai figli fanno parte dell'organico in maniera stabile Marco Cannata (manovratore) Gaetano Cannata (assistente); Seat Sebastiano Cannata (manovratore) e Gianfranco Salonia (assistente).</p>
<p>Si è esibita nel tempo sia in Italia che all'estero utilizzando fedelissime copie di pupi più antichi alti fino a 130 cm e pesanti oltre 30 kg. Il repertorio include sia spettacoli tradizionali tratti da antichi manoscritti di famiglia, sia nuove creazioni liberamente ispirate ai poemi epici e alle storie religiose sia nuove drammaturgie.</p>
<p>La realizzazione dei pupi avviene oggi, presso la bottega del maestro Salvatore Pulvirenti situata ad Aci Platani.</p>
<p>Don Ignazio raccolse nel tempo diversi materiali inerenti l'Opera dei Pupi costituendo una collezione di circa 500 opere che è stata in gran parte acquisita dal Comune di Sortino ed è oggi esposta al Museo civico dell'Opera dei Pupi Antica famiglia Puglisi di Sortino. La compagnia ha tenuto un centinaio di opere inclusive di alcuni antichi copioni manoscritti e qualche esemplare storico.</p>`,
  },
};
