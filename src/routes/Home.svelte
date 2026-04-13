<script lang="ts">
  import { link } from "svelte-spa-router";

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<div class="content-body">
  <h1>L'opera dei pupi</h1>
  <p>
    L'opera dei pupi è il teatro tradizionale siciliano delle marionette.
    Risalente al 1800, ha riscosso enorme successo presso i ceti popolari ed è
    considerato uno degli esempi più significativi della memoria storica e
    dell'identità culturale della Sicilia tanto da essere proclamata dall'UNESCO
    nel 2001 <em>Capolavoro del Patrimonio orale e immateriale dell'umanità</em>
    in quanto rappresentativa dell'ideologia del mondo popolare siciliano e del
    sistema di relazioni sociali sottese.
  </p>
  <p>
    Nella varia e vivace fioritura di teatri europei di marionette e burattini
    verificatasi alla fine del Settecento e durante l'Ottocento, l'Opera dei
    Pupi costituisce un episodio particolare, caratterizzato dalla
    rielaborazione di materiali narrativi tradizionali e dalla creazione di
    particolari forme drammaturgiche. L'Opera dei Pupi si distingue dalle altre
    forme di teatro di marionette per il repertorio, la meccanica, lo stile
    figurativo, l'organizzazione scenica e il tipo di recitazione.
  </p>
  <p>
    Gli spettacoli venivano rappresentati a puntate, in cicli narrativi che
    duravano molti mesi, all'interno di locali situati nei quartieri poveri. I
    gestori dei teatri muovono i pupi, li fanno parlare, talvolta li
    costruiscono, dipingono per loro le scene e i cartelli e sono detti
    "opranti", "teatrinari" o "pupari", termine quest'ultimo utilizzato anche
    per i costruttori di pupi. Le compagnie si fermavano in una sede e si
    esibivano quotidianamente in uno o più cicli narrativi che potevano durare
    diversi mesi o anni, finché il pubblico non era stanco e occorreva spostarsi
    in una nuova sede.
  </p>
  <p>
    Gli spettatori, quasi esclusivamente adulti e ragazzi maschi, seguivano le
    storie con grande partecipazione emotiva, identificandosi negli eroi
    positivi e infierendo sui malvagi, talora fino a distruggere il pupo
    rappresentante il personaggio odiato.
  </p>
  <p>
    I soggetti sono principalmente le lunghe vicende derivate dalla letteratura
    epica medievale francese, con particolare riferimento alla Chanson de
    Roland, e dal romanzo arturiano. Nel tempo, tali leggende sono state
    rielaborate e arricchite in Italia in numerosi romanzi e poemi, tra cui: I
    Reali di Francia e Guerin Meschino di Andrea da Barberino, Morgante di
    Luigi Pulci, Orlando innamorato di Matteo Maria Boiardo, Orlando furioso di
    Ludovico Ariosto, Gerusalemme liberata di Torquato Tasso. Queste e molte
    altre opere, diffuse grazie alle edizioni popolari e ai narratori – i
    cuntisti in Sicilia e i rinaldi in Campania – entrarono nelle compilazioni
    siciliane pubblicate a dispense nell'Ottocento e nel primo Novecento. Tra
    queste, la Storia dei Paladini di Francia, scritta da Giusto Lodico e
    destinata a divenire fonte di ispirazione diretta dell'opera dei pupi.
  </p>
  <p>
    Oltre ai soggetti cavallereschi, tuttavia, il repertorio tradizionale
    dell'opera dei pupi comprende anche storie religiose, narrazioni
    storico-romanzesche, storie di briganti e opere shakespeariane quali Romeo e
    Giulietta e Macbeth.
  </p>
  <p>
    Spesso negli spettacoli epici vengono inserite le maschere della tradizione
    teatrale siciliana, eroi comici e rappresentanti del popolo che si
    accompagnano ai personaggi protagonisti in veste di famigli e servitori,
    secondo una tradizione ben consolidata nel teatro europeo delle marionette.
    Essi sono Nofriu, Virticchiu e Tistuzza a Palermo e Peppininu a Catania.
  </p>
  <p>
    Esistono in Sicilia due distinte tradizioni dell'opera dei pupi. Quello
    <button class="link-btn" onclick={() => scrollToSection('palermo')}>"palermitano"</button>,
    localizzato nella Sicilia occidentale, ovvero nelle province di Agrigento,
    Palermo e Trapani; e quello
    <button class="link-btn" onclick={() => scrollToSection('catania')}>"catanese"</button>,
    che caratterizza la Sicilia orientale, ovvero le province di Messina,
    Catania e Siracusa. Essi differiscono per qualche aspetto della meccanica,
    della figurazione e, pur nella fondamentale unità del repertorio, per
    qualche soggetto particolare. Una terzo stile è quello
    <button class="link-btn" onclick={() => scrollToSection('napoli')}>"napoletano"</button>,
    diffuso nell'Italia meridionale, ovvero in Campania, Puglia e Calabria
    mentre una forma analoga all'opera dei pupi è riscontrata anche in Belgio e
    Francia.
  </p>

  <h3>Il pupo: caratteristiche generali</h3>
  <p>
    La testa e l'ossatura del pupo sono di legno. L'ossatura è composta da un
    busto, dal quale si articolano le gambe, dotate di movimento pendolare. Le
    braccia possono muoversi in tutte le direzioni grazie all'inserimento di un
    segmento di stoffa imbottita (Palermo) o di snodi metallici (Catania) che
    uniscono il braccio alla spalla. Nel pupo palermitano busto e gambe sono di
    legno massiccio, mentre a Catania e a Napoli lo scheletro di legno è
    imbottito.
  </p>
  <p>
    I pupi siciliani vengono mossi mediante due robusti ferri e due o tre fili
    collegati agli arti. Il ferro cosiddetto principale, a cui si fissano i
    fili di manovra, attraversa la testa e si congiunge al busto. La sua
    sommità a forma di uncino permette di appendere il pupo e, mediante la sua
    inclinazione, la marionetta esegue i diversi movimenti.
  </p>
  <p>
    Dal punto di vista figurativo, genericamente si possono distinguere i
    personaggi con l'armatura (armati) e senza (in paggio). I pupi armati si
    suddividono in cristiani e saraceni. I guerrieri cristiani hanno volti
    gentili e tratti simmetrici, indossano un gonnellino (chiamato a Palermo
    faroncina, a Catania vesti) e presentano gli emblemi del casato su elmo,
    corazza e scudo. I saraceni, hanno tratti del viso più marcati; indossano
    spesso pantaloni e turbante; mezzelune e stelle decorano le loro armature.
    Le guerriere, sia cristiane che saracene, presentano le mammelle sbalzate
    sull'armatura e, a Palermo, si contraddistinguono anche per i capelli
    lunghi, fuoriuscenti ai lati dell'elmo. I giganti sono di solito
    parzialmente armati. Tra i cristiani si riconoscono infine i traditori: per
    la statura più bassa, il colore nero delle vesti e - a Palermo - la M
    sbalzata sull'armatura, emblema della stirpe di Maganza.
  </p>

  <h3>I cartelli: caratteristiche generali</h3>
  <p>
    Per annunciare e pubblicizzare lo spettacolo del giorno, i pupari
    esponevano fuori dai teatri grandi cartelli, dipinti con colori vivaci.
    Esposti all'angolo delle strade, al sole e alla pioggia, essi venivano
    spesso ritoccati.
  </p>
  <p>
    I fondali, denominati "scene", sono dipinti con cura e raffigurano regge,
    castelli, città, piazze, accampamenti, giardini, ecc... L'aspetto
    figurativo dei diversi ambienti rievoca la moda teatrale colta del XIX
    secolo.
  </p>

  <hr />

  <h2 id="palermo">Palermo</h2>
  <p>
    Lo stile "palermitano" dell'Opera dei Pupi caratterizza la Sicilia
    occidentale. I pupi palermitani sono alti circa cm. 90 e pesano tra i 5 e i
    10 chili. Le gambe sono dotate di movimento pendolare, libero in avanti ma
    limitato indietro. Hanno le ginocchia articolate e possono sguainare e
    ringuainare la spada grazie a un filo che attraversa la mano destra.
    Talvolta presentano un ulteriore filo collegato alla coscia sinistra:
    impresso il movimento pendolare alla gamba, esso aiuta la marionetta a fare
    con sicurezza il primo passo; producendo un tremito della gamba permette poi
    al pupo di esprimere impazienza o rabbia; infine, fa sì che il pupo si
    possa genuflettere.
  </p>
  <p>
    A Palermo i pupi vengono manovrati dai lati del palcoscenico, dietro le
    quinte, dove i manovratori operano a braccio teso sullo stesso piano su cui
    si muovono i pupi. Il maestro, oltre a manovrare le marionette, dà
    indicazioni ai suoi aiutanti, improvvisa i dialoghi, esegue tutte le parti
    recitate (comprese quelle femminili) e realizza effetti sonori e di luci.
  </p>
  <p>
    Poiché i pupi palermitani sono più piccoli di quelli catanesi, nell'area
    palermitana la sala teatrale solo eccezionalmente è capace di accogliere
    cento o più spettatori. Di conseguenza a Palermo un teatro si regge su
    mezzi più modesti ed è un'impresa unifamiliare. Il pubblico sedeva su rozzi
    banchi di legno o, talvolta, su pedane rialzate, chiamate "palchi". Il
    palcoscenico è solitamente più profondo che largo, in conseguenza della
    posizione di manovra dei pupari (ai lati, dietro le quinte).
  </p>
  <p>
    A Palermo, alla fine dello spettacolo, accompagnato musicalmente da uno o
    più violini già sostituiti alla fine dell'Ottocento dal pianino a cilindro,
    ancora oggi si rappresenta una breve farsa in dialetto i cui protagonisti
    sono Nofriu e Virticchiu. I soggetti delle farse palermitane risalgono alle
    vastasate, rappresentazioni comiche derivate dai soggetti della Commedia
    dell'Arte.
  </p>
  <p>
    I cartelli palermitani, dipinti a tempera su tela, sono divisi in diversi
    riquadri, in genere otto, denominati scacchi. Ogni scacco, spesso
    sottotitolato, corrisponde a un episodio del ciclo. La scritta rimovibile
    "oggi" veniva fissata sullo scacco relativo allo spettacolo della sera.
  </p>

  <h3><em>Le compagnie</em></h3>
  <p>
    Attualmente sono nove le compagnie di pupari di scuola palermitana
    depositarie del patrimonio orale e immateriale dell'opera dei pupi nonché
    di beni materiali (pupi, cartelli, scene, attrezzi, etc) sia storici che in
    uso per la realizzazione degli spettacoli:
  </p>
  <h4>Palermo:</h4>
  <ul>
    <li><a href="/compagnie/argento" use:link>Associazione culturale Agramante di Vincenzo Argento</a></li>
    <li><a href="/compagnie/fcuticchio" use:link>Associazione culturale "Franco Cuticchio"</a></li>
    <li><a href="/compagnie/sicilia" use:link>Associazione Culturale Marionettistica Popolare Siciliana di Angelo Sicilia</a></li>
    <li><a href="/compagnie/mancuso" use:link>Associazione culturale teatrale Carlo Magno di Vincenzo Mancuso</a></li>
    <li><a href="https://www.figlidartecuticchio.com/" target="_blank" rel="noopener noreferrer">Associazione Figli d'Arte Cuticchio</a></li>
    <li><a href="/compagnie/bumbello" use:link>Associazione opera dei pupi Brigliadoro di Salvatore Bumbello</a></li>
    <li><a href="/compagnie/gcuticchio" use:link>Compagnia TeatroArte Cuticchio di Girolamo Cuticchio</a></li>
  </ul>
  <h4>Partinico (PA):</h4>
  <ul>
    <li>Compagnia dei pupi di Nino Canino</li>
  </ul>
  <h4>Alcamo (TP):</h4>
  <ul>
    <li><a href="/compagnie/canino" use:link>Associazione Culturale Opera dei pupi Siciliani "G. Canino"</a></li>
  </ul>

  <hr />

  <h2 id="catania">Catania</h2>
  <p>
    Lo stile "catanese" dell'Opera dei Pupi caratterizza la Sicilia orientale. I
    pupi catanesi hanno uno scheletro di legno imbottito, sono più alti e
    pesanti di quelli palermitani, raggiungono un'altezza di circa cm. 110 - 130
    e un peso di circa 30 chili. Se sono guerrieri, tengono quasi sempre la
    spada in pugno. Le loro gambe sono rigide, senza snodo al ginocchio:
    quest'accorgimento della meccanica permette di scaricare sul palcoscenico il
    notevole peso dei pupi e di agevolare così la fatica dell'animazione. I pupi
    catanesi sono mossi dai <em>manianti</em> (cioè i manovratori), che si
    trovano su un ponte rialzato, chiamato <em>scannappoggiu,</em> posizionato
    dietro il fondale. La mole e il peso dei pupi e il loro sistema di manovra
    determinano la scarsa profondità del palcoscenico a vantaggio di una
    maggiore larghezza della scena. La voce è data ai pupi dal
    <em>parraturi</em> per i personaggi maschili e dalla <em>parratrici</em> per
    quelli femminili: essi, dietro le quinte alla sinistra del pubblico,
    improvvisano i dialoghi drammatici o leggono parti a copione disteso e
    impartiscono istruzioni ai <em>manianti,</em> che sincronizzano il movimento
    dei pupi con le battute dei <em>parlatori. 'U parraturi</em> è quasi sempre
    anche il regista dello spettacolo.
  </p>
  <p>
    Poiché i pupi catanesi sono più grandi di quelli di area palermitana, le
    sale teatrali possono ospitare anche duecento e più posti. Di conseguenza,
    visti i potenziali maggiori introiti, a Catania i teatri potevano essere
    gestiti da più persone associate e le vicende dei pupari si sono spesso
    intrecciate con quelle di altre forme teatrali.
  </p>
  <p>
    A Catania, oltre ai soggetti tradizionalmente rappresentati in tutta la
    Sicilia, il repertorio tradizionale includeva anche altre storie:
    <em>Erminio della Stella d'Oro, Guido di Santa Croce, Uzeta il Catanese,
      Farismane e Siface, Tramoro di Medina, Guelfo di Negroponte.</em>
  </p>
  <p>
    A questi cicli si aggiunge a Messina il <em>Belisario di Messina,</em>
    storia che marca una peculiarità specifica della città dello stretto
    rispetto alla tradizione catanese dell'Opera dei Pupi.
  </p>
  <p>
    Lo spettacolo era tradizionalmente accompagnato da una piccola orchestrina a
    plettro, cui spesso si aggiungeva una fisarmonica e, in particolari serate,
    qualche strumento a fiato. Oggi, salvo che in particolari occasioni,
    l'orchestrina è sostituita da musica registrata.
  </p>
  <p>
    A Catania i cartelli sono dipinti a tempera su fogli rettangolari di carta
    da imballaggio (talvolta su carta da scenografia, da spolvero o da
    zucchero) e raffigurano la scena più importante della rappresentazione
    serale. Sul cartello veniva appuntato con degli spilli il
    <em>ricordino,</em> un foglio rimovibile con una didascalia che riassumeva,
    o meglio ricordava agli spettatori, la vicenda dello spettacolo.
  </p>
  <p>
    Varianti stilistiche della tradizione catanese dell'Opera dei Pupi sono
    quella di Acireale e quella di Siracusa. Ad Acireale i pupi differiscono da
    quelli catanesi innanzitutto per il loro sistema di manovra. Essi sono
    infatti mossi da un ponte di animazione più alto del boccascena col fondale
    posizionato dietro, in tutto simile a quello dei pupi napoletani e dei
    teatri di marionette. I pupi hanno dimensioni più ridotte rispetto a quelle
    dei pupi catanesi e i ferri di manovra, molto lunghi, presentano entrambi
    un uncino alla loro sommità. Infine, anche ad Acireale, come a Palermo, il
    <em>parlatore</em> presta la sua voce sia ai personaggi maschili che a
    quelli femminili.
  </p>
  <p>
    A Siracusa, negli storici teatri della famiglia Puzzo, i pupi, per
    dimensioni, peso, sistema di manovra e repertorio in tutto simili a quelli
    catanesi, presentavano però le gambe con lo snodo al ginocchio.
  </p>

  <h3><em>Le compagnie</em></h3>
  <p>
    Attualmente sono cinque le famiglie di pupari nella Sicilia orientale
    depositarie del patrimonio orale e immateriale dell'opera dei pupi nonché
    di beni materiali (pupi, cartelli, scene, attrezzature sceniche, etc.) sia
    storici che in uso per la realizzazione degli spettacoli:
  </p>
  <h4>Catania</h4>
  <ul>
    <li><a href="/compagnie/napoli" use:link>Marionettistica Fratelli Napoli di Napoli Fiorenzo</a></li>
  </ul>
  <h4>Messina</h4>
  <ul>
    <li><a href="/compagnie/gargano" use:link>Associazione culturale "Opera dei pupi messinesi Gargano"</a></li>
  </ul>
  <h4>Siracusa</h4>
  <ul>
    <li><a href="/compagnie/mauceri" use:link>Associazione "La compagnia dei pupari Vaccaro-Mauceri"</a></li>
  </ul>
  <h4>Acireale (CT)</h4>
  <ul>
    <li>Associazione Opera dei Pupi Turi Grasso</li>
  </ul>
  <h4>Sortino (SR)</h4>
  <ul>
    <li><a href="/compagnie/puglisi" use:link>Antica Compagnia Opera dei Pupi Famiglia Puglisi</a></li>
  </ul>

  <hr />

  <h2 id="napoli">Napoli</h2>
  <p>
    L'Opera dei Pupi di stile "napoletano" è localizzata in Campania e in
    Puglia. I pupi napoletani hanno uno scheletro di legno imbottito. Sono alti
    cm. 110 e pesano circa kg. 20. Presentano uno snodo alle ginocchia, ma con
    limitate possibilità di articolazione. Il movimento del braccio destro è
    governato non da un'asta metallica ma da un filo di spago di canapa. Il
    lieve gioco laterale delle anche e un'impernatura delle gambe al busto meno
    rigida producono un'andatura più sciolta del pupo siciliano, gli permettono
    di oscillare da fermo e consentono di montare più facilmente in sella ai
    cavalli. I manovratori dei pupi, detti pupanti, operavano su un ponte
    abbastanza alto da permettere di posizionare il fondale dietro di esso, come
    abitualmente avveniva nei teatri di marionette. Durante la manovra, i
    <em>pupanti</em> recitavano, leggendo ciascuno la propria parte dallo stesso
    copione, scritto a penna con caratteri molto grandi. Il copione veniva
    disposto su un leggìo mobile che scorreva da destra a sinistra e viceversa
    su fili di metallo, stesi dietro i cieli di manovra e parallelamente al
    ponte.
  </p>
  <p>
    Le sale teatrali potevano contenere da duecento a cinquecento posti e
    venivano usate anche per spettacoli con attori viventi. Come a Catania, in
    conseguenza della posizione di manovra dei marionettisti, il palcoscenico è
    più largo che profondo.
  </p>
  <p>
    Oltre alle <em>Storie guerresche</em>, che comprendono <em>il Ciclo dei
      Paladini, il Guerrin Meschino e il Palmerino d'Ulivo,</em> il repertorio
    tradizionale napoletano include vicende storico-romanzesche, storie di
    banditi e molte <em>Storie dei guappi</em>, che prendono il nome dal loro
    protagonista <em>(Carmine Malafercola, Tore 'e Criscienzo).</em> Le
    compagnie più famose della Campania sono state quelle di Angelo Buonandi,
    dei Corelli, dei Di Giovanni, di Alfredo Farina, dei Verbale.
  </p>
  <p>
    I cartelli di stile napoletano sono dipinti a tempera con delicati colori
    pastello su carta da imballaggio o su tela e raffigurano una sola scena su
    cui veniva apposto un foglio riassumente la vicenda del giorno.
  </p>
  <p>
    Ai pupi napoletani si possono collegare, per l'origine, per le identiche
    caratteristiche meccaniche e figurative e per i frequenti contatti, i pupi
    delle Puglie.
  </p>

  <hr />

  <h2>Bibliografia essenziale</h2>
  <p>A. Pasqualino, L'opera dei pupi, Sellerio, Palermo, 1977</p>
</div>

<style>
  .link-btn {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: oklch(var(--p));
    text-decoration: underline;
    cursor: pointer;
  }
</style>
