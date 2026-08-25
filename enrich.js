// Authored practice content, keyed by word id. Words added later from the sheet
// simply won't have an entry and fall back to the basic question types.
var ENRICH = {
"allegation-1": {"syns":["claim","accusation"],"tip":"Used when something bad is claimed but not yet proven — courts and news use it a lot.","quiz":[
  {"type":"syn","options":["accusation","apology","verdict","compliment"],"answer":"accusation"},
  {"type":"cloze","prompt":"The coach denied the ___ that his team had cheated in the final game.","options":["allegation","apology","prediction","invitation"],"answer":"allegation"},
  {"type":"scen","prompt":"Which of these is an allegation?","options":["Saying your classmate stole your pen even though you didn't see it happen","Watching your classmate return the pen he borrowed","Thanking your classmate for finding your lost pen"],"answer":"Saying your classmate stole your pen even though you didn't see it happen"}]},
"bemoan-1": {"syns":["complain about","lament"],"tip":"You bemoan something you're sad or upset about — usually out loud, and a bit dramatically.","quiz":[
  {"type":"syn","options":["lament","praise","describe","forgive"],"answer":"lament"},
  {"type":"ant","options":["celebrate","whisper","remember","repeat"],"answer":"celebrate"},
  {"type":"cloze","prompt":"Grandpa loves to ___ the price of movie tickets, sighing about how cheap they used to be.","options":["bemoan","admire","predict","collect"],"answer":"bemoan"},
  {"type":"scen","prompt":"Which of these is bemoaning something?","options":["Groaning to your friends about how much homework you got","Quietly finishing your homework early","Asking the teacher a question about the homework"],"answer":"Groaning to your friends about how much homework you got"}]},
"barren-1": {"syns":["lifeless","empty"],"tip":"Describes land where nothing grows — deserts, rocky fields. Can also mean empty of results.","quiz":[
  {"type":"syn","options":["lifeless","crowded","muddy","distant"],"answer":"lifeless"},
  {"type":"ant","options":["fertile","dry","rocky","wide"],"answer":"fertile"},
  {"type":"cloze","prompt":"After years without rain, the farm turned ___ and not a single crop would grow.","options":["barren","fragrant","spacious","shady"],"answer":"barren"},
  {"type":"scen","prompt":"Which place is barren?","options":["A rocky desert where no plants can grow","A jungle bursting with vines and animals","A farm field full of ripe corn"],"answer":"A rocky desert where no plants can grow"}]},
"intangible-1": {"syns":["untouchable","hard to pin down"],"tip":"Things you can't touch or measure — like courage or team spirit — are intangible.","quiz":[
  {"type":"syn","options":["untouchable","imaginary","fragile","worthless"],"answer":"untouchable"},
  {"type":"ant","options":["solid","soft","bright","loud"],"answer":"solid"},
  {"type":"cloze","prompt":"Confidence is ___ — you can't hold it in your hand, but you can feel it grow.","options":["intangible","expensive","temporary","popular"],"answer":"intangible"},
  {"type":"scen","prompt":"Which of these is intangible?","options":["The trust between best friends","A trophy on the shelf","A secret note passed in class"],"answer":"The trust between best friends"}]},
"frugal-1": {"syns":["thrifty","careful with money"],"tip":"A positive way to say someone avoids wasting money — different from stingy, which is selfish.","quiz":[
  {"type":"syn","options":["thrifty","greedy","poor","generous"],"answer":"thrifty"},
  {"type":"ant","options":["wasteful","wealthy","hungry","busy"],"answer":"wasteful"},
  {"type":"cloze","prompt":"My ___ aunt packs snacks from home instead of buying them at the movies.","options":["frugal","famous","forgetful","friendly"],"answer":"frugal"},
  {"type":"scen","prompt":"Which of these shows someone being frugal?","options":["Saving allowance by fixing an old bike instead of buying a new one","Refusing to share candy with a younger brother","Buying the most expensive sneakers in the store"],"answer":"Saving allowance by fixing an old bike instead of buying a new one"}]},
"gluttonous-1": {"syns":["greedy","piggish"],"tip":"Usually about food — wanting way more than you need.","quiz":[
  {"type":"syn","options":["greedy","hungry","chubby","rude"],"answer":"greedy"},
  {"type":"cloze","prompt":"The ___ dragon ate the whole feast and still demanded more dessert.","options":["gluttonous","courageous","clumsy","sleepy"],"answer":"gluttonous"},
  {"type":"scen","prompt":"Which of these is gluttonous?","options":["Taking a third helping before others have had firsts","Eating a big dinner after skipping lunch","Sharing your fries with the table"],"answer":"Taking a third helping before others have had firsts"}]},
"stagnate-1": {"syns":["stand still","stop improving"],"tip":"Water that stops moving stagnates — so do skills you stop practicing.","quiz":[
  {"type":"syn","options":["stall","improve","hurry","disappear"],"answer":"stall"},
  {"type":"ant","options":["advance","pause","remain","settle"],"answer":"advance"},
  {"type":"cloze","prompt":"If you never try new moves, your skating will ___ while your friends keep getting better.","options":["stagnate","improve","accelerate","wobble"],"answer":"stagnate"},
  {"type":"scen","prompt":"Which band is stagnating?","options":["A band that plays the same three songs for years without learning new ones","A band that practices new songs every week","A band that takes one week off after a big concert"],"answer":"A band that plays the same three songs for years without learning new ones"}]},
"stupendous-1": {"syns":["amazing","astonishing"],"tip":"For things so big or great they stun you — a compliment with wow-power.","quiz":[
  {"type":"syn","options":["astonishing","gigantic","pleasant","lucky"],"answer":"astonishing"},
  {"type":"ant","options":["ordinary","horrible","small","quiet"],"answer":"ordinary"},
  {"type":"cloze","prompt":"The gymnast's ___ triple flip made the whole crowd gasp.","options":["stupendous","mediocre","accidental","forbidden"],"answer":"stupendous"},
  {"type":"scen","prompt":"Which of these is stupendous?","options":["A magician making the school bus disappear in front of everyone","A magician shuffling cards at a normal speed","A magician dropping his hat during the show"],"answer":"A magician making the school bus disappear in front of everyone"}]},
"suave-1": {"syns":["smooth","charming"],"tip":"Usually describes a person — polished manners, smooth talk, stylish moves.","quiz":[
  {"type":"syn","options":["charming","handsome","loud","honest"],"answer":"charming"},
  {"type":"ant","options":["awkward","ugly","angry","slow"],"answer":"awkward"},
  {"type":"cloze","prompt":"The ___ waiter glided between tables, greeting every guest with a perfect bow.","options":["suave","clumsy","grumpy","timid"],"answer":"suave"},
  {"type":"scen","prompt":"Which of these is suave?","options":["Greeting everyone at the party with a confident smile and smooth compliments","Telling jokes so loudly the whole room stares","Wearing a fancy suit but tripping over the rug"],"answer":"Greeting everyone at the party with a confident smile and smooth compliments"}]},
"versatile-1": {"syns":["adaptable","all-around"],"tip":"A versatile player can play any position; a versatile tool does many jobs.","quiz":[
  {"type":"syn","options":["adaptable","talented","strong","reliable"],"answer":"adaptable"},
  {"type":"ant","options":["limited","useless","broken","simple"],"answer":"limited"},
  {"type":"cloze","prompt":"A ___ athlete like Maya can swim, sprint, and even play goalie when needed.","options":["versatile","famous","exhausted","competitive"],"answer":"versatile"},
  {"type":"scen","prompt":"Which of these is versatile?","options":["A kitchen knife that slices, peels, and opens packages","A giant knife that only cuts bread","A shiny knife displayed in a glass case"],"answer":"A kitchen knife that slices, peels, and opens packages"}]},
"vicinity-1": {"syns":["neighborhood","surroundings"],"tip":"'In the vicinity of' = near. Police reports love this word.","quiz":[
  {"type":"syn","options":["surroundings","distance","direction","population"],"answer":"surroundings"},
  {"type":"cloze","prompt":"The lost puppy stayed in the ___ of its home, never wandering more than a block away.","options":["vicinity","memory","shadow","opinion"],"answer":"vicinity"},
  {"type":"scen","prompt":"Which of these is in your vicinity?","options":["The playground one block from your house","Your cousin's house three hours away by car","A beach in another state you visited last summer"],"answer":"The playground one block from your house"}]},
"wholesome-1": {"syns":["healthy","good for you"],"tip":"Describes food, fun, and habits that are good for body or character.","quiz":[
  {"type":"syn","options":["healthy","delicious","sweet","filling"],"answer":"healthy"},
  {"type":"ant","options":["harmful","sour","boring","expensive"],"answer":"harmful"},
  {"type":"cloze","prompt":"Hiking with family is a ___ way to spend a Saturday — fresh air, exercise, and laughs.","options":["wholesome","dangerous","costly","lazy"],"answer":"wholesome"},
  {"type":"scen","prompt":"Which of these is wholesome?","options":["A picnic with homemade sandwiches and a game of catch","A midnight candy feast during a scary movie","Skipping dinner to keep playing video games"],"answer":"A picnic with homemade sandwiches and a game of catch"}]},
"exquisite-1": {"syns":["gorgeous","finely made"],"tip":"For delicate, detailed beauty — lace, jewelry, a perfect dessert.","quiz":[
  {"type":"syn","options":["gorgeous","expensive","tiny","ancient"],"answer":"gorgeous"},
  {"type":"ant","options":["plain","cheap","huge","new"],"answer":"plain"},
  {"type":"cloze","prompt":"The artist's ___ glasswork was so delicate and detailed that people leaned in to admire every curve.","options":["exquisite","clumsy","sturdy","affordable"],"answer":"exquisite"},
  {"type":"scen","prompt":"Which of these is exquisite?","options":["A hand-painted fan with tiny perfect brushstrokes","A plain cardboard box that works fine","A giant billboard with bright colors"],"answer":"A hand-painted fan with tiny perfect brushstrokes"}]},
"fabricate-1": {"syns":["invent","make up"],"tip":"Fabricating a story = lying by inventing it. (Factories fabricate products — but on tests it usually means lying.)","quiz":[
  {"type":"syn","options":["invent","discover","admit","prove"],"answer":"invent"},
  {"type":"cloze","prompt":"Caught without his homework, Leo tried to ___ a story about a paper-eating parrot.","options":["fabricate","memorize","translate","illustrate"],"answer":"fabricate"},
  {"type":"scen","prompt":"Which of these is fabricating?","options":["Inventing a fake emergency to explain being late","Admitting you overslept and apologizing","Retelling exactly what happened on the way to school"],"answer":"Inventing a fake emergency to explain being late"}]},
"wretched-1": {"syns":["miserable","awful"],"tip":"For truly miserable people, places, or things — stronger than just 'bad'.","quiz":[
  {"type":"syn","options":["miserable","naughty","broken","dirty"],"answer":"miserable"},
  {"type":"ant","options":["fortunate","dirty","noisy","crowded"],"answer":"fortunate"},
  {"type":"cloze","prompt":"Soaked, shivering, and lost, the hikers spent a ___ night in the cave.","options":["wretched","cozy","restful","cheerful"],"answer":"wretched"},
  {"type":"scen","prompt":"Which of these is a wretched situation?","options":["Sitting alone in the rain after missing the last bus home","Relaxing by a warm fireplace with cocoa","Waiting five minutes for a slightly late train"],"answer":"Sitting alone in the rain after missing the last bus home"}]},
"alluring-1": {"syns":["tempting","inviting"],"tip":"Something alluring pulls you toward it — like a bakery smell or a mystery.","quiz":[
  {"type":"syn","options":["tempting","colorful","famous","expensive"],"answer":"tempting"},
  {"type":"ant","options":["repulsive","invisible","ordinary","cheap"],"answer":"repulsive"},
  {"type":"cloze","prompt":"The ___ smell of fresh cookies pulled the kids straight into the kitchen.","options":["alluring","revolting","harmless","distant"],"answer":"alluring"},
  {"type":"scen","prompt":"Which of these is alluring?","options":["A shop window display that makes everyone stop and stare","A plain gray door with no sign","A loud alarm that makes people cover their ears"],"answer":"A shop window display that makes everyone stop and stare"}]},
"adversary-1": {"syns":["opponent","rival"],"tip":"An adversary competes against you — not always an enemy you hate.","quiz":[
  {"type":"syn","options":["opponent","teammate","referee","stranger"],"answer":"opponent"},
  {"type":"ant","options":["ally","coach","winner","judge"],"answer":"ally"},
  {"type":"cloze","prompt":"Across the chessboard sat her toughest ___, the only player who had ever beaten her.","options":["adversary","admirer","assistant","ancestor"],"answer":"adversary"},
  {"type":"scen","prompt":"Which of these is your adversary?","options":["The rival team you face in the championship","The teammate who passes you the ball","The referee who calls the fouls"],"answer":"The rival team you face in the championship"}]},
"appease-1": {"syns":["calm down","satisfy"],"tip":"You appease someone by giving them some of what they want — often to stop a fuss.","quiz":[
  {"type":"syn","options":["satisfy","ignore","defeat","warn"],"answer":"satisfy"},
  {"type":"ant","options":["provoke","obey","greet","follow"],"answer":"provoke"},
  {"type":"cloze","prompt":"Dad let the twins pick the radio station to ___ them on the long drive.","options":["appease","punish","exhaust","ignore"],"answer":"appease"},
  {"type":"scen","prompt":"Which of these is appeasing someone?","options":["Giving your little sister one cookie so she stops crying","Telling your little sister to stop crying right now","Hiding all the cookies where she can't see them"],"answer":"Giving your little sister one cookie so she stops crying"}]},
"adequate-1": {"syns":["enough","sufficient"],"tip":"Adequate = good enough, no more. 'The meal was adequate' is NOT a big compliment.","quiz":[
  {"type":"syn","options":["sufficient","excellent","generous","extra"],"answer":"sufficient"},
  {"type":"ant","options":["insufficient","perfect","enormous","useless"],"answer":"insufficient"},
  {"type":"cloze","prompt":"One water bottle is ___ for a short hike, but bring three for the mountain trail.","options":["adequate","heavy","refreshing","free"],"answer":"adequate"},
  {"type":"scen","prompt":"Which of these is adequate?","options":["Packing exactly enough sandwiches for everyone at the picnic","Packing a feast with triple the food you need","Forgetting the food and buying snacks later"],"answer":"Packing exactly enough sandwiches for everyone at the picnic"}]},
"insomnia-1": {"syns":["sleeplessness"],"tip":"'In-' = not + 'somnus' = sleep. People with insomnia lie awake at night.","quiz":[
  {"type":"syn","options":["sleeplessness","nightmare","laziness","tiredness"],"answer":"sleeplessness"},
  {"type":"cloze","prompt":"Her ___ was so bad she watched the clock strike every hour until dawn.","options":["insomnia","drowsiness","nightmare","appetite"],"answer":"insomnia"},
  {"type":"scen","prompt":"Which of these is insomnia?","options":["Lying wide awake at 3 a.m. even though you're exhausted","Sleeping twelve hours straight on the weekend","Dozing off during a boring afternoon class"],"answer":"Lying wide awake at 3 a.m. even though you're exhausted"}]},
"scrutinise-1": {"syns":["inspect","study closely"],"tip":"British spelling of scrutinize. You scrutinise details — clues, contracts, homework.","quiz":[
  {"type":"syn","options":["inspect","glance","collect","discuss"],"answer":"inspect"},
  {"type":"ant","options":["skim","stare","copy","erase"],"answer":"skim"},
  {"type":"cloze","prompt":"A good editor will ___ every sentence before the book is printed.","options":["scrutinise","memorise","decorate","translate"],"answer":"scrutinise"},
  {"type":"scen","prompt":"Which of these is scrutinising?","options":["Checking every answer twice before handing in the test","Handing in the test after a quick glance","Asking a friend how hard the test was"],"answer":"Checking every answer twice before handing in the test"}]},
"assiduous-1": {"syns":["diligent","hard-working"],"tip":"Assiduous students keep at it with steady care — day after day.","quiz":[
  {"type":"syn","options":["diligent","intelligent","stubborn","ambitious"],"answer":"diligent"},
  {"type":"ant","options":["lazy","foolish","weak","slow"],"answer":"lazy"},
  {"type":"cloze","prompt":"Years of ___ practice, not luck, made her the best violinist in the school.","options":["assiduous","occasional","halfhearted","accidental"],"answer":"assiduous"},
  {"type":"scen","prompt":"Which of these is assiduous?","options":["Reviewing flashcards every single night before bed","Cramming everything the morning of the test","Skipping studying because you did well last time"],"answer":"Reviewing flashcards every single night before bed"}]},
"skirmish-1": {"syns":["clash","scuffle"],"tip":"A skirmish is small and quick — bigger than an argument, smaller than a battle.","quiz":[
  {"type":"syn","options":["clash","war","debate","journey"],"answer":"clash"},
  {"type":"ant","options":["truce","battle","ambush","parade"],"answer":"truce"},
  {"type":"cloze","prompt":"A brief ___ broke out over the last slice of pizza, settled by rock-paper-scissors.","options":["skirmish","banquet","agreement","silence"],"answer":"skirmish"},
  {"type":"scen","prompt":"Which of these is a skirmish?","options":["Two players shoving briefly after a foul, then getting separated","Two armies fighting for months over a city","Two friends calmly trading snacks at lunch"],"answer":"Two players shoving briefly after a foul, then getting separated"}]},
"solitary-1": {"syns":["lone","single"],"tip":"A solitary person or thing is on its own — by choice or by chance.","quiz":[
  {"type":"syn","options":["lone","shy","quiet","bored"],"answer":"lone"},
  {"type":"ant","options":["sociable","silent","gloomy","distant"],"answer":"sociable"},
  {"type":"cloze","prompt":"A ___ lighthouse stood on the empty cliff, miles from the nearest town.","options":["solitary","crowded","noisy","invisible"],"answer":"solitary"},
  {"type":"scen","prompt":"Which of these is solitary?","options":["A single oak tree in the middle of a wide empty field","A forest packed with thousands of pines","A row of trees planted along a busy street"],"answer":"A single oak tree in the middle of a wide empty field"}]},
"aloof-1": {"syns":["distant","standoffish"],"tip":"Aloof people keep to themselves — it can look unfriendly even when it isn't.","quiz":[
  {"type":"syn","options":["distant","rude","shy","angry"],"answer":"distant"},
  {"type":"ant","options":["friendly","loud","funny","brave"],"answer":"friendly"},
  {"type":"cloze","prompt":"The new cat stayed ___, watching us from the top shelf instead of coming to play.","options":["aloof","playful","asleep","hungry"],"answer":"aloof"},
  {"type":"scen","prompt":"Which of these is aloof?","options":["Standing apart at the party, answering questions with one word","Telling loud jokes at the center of the party","Nervously hoping someone will invite you to talk"],"answer":"Standing apart at the party, answering questions with one word"}]},
"adhere-1": {"syns":["follow","stick to"],"tip":"You adhere TO rules or plans — think 'stick to them.'","quiz":[
  {"type":"syn","options":["obey","break","write","question"],"answer":"obey"},
  {"type":"ant","options":["break","obey","copy","read"],"answer":"break"},
  {"type":"cloze","prompt":"Every swimmer must ___ to the pool rules, especially 'no running on the wet deck.'","options":["adhere","object","wave","race"],"answer":"adhere"},
  {"type":"scen","prompt":"Which of these is adhering to a rule?","options":["Wearing your helmet every ride because it's the family rule","Skipping the helmet when parents aren't watching","Writing new bike rules for your little brother"],"answer":"Wearing your helmet every ride because it's the family rule"}]},
"adhere-2": {"syns":["stick","cling"],"tip":"Tape, glue, and stickers adhere — they grab a surface and stay.","quiz":[
  {"type":"syn","options":["stick","fold","hang","wrap"],"answer":"stick"},
  {"type":"ant","options":["detach","attach","fold","stretch"],"answer":"detach"},
  {"type":"cloze","prompt":"Wet leaves ___ to the car windshield and wouldn't blow off even on the highway.","options":["adhere","crumble","migrate","vanish"],"answer":"adhere"},
  {"type":"scen","prompt":"Which of these is adhering?","options":["A sticker that won't come off the water bottle","A magnet sliding down the fridge door","A leaf blowing past the car window"],"answer":"A sticker that won't come off the water bottle"}]},
"arduous-1": {"syns":["exhausting","tough"],"tip":"Arduous tasks wear you out — long climbs, big projects, endless chores.","quiz":[
  {"type":"syn","options":["exhausting","impossible","boring","dangerous"],"answer":"exhausting"},
  {"type":"ant","options":["effortless","exciting","short","safe"],"answer":"effortless"},
  {"type":"cloze","prompt":"The ___ climb took nine hours, and our legs shook for the rest of the day.","options":["arduous","gentle","effortless","downhill"],"answer":"arduous"},
  {"type":"scen","prompt":"Which of these is arduous?","options":["Hauling firewood up the hill all afternoon","Napping in the hammock between two trees","Carrying one empty cup to the kitchen"],"answer":"Hauling firewood up the hill all afternoon"}]},
"affinity-1": {"syns":["fondness","natural pull"],"tip":"'An affinity FOR math' = it clicks with you naturally.","quiz":[
  {"type":"syn","options":["fondness","talent","fear","memory"],"answer":"fondness"},
  {"type":"ant","options":["dislike","skill","respect","patience"],"answer":"dislike"},
  {"type":"cloze","prompt":"Ever since she touched a piano, Zoe has had an ___ for music that nobody taught her.","options":["affinity","excuse","audition","allergy"],"answer":"affinity"},
  {"type":"scen","prompt":"Which of these shows an affinity?","options":["Feeling instantly at home the first time you try surfing","Practicing surfing for years until you finally like it","Watching surfing videos but never wanting to try"],"answer":"Feeling instantly at home the first time you try surfing"}]},
"acquaint-1": {"syns":["introduce","familiarize"],"tip":"Acquaint yourself WITH something new — the first-meeting stage of knowing.","quiz":[
  {"type":"syn","options":["introduce","remind","invite","impress"],"answer":"introduce"},
  {"type":"cloze","prompt":"Before the tournament, take an hour to ___ yourself with the new chessboard app.","options":["acquaint","exhaust","punish","compare"],"answer":"acquaint"},
  {"type":"scen","prompt":"Which of these is acquainting yourself?","options":["Walking every hallway of your new school before classes start","Rushing into class late without a map","Redecorating the old bedroom you know by heart"],"answer":"Walking every hallway of your new school before classes start"}]},
"succinct-1": {"syns":["brief","to the point"],"tip":"Succinct = short AND complete. Great for answers, summaries, and texts.","quiz":[
  {"type":"syn","options":["brief","quiet","smart","polite"],"answer":"brief"},
  {"type":"ant","options":["wordy","loud","rude","slow"],"answer":"wordy"},
  {"type":"cloze","prompt":"Her ___ book report said everything that mattered in just five sentences.","options":["succinct","endless","sloppy","confusing"],"answer":"succinct"},
  {"type":"scen","prompt":"Which answer is succinct?","options":["Answering 'We won 3-1, great game' when asked about the match","Describing the match goal by goal for twenty minutes","Refusing to say anything about the match"],"answer":"Answering 'We won 3-1, great game' when asked about the match"}]},
"reproach-1": {"syns":["scolding","blame"],"tip":"A look of reproach says 'I'm disappointed in you' without a single word.","quiz":[
  {"type":"syn","options":["scolding","punishment","warning","apology"],"answer":"scolding"},
  {"type":"ant","options":["praise","whisper","shrug","excuse"],"answer":"praise"},
  {"type":"cloze","prompt":"Mom didn't yell — one long look of ___ was enough to make us clean up.","options":["reproach","delight","approval","surprise"],"answer":"reproach"},
  {"type":"scen","prompt":"Which of these is a reproach?","options":["A teacher slowly shaking her head when you pass notes","A teacher clapping when you answer correctly","A teacher yawning during silent reading"],"answer":"A teacher slowly shaking her head when you pass notes"}]},
"catastrophe-1": {"syns":["disaster","calamity"],"tip":"Bigger than a problem — a catastrophe wrecks things. Don't use it for spilled juice!","quiz":[
  {"type":"syn","options":["disaster","accident","storm","mystery"],"answer":"disaster"},
  {"type":"ant","options":["miracle","drought","rescue","season"],"answer":"miracle"},
  {"type":"cloze","prompt":"The flood was a ___ that left half the town without homes.","options":["catastrophe","nuisance","celebration","rumor"],"answer":"catastrophe"},
  {"type":"scen","prompt":"Which of these is a catastrophe?","options":["An earthquake flattening the city center","Spilling juice on the kitchen counter","A quick rain shower during recess"],"answer":"An earthquake flattening the city center"}]},
"simultaneous-1": {"syns":["at the same time","synchronized"],"tip":"'Simul' = same — simultaneous events overlap in time exactly.","quiz":[
  {"type":"syn","options":["synchronized","repeated","quick","similar"],"answer":"synchronized"},
  {"type":"cloze","prompt":"The ___ fireworks and drumroll made the finale twice as thrilling.","options":["simultaneous","occasional","distant","identical"],"answer":"simultaneous"},
  {"type":"scen","prompt":"Which of these is simultaneous?","options":["Both goalies diving at the exact same moment","One goalie diving right after the other","Two goalies who look exactly alike"],"answer":"Both goalies diving at the exact same moment"}]},
"asunder-1": {"syns":["apart","to pieces"],"tip":"An old-fashioned word — storms tear ships asunder in adventure books.","quiz":[
  {"type":"syn","options":["apart","around","away","aside"],"answer":"apart"},
  {"type":"ant","options":["together","beneath","backward","nearby"],"answer":"together"},
  {"type":"cloze","prompt":"The old flag was torn ___ by the hurricane winds.","options":["asunder","aside","upward","shut"],"answer":"asunder"},
  {"type":"scen","prompt":"Which of these was torn asunder?","options":["A kite ripped into three pieces by the storm","A kite folded neatly into a drawer","A kite stuck high in a tree in one piece"],"answer":"A kite ripped into three pieces by the storm"}]},
"brusque-1": {"syns":["curt","short"],"tip":"A brusque reply isn't mean words — it's the cold, clipped way they're said.","quiz":[
  {"type":"syn","options":["curt","cruel","honest","loud"],"answer":"curt"},
  {"type":"ant","options":["friendly","quick","quiet","careful"],"answer":"friendly"},
  {"type":"cloze","prompt":"'Busy. Come back later,' was the shopkeeper's ___ answer.","options":["brusque","cheerful","detailed","welcoming"],"answer":"brusque"},
  {"type":"scen","prompt":"Which of these is brusque?","options":["Replying 'Fine.' and walking off mid-conversation","Explaining kindly that you're too busy to talk","Chatting for an hour about your day"],"answer":"Replying 'Fine.' and walking off mid-conversation"}]},
"audacity-1": {"syns":["nerve","cheek"],"tip":"'The audacity!' = shocked at someone's bold rudeness.","quiz":[
  {"type":"syn","options":["nerve","anger","noise","laziness"],"answer":"nerve"},
  {"type":"cloze","prompt":"He had the ___ to ask for extra dessert after criticizing the entire dinner.","options":["audacity","patience","manners","wisdom"],"answer":"audacity"},
  {"type":"scen","prompt":"Which of these shows audacity (the rude kind)?","options":["Cutting the whole lunch line and demanding the last pizza slice","Politely asking if anyone minds you going ahead","Waiting quietly at the end of the line"],"answer":"Cutting the whole lunch line and demanding the last pizza slice"}]},
"audacity-2": {"syns":["boldness","daring"],"tip":"The same word can be a compliment — explorers and inventors have audacity.","quiz":[
  {"type":"syn","options":["boldness","luck","strength","speed"],"answer":"boldness"},
  {"type":"ant","options":["caution","courage","skill","silence"],"answer":"caution"},
  {"type":"cloze","prompt":"Nobody else dared to try it — launching a homemade raft across the bay took real ___.","options":["audacity","patience","teamwork","humor"],"answer":"audacity"},
  {"type":"scen","prompt":"Which of these shows audacity (the daring kind)?","options":["Signing up first for the terrifying new roller coaster","Riding the carousel you've ridden a hundred times","Watching others ride while holding the snacks"],"answer":"Signing up first for the terrifying new roller coaster"}]},
"seldom-1": {"syns":["rarely","hardly ever"],"tip":"Seldom sits before the verb: 'I seldom cry.' A fancy 'rarely.'","quiz":[
  {"type":"syn","options":["rarely","never","sometimes","quietly"],"answer":"rarely"},
  {"type":"ant","options":["often","once","forever","early"],"answer":"often"},
  {"type":"cloze","prompt":"Grandpa ___ uses his phone — maybe twice a year, for birthdays.","options":["seldom","always","never","constantly"],"answer":"seldom"},
  {"type":"scen","prompt":"Which of these happens seldom?","options":["Eating dessert only on special holidays","Eating dessert after every single dinner","Never once tasting dessert in your life"],"answer":"Eating dessert only on special holidays"}]},
"aptitude-1": {"syns":["talent","knack"],"tip":"Aptitude = natural ability, there before the lessons start. (Don't mix it up with 'attitude'!)","quiz":[
  {"type":"syn","options":["talent","attitude","effort","interest"],"answer":"talent"},
  {"type":"cloze","prompt":"Even before lessons, Ben showed a natural ___ for juggling.","options":["aptitude","attitude","allergy","apology"],"answer":"aptitude"},
  {"type":"scen","prompt":"Which of these shows an aptitude?","options":["Solving tricky puzzles easily the first time you try","Getting better at puzzles after months of practice","Collecting puzzles but never opening the boxes"],"answer":"Solving tricky puzzles easily the first time you try"}]},
"apprehensive-1": {"syns":["nervous","worried"],"tip":"Apprehensive = worried about what's COMING — tests, storms, first days.","quiz":[
  {"type":"syn","options":["nervous","terrified","careful","excited"],"answer":"nervous"},
  {"type":"ant","options":["confident","scared","sleepy","serious"],"answer":"confident"},
  {"type":"cloze","prompt":"She felt ___ the night before the championship, imagining everything that could go wrong.","options":["apprehensive","relaxed","proud","thrilled"],"answer":"apprehensive"},
  {"type":"scen","prompt":"Which of these is apprehensive?","options":["Pacing before your speech, sure you'll forget the words","Bouncing with excitement to give your speech","Forgetting you even signed up for a speech"],"answer":"Pacing before your speech, sure you'll forget the words"}]},
"apt-1": {"syns":["fitting","suitable"],"tip":"An apt name or comment fits the moment perfectly.","quiz":[
  {"type":"syn","options":["fitting","clever","short","kind"],"answer":"fitting"},
  {"type":"ant","options":["unsuitable","boring","long","mean"],"answer":"unsuitable"},
  {"type":"cloze","prompt":"'Lightning' is an ___ name for the fastest horse at the ranch.","options":["apt","odd","ancient","embarrassing"],"answer":"apt"},
  {"type":"scen","prompt":"Which comment is apt?","options":["Saying 'great save!' right after the goalie's diving catch","Saying 'great save!' when the goalie misses the ball","Saying 'great save!' during the halftime snack break"],"answer":"Saying 'great save!' right after the goalie's diving catch"}]},
"apt-2": {"syns":["quick to learn","sharp"],"tip":"An apt student picks things up fast — same spelling, different meaning!","quiz":[
  {"type":"syn","options":["sharp","obedient","patient","cheerful"],"answer":"sharp"},
  {"type":"cloze","prompt":"The ___ new student mastered the chess rules in a single afternoon.","options":["apt","forgetful","reluctant","sleepy"],"answer":"apt"},
  {"type":"scen","prompt":"Which of these is an apt learner?","options":["Learning the dance routine after watching it just twice","Learning the routine after a year of daily practice","Refusing to try the routine at all"],"answer":"Learning the dance routine after watching it just twice"}]},
"assortment-1": {"syns":["variety","mix"],"tip":"An assortment box has different kinds — not many copies of one thing.","quiz":[
  {"type":"syn","options":["variety","pile","amount","collection"],"answer":"variety"},
  {"type":"cloze","prompt":"The gift box held an ___ of chocolates — dark, milk, caramel, and mint.","options":["assortment","shortage","recipe","argument"],"answer":"assortment"},
  {"type":"scen","prompt":"Which of these is an assortment?","options":["A tray with cookies, brownies, and three kinds of candy","A tray stacked with twenty identical plain cookies","An empty tray waiting to be filled"],"answer":"A tray with cookies, brownies, and three kinds of candy"}]}
};
