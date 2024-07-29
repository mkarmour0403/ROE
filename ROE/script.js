document.addEventListener ('DOMContentLoaded'), function() {
    const classDescriptions = {
        adventurer: {
            title: "Adventurer",
            description: "An Adventurer does not have specific talents, abilities or penalties in any particular skills. Adventurers are one of the most versatile classes for those who wish to learn a wide variety of skills, but they lack the bonuses of more specific classes. Adventurers are equally adept at martial skills, spell skills, and other skills, as their race is the only modifier to their talents and skills.",
            hpMpPerLevel: "5/5",
            startingSkills: "None",
            attributeModifiers: "None"
        },
        alchemist: {
            title: "Alchemist",
            description: "The Alchemist is naturally adept in the arts of Alchemy, making potions, elixirs and other concoctions. Many Alchemists are skilled in gathering at least one type of component to use for their work. Alchemists tend to be less adept at martial skills than they are at magical skills, but they are not particularly well-suited for either.",
            hpMpPerLevel: "5/5",
            startingSkills: "30 Alchemy, 10 Gathering Skill",
            attributeModifiers: "-5 Strength, +5 Intelligence"
        },
        archer: {
            title: "Archer",
            description: "Archers are a class dedicated towards perfecting the use of a bow through the Archery skill. Archers are highly skilled in Archery, but find melee styles more difficult to learn than most others.",
            hpMpPerLevel: "6/4",
            startingSkills: "30 Archery, 10 Focus",
            attributeModifiers: "-5 Intelligence, +5 Dexterity"
        },
        armorsmith: {
            title: "Armorsmith",
            description: "Becoming a master Armorsmith takes a long time and a lot of hard work. Armorsmiths tend to be strong individuals that fight well with the hammers that they use in their art, but make weak spellcasters. As specialists of their craft, they have the easiest time learning Armorsmithing of any profession, and some ease with Tailoring and Weaponsmithing, both of which share some techniques with Armorsmithing.",
            hpMpPerLevel: "5/5",
            startingSkills: "30 Armorsmith, 5 Hammer, 5 Mining",
            attributeModifiers: "+5 Strength, -5 Dexterity"
        },
        armsman: {
            title: "Armsman",
            description: "An Armsman is a warrior that has trained primarily in the use of Polearms. They perform adequately with ranged weapons, but make poor spellcasters. Armsmen are often trained to wear a goodly amount of armor, as they participate in mainly melee combat.",
            hpMpPerLevel: "7/3",
            startingSkills: "30 Polearm, 20 Armor",
            attributeModifiers: "+5 Strength, -5 Intelligence"
        },
        artificer: {
            title: "Artificer",
            description: "Artificers are craftsmen that are highly specialized in Spellcrafting and Lore. Artificers are equally adept at all of the Crafting and Gathering Skills.",
            hpMpPerLevel: "3/7",
            startingSkills: "20 Spellcraft, 15 Lore, 10 Spell School, 10 Craft Skill",
            attributeModifiers: "+10 Intelligence, -10 Strength"
        },
        assassin: {
            title: "Assassin",
            description: "Hired to take a life in the darkness of the night, an Assassin may kill for money, revenge, or simply for the thrill. They fight well with Daggers and Swords, and few approach their skill at the art of Dual Weapon use.",
            hpMpPerLevel: "7/3",
            startingSkills: "25 Dagger, 20 Dual Weapon, 15 Ranged Weapon",
            attributeModifiers: "+5 Dexterity, -5 Intelligence"
        },
        axeman: {
            title: "Axeman",
            description: "An axe specialist is known as an Axeman, and in some lands they are employed as executioners. Axemen tend to be poor spellcasters, concentrating mostly on melee combat. The Armor skill may be of use to an aspiring Axeman.",
            hpMpPerLevel: "7/3",
            startingSkills: "30 Axe, 20 Armor",
            attributeModifiers: "+5 Strength, -5 Intelligence"
        },
        bandit: {
            title: "Bandit",
            description: "In every society there are those willing to prey upon the weak. The Bandit favors weapons and Worldly skills over spells.",
            hpMpPerLevel: "6/4",
            startingSkills: "20 Melee Weapon, 20 Ranged Weapon",
            attributeModifiers: "None"
        },
        barbarian: {
            title: "Barbarian",
            description: "Somewhat primitive and distrustful of magic, Barbarians live on the outskirts of society, trusting that their strength will carry them through their troubles. They are fantastic Dual Weapon warriors, though they are terrible spellcasters. Barbarians find it easy to live off of the land away from society, and tend to be skilled at camping.",
            hpMpPerLevel: "8/2",
            startingSkills: "30 Melee (no polearm), 10 Sling or Thrown, 10 Camping",
            attributeModifiers: "+10 Constitution, +5 Strength, -5 Dexterity, -10 Intelligence"
        },
        barber: {
            title: "Barber",
            description: "A Barber is a medieval physician, skilled in the use of the dagger as well as the abilities to heal through mundane means. First Aid, Herbalism, and Alchemy may be useful to an aspiring Barber.",
            hpMpPerLevel: "5/5",
            startingSkills: "30 First Aid, 10 Herbalism",
            attributeModifiers: "None"
        },
        bard: {
            title: "Bard",
            description: "When it is time for tales to be told of the daring of heroes and the despicable acts of villains, it is the Bard that creates and spreads those tales. Bards have a strong affinity towards Bardic magic and are considered to be the most magically oriented of the Bardic magic casters.",
            hpMpPerLevel: "3/7",
            startingSkills: "30 Bardic, 20 Spellcraft, 10 Focus",
            attributeModifiers: "+5 Dexterity, +5 Intelligence, -5 Strength, -5 Constitution"
        },
        berserker: {
            title: "Berserker",
            description: "Few melee warriors can rival the destruction wrought by an angry Berserker. They eschew ranged weapons and magic as tools for the weak, using great hammers and axes to cleave through their foes. Fine crafts, such as calligraphy, are beyond the average Berserker.",
            hpMpPerLevel: "8/2",
            startingSkills: "35 Melee Weapon, 10 Armor",
            attributeModifiers: "+10 Strength, +5 Constitution, -5 Dexterity, -10 Intelligence"
        },
        blacksmith: {
            title: "Blacksmith",
            description: "A Blacksmith is a crafter that works primarily with metal objects. They make poor spellcasters, but fight adequately with a hammer. Blacksmiths excel at Armorsmithing, Fletching, and Weaponsmithing and have a knack for Traps and Pick Locks.",
            hpMpPerLevel: "6/4",
            startingSkills: "20 Armorsmith, 20 Weaponsmith, 5 Hammer, 5 Mining",
            attributeModifiers: "+5 Strength, -5 Dexterity"
        },
        bombardier: {
            title: "Bombardier",
            description: "A Bombardier is one who has a natural aptitude for Thrown weapons. They are adept at Armor and Shield, and make poor spellcasters. They are naturally talented at Weaponsmithing, as they often learn to make their own weapons.",
            hpMpPerLevel: "7/3",
            startingSkills: "30 Thrown, 10 Focus",
            attributeModifiers: "+5 Dexterity, -5 Intelligence"
        },
        bowyer: {
            title: "Bowyer",
            description: "Bowyers excel in Fletching, and are known to make some of the best ranged weapons in all of Vormis. Bowyers tend to focus more on making weapons than ammunition, but they have the ability to make both with the right materials. Bowyers have a natural aptitude for Archery and Crossbow.",
            hpMpPerLevel: "5/5",
            startingSkills: "30 Fletching, 5 Ranged (no Thrown)",
            attributeModifiers: "+5 Dexterity, -5 Intelligence"
        },
        brawler: {
            title: "Brawler",
            description: "Brawlers are known for their ferocity and for their great Strength and Constitution. They are naturally adept at Unarmed combat. They are not as skilled at Armor and Shield as many other fighters, but they often train in Dual Weapon.",
            hpMpPerLevel: "8/2",
            startingSkills: "30 Unarmed, 10 Dual Weapon, 10 Armor",
            attributeModifiers: "+10 Constitution, +5 Strength, -5 Dexterity, -10 Intelligence"
        },
        brewer: {
            title: "Brewer",
            description: "A Brewer is one who makes ales and other brewed and fermented drinks. The Brewer's specialty is in Alchemy. They have a natural aptitude for Herbalism. Brewers are in some ways similar to Vintners who are known for making wines, rather than malt beverages.",
            hpMpPerLevel: "5/5",
            startingSkills: "20 Alchemy, 20 Herbalism",
            attributeModifiers: "+10 Constitution, -5 Intelligence, -5 Dexterity"
        },
        cabalist: {
            title: "Cabalist",
            description: "Cabalists have a reputation for being focused only on the summoning or creation of creatures, mainly of the Necromancy and Summoning schools of magic. They are generally weak in physical combat. Cabalists have a natural talent for Spellcraft and Focus which are both important secondary skills to a spellcaster. Cabalists often believe that summoned creatures, be they undead or other kinds, are meant to do the summoner's bidding, and that those who do not take advantage of the powers of summoning are somewhat foolish.",
            hpMpPerLevel: "3/7",
            startingSkills: "20 Necromancy, 20 Summoning, 10 Spellcraft, 10 Focus",
            attributeModifiers: "+10 Intelligence, -5 Constitution, -5 Strength"
        },
        calligrapher: {
            title: "Calligrapher",
            description: "Calligraphers are those who have devoted their lives to the study of Calligraphy. They have a natural talent for learning languages, especially the common tongue, Praxic. They learn the schools of Magic with less effort than fighters, but more with more than many spellcasters. Calligraphers are fairly weak in the physical aspects of combat.",
            hpMpPerLevel: "3/7",
            startingSkills: "30 Calligraphy, 10 Spell School, 10 Gathering Skill",
            attributeModifiers: "+10 Intelligence, -10 Strength"
        },
        cavalier: {
            title: "Cavalier",
            description: "Cavaliers, like Swashbucklers, are known for their talents in the use of Swords, but are generally considered to be more like a Warrior in nature. Cavaliers are more oriented towards fighting than Swashbucklers, and learn general Martial Skills easily.",
            hpMpPerLevel: "7/3",
            startingSkills: "25 Armor, 25 Shield, 15 Melee Weapon",
            attributeModifiers: "+5 Strength, -5 Intelligence"
        },
        cleric: {
            title: "Cleric",
            description: "A Cleric is one who has devoted his or her time to learning to heal, much as a Healer or Friar, but who also has a natural talent towards some melee weapons. Clerics are most often devoted to the service of Erosis, though service to Erosis is not a requirement to become a Cleric. Many Clerics have a reputation for healing those who come to them in need of healing in exchange for small gifts or tokens of appreciation.",
            hpMpPerLevel: "4/6",
            startingSkills: "15 Shamanic, 15 First Aid, 10 Melee Weapon",
            attributeModifiers: "+5 Intelligence, -5 Dexterity"
        },
        commoner: {
            title: "Commoner",
            description: "A Commoner is an average person that can be found anywhere in Vormis. Unlike Adventurers or specific types of Adventurers, Commoners are very limited in the skills for which they have a natural talent. Commoners do have talents in Crafting skills, but little else.",
            hpMpPerLevel: "5/5",
            startingSkills: "20 Craft Skill, 20 Gathering Skill",
            attributeModifiers: "None"
        },
        conjurer: {
            title: "Conjurer",
            description: "Those who specialize their learning into the Conjuring school of magic may become Conjurers. Conjurers, like most strict spellcasters, can learn Focus and Spellcraft with a fair amount of ease, but are very slow to pick up Martial skills. Conjurers are not particularly good at Crafting skills, as they can usually find a way to conjure what they need, rather than having to physically create an item. Lore is a secondary skill that a Conjurer might consider useful.",
            hpMpPerLevel: "4/6",
            startingSkills: "30 Conjuring, 20 Spellcraft, 10 Focus",
            attributeModifiers: "+5 Intelligence, -5 Dexterity"
        },
        crafter: {
            title: "Crafter",
            description: "Crafters are renowned for their attention to detail in crafting almost anything. A Crafter can become skilled in any number of Crafting skills, and most Crafters have some skill in being able to find components to use through Gathering skills. Crafters tend to be good at Bargaining, as they often sell their works to others.",
            hpMpPerLevel: "5/5",
            startingSkills: "30 Craft Skill, 30 2nd Craft Skill",
            attributeModifiers: "+5 Intelligence, -5 Strength"
        },
        crossbowman: {
            title: "Crossbowman",
            description: "Crossbowmen are known for their talents in using Crossbows. With study, they can attain incredible accuracy and range with almost any type of Crossbow and ammunition. They excel in Fletching, and are sometimes skilled in weaponsmithing, owing to their relatively high strength.",
            hpMpPerLevel: "6/4",
            startingSkills: "30 Crossbow, 10 Focus",
            attributeModifiers: "+5 Dexterity, -5 Intelligence"
        },
        darkPaladin: {
            title: "Dark Paladin",
            description: "A Dark Paladin is a warrior-mage who has specialized his or her magical talents into Necromancy and who wishes to follow the way of Sashos. According to myth, Sashos was the creator of the Necromantic school, though some will argue otherwise. Dark Paladins directly oppose Paladins, who follow the path of Erosis. Dark Paladins can learn Necromancy with ease, but other schools are more difficult, especially Shamanic magic.",
            hpMpPerLevel: "6/4",
            startingSkills: "20 Armor, 20 Melee Weapon, 10 Necromancy",
            attributeModifiers: "+5 Strength, -5 Dexterity"
        },
        demiurge: {
            title: "Demiurge",
            description: "A Demiurge is a warrior-mage who has specialized his or her magical talents into Conjuration magic. They tend to be heavily armored melee combatants that favor hammers, and use their powers to enhance their weapons and armor. Excelling at both, they must balance furthering their abilities in melee combat with advancing their magical skills. Demiurges tend to be rather poor at ranged combat, having little time to study such things, and find it difficult to learn schools other than Conjuring, especially the opposition school of Illusion magic.",
            hpMpPerLevel: "6/4",
            startingSkills: "20 Armor, 20 Melee Weapon, 10 Conjuring",
            attributeModifiers: "+5 Strength, -5 Dexterity"
        },
        diabolist: {
            title: "Diabolist",
            description: "A Diabolist is a warrior-mage who has specialized his or her magical talents into Summoning. They tend to be heavily armored melee combatants that often use daggers, and use their powers to call creatures to fight alongside them. Excelling at both, they must balance furthering their abilities in melee combat with advancing their magical skills. Diabolists tend to be rather poor at ranged combat, having little time to study such things, and find it difficult to learn schools other than Summoning, especially the opposition school of Bardic magic.",
            hpMpPerLevel: "6/4",
            startingSkills: "20 Armor, 20 Melee Weapon, 10 Summoning",
            attributeModifiers: "+5 Strength, -5 Dexterity"
        }
    }

    // Add more class objects here following the same structure

    // Display character class information in a table
    const table = document.createElement('table');
    table.classList.add('class-table');

    // Create table header row
    const headerRow = document.createElement('tr');
    const headers = ['Class', 'Description', 'HP/MP per Level', 'Starting Skills', 'Attribute Modifiers'];
    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create table rows for each character class
    for (const classKey in characterClasses) {
        const classData = characterClasses[classKey];
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = classData.title;
        row.appendChild(titleCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = classData.description;
        row.appendChild(descriptionCell);

        const hpMpCell = document.createElement('td');
        hpMpCell.textContent = classData.hpMpPerLevel;
        row.appendChild(hpMpCell);

        const skillsCell = document.createElement('td');
        skillsCell.textContent = classData.startingSkills;
        row.appendChild(skillsCell);

        const modifiersCell = document.createElement('td');
        modifiersCell.textContent = classData.attributeModifiers;
        row.appendChild(modifiersCell);

        table.appendChild(row);
    }

    // Add the table to the DOM
    document.body.appendChild(table);
}
