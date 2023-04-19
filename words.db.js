const wordList = [
  {
    flag: "https://flagpedia.net/data/flags/w580/ar.png",
    answer: "argentina",
    hint: "This country is known for tango music and has the highest mountain range in the world outside of Asia.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    answer: "australia",
    hint: "This country is home to the Great Barrier Reef, the world’s largest coral reef system.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/be.png",
    answer: "belgium",
    hint: "This country is known for its delicious chocolates, waffles, and beer.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/br.png",
    answer: "brazil",
    hint: "This country is known for its Carnival festival and is home to the Amazon rainforest, which is the largest rainforest in the world.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    answer: "canada",
    hint: "This country is known for its vast wilderness areas and is home to the famous Niagara Falls.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/cn.png",
    answer: "china",
    hint: "This country is the most populous country in the world and is known for its Great Wall and Forbidden City.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/co.png",
    answer: "colombia",
    hint: "This country is known for its coffee and emeralds, and is home to the Amazon rainforest and the Andes mountain range.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/cr.png",
    answer: "costa rica",
    hint: "This country is known for its rainforests and beaches, and is home to over 500,000 different species of plants and animals.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/hr.png",
    answer: "croatia",
    hint: "This country is known for its beautiful coastline on the Adriatic Sea, and has many historic cities and national parks.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/cz.png",
    answer: "czech republic",
    hint: "This country is known for its beautiful architecture, castles, and beer.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/dk.png",
    answer: "denmark",
    hint: "This country is known for its beautiful countryside, coastline, and historic landmarks.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/eg.png",
    answer: "egypt",
    hint: "This country is known for its ancient pyramids and the Nile River, which is the longest river in the world.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/fr.png",
    answer: "france",
    hint: "This country is known for its beautiful cities, world-class cuisine, and famous landmarks such as the Eiffel Tower.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/de.png",
    answer: "germany",
    hint: "This country is known for its beer, sausages, and cars, and is home to the largest economy in Europe.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/us.png",
    answer: "united states",
    hint: "This country is known for its diverse culture, fast food, and famous landmarks such as the Statue of Liberty.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    answer: "australia",
    hint: "This country is known for its vast deserts, unique wildlife, and laid-back culture.",
  },
  {
    flag: "https://flagpedia.net/data/flags/w580/jp.png",
    answer: "japan",
    hint: "This country is known for its advanced technology, delicious food, and unique cultural traditions.",
  },
  {
    flag: "https://flagcdn.com/w320/ng.png",
    hint: "This country is the most populous in Africa and is known for its diverse culture, music, and Nollywood films.",
    answer: "nigeria",
  },
  {
    flag: "https://flagcdn.com/w320/jp.png",
    hint: "This country is an island nation known for its high-tech industry, traditional arts such as kabuki and geisha, and delicious cuisine like sushi and ramen.",
    answer: "japan",
  },
  {
    flag: "https://flagcdn.com/w320/mx.png",
    hint: "This country is known for its vibrant culture, ancient ruins such as Chichen Itza, and delicious cuisine like tacos and guacamole.",
    answer: "mexico",
  },
  {
    flag: "https://flagcdn.com/w320/ru.png",
    hint: "This country is the largest in the world by land area and is known for its rich history, literature, and stunning architecture like the onion-domed churches in Moscow.",
    answer: "russia",
  },
  {
    flag: "https://flagcdn.com/w320/gb.png",
    hint: "This country is known for its long history and royal family, as well as its popular tea-drinking culture.",
    answer: "united kingdom",
  },
  {
    flag: "https://flagcdn.com/w320/kr.png",
    hint: "This country is known for its high-tech industry, pop culture like K-Pop and K-Dramas, and delicious cuisine like kimchi and bulgogi.",
    answer: "south korea",
  },
  {
    flag: "https://flagcdn.com/w320/fr.png",
    hint: "This country is known for its fashion industry, art and culture, and delicious cuisine like croissants and escargot.",
    answer: "france",
  },
  {
    flag: "https://flagcdn.com/w320/de.png",
    hint: "This country is known for its engineering and technological advancements, as well as its popular beer and sausages.",
    answer: "germany",
  },
  {
    flag: "https://flagcdn.com/w320/es.png",
    hint: "This country is known for its rich history and culture, flamenco dancing, and delicious cuisine like paella and tapas.",
    answer: "spain",
  },
  {
    flag: "https://flagcdn.com/w320/id.png",
    hint: "This country is the largest island nation in the world and is known for its diverse culture, beautiful beaches, and delicious cuisine like nasi goreng and satay.",
    answer: "indonesia",
  },
  {
    flag: "https://flagcdn.com/w320/it.png",
    hint: "This country is known for its stunning art and architecture, fashion industry, and delicious cuisine like pizza and pasta.",
    answer: "italy",
  },
  {
    flag: "https://flagcdn.com/w320/pk.png",
    hint: "This country is the fifth-most populous in the world and is known for its diverse culture, ancient landmarks like the Badshahi Mosque, and delicious cuisine like biryani and kebabs.",
    answer: "pakistan",
  },
  {
    flag: "https://flagcdn.com/w320/bd.png",
    hint: "This country is the eighth-most populous in the world and is known for its natural beauty, rich culture, and delicious cuisine like fish curry and biryani.",
    answer: "bangladesh",
  },
  {
    flag: "https://flagcdn.com/w320/ng.png",
    hint: "This country is the most populous in Africa and is known for its diverse culture, music, and Nollywood films.",
    answer: "nigeria",
  },
  {
    flag: "https://flagcdn.com/w320/ph.png",
    hint: "This country is an archipelago of over 7,000 islands and is known for its stunning beaches, diverse culture, and delicious cuisine like adobo and lechon.",
    answer: "philippines",
  },
  {
    flag: "https://flagcdn.com/w320/eg.png",
    hint: "This country is known for its ancient history and landmarks like the Pyramids of Giza, as well as its delicious cuisine like koshari and falafel.",
    answer: "egypt",
  },
  {
    flag: "https://flagcdn.com/w320/vn.png",
    hint: "This country is known for its stunning natural beauty, rich culture and history, and delicious cuisine like pho and banh mi.",
    answer: "vietnam",
  },
  {
    flag: "https://flagcdn.com/w320/cd.png",
    hint: "This country is the second-largest in Africa by land area and is known for its diverse culture, music, and natural resources such as diamonds.",
    answer: "democratic republic of the congo",
  },
  {
    flag: "https://flagcdn.com/w320/tr.png",
    hint: "This country is located at the crossroads of Europe and Asia, and is known for its stunning landscapes, ancient ruins like Ephesus, and delicious cuisine like baklava and kebab.",
    answer: "turkey",
  },
  {
    flag: "https://flagcdn.com/w320/ir.png",
    hint: "This country is known for its rich history and culture, ancient landmarks like Persepolis, and delicious cuisine like kebab and tahchin.",
    answer: "iran",
  },
  {
    flag: "https://flagcdn.com/w320/dz.png",
    hint: "This country is the largest in Africa by land area and is known for its diverse culture, ancient landmarks like the Roman ruins at Timgad, and delicious cuisine like couscous and tagine.",
    answer: "algeria",
  },
  {
    flag: "https://flagcdn.com/w320/ug.png",
    hint: "This country is known for its stunning natural beauty, diverse wildlife like gorillas and chimpanzees, and delicious cuisine like matoke and groundnut soup.",
    answer: "uganda",
  },
  {
    flag: "https://flagcdn.com/w320/pl.png",
    hint: "This country is known for its rich history and culture, stunning architecture like the Wawel Castle in Krakow, and delicious cuisine like pierogi and kielbasa.",
    answer: "poland",
  },
  {
    flag: "https://flagcdn.com/w320/tn.png",
    hint: "This country is known for its rich history and culture, ancient ruins like the Amphitheatre of El Jem, and delicious cuisine like couscous and brik.",
    answer: "tunisia",
  },
  {
    flag: "https://flagcdn.com/w320/ma.png",
    hint: "This country is known for its rich history and culture, ancient landmarks like the Koutoubia Mosque, and delicious cuisine like tagine and couscous.",
    answer: "morocco",
  },
  {
    flag: "https://flagcdn.com/w320/uz.png",
    hint: "This country is known for its stunning Islamic architecture like the Registan in Samarkand, and delicious cuisine like plov and shashlik.",
    answer: "uzbekistan",
  },
  {
    flag: "https://flagcdn.com/w320/my.png",
    hint: "This country is known for its stunning natural beauty, diverse culture, and delicious cuisine like nasi lemak and satay.",
    answer: "malaysia",
  },
  {
    flag: "https://flagcdn.com/w320/pe.png",
    hint: "This country is known for its ancient landmarks like Machu Picchu, as well as its diverse culture and delicious cuisine like ceviche and anticuchos.",
    answer: "peru",
  },
  {
    flag: "https://flagcdn.com/w320/ve.png",
    hint: "This country is known for its stunning natural beauty, rich culture and history, and delicious cuisine like arepas and pabellon criollo.",
    answer: "venezuela",
  },
  {
    flag: "https://flagcdn.com/w320/sd.png",
    hint: "This country is the third-largest in Africa by land area and is known for its ancient pyramids like those at Meroë, and delicious cuisine like asida and ful medames.",
    answer: "sudan",
  },
  {
    flag: "https://flagcdn.com/w320/ua.png",
    hint: "This country is known for its stunning natural beauty, rich history and culture, and delicious cuisine like borscht and varenyky.",
    answer: "ukraine",
  },
];
export default wordList;
