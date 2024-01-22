// In Javascript Class Is a BluePrint of Object Created With The Constructor Function
// If You Want To Create Multiple Object With The Same Property or Method Then Go For Class
// It Was Intuduced in es6

// Class Name Start with Capital Letter is a Good Practise
class Master {
  // static Method
  static MobileName = "Redmi Note 10 Pro";
  //Class Field
  flightName = "Ice Berge";
  //Private Field Only Accessable In Class Not In Instance
  #FlightColor = "Blue";
  //Saying Developer Don't Touch The Field using The _ Symbol
  _DontTouchMe = "Restricted Field";
  //What is Constructor Function
  // constructor function is a Special Type Of Function It Create And Initialize
  // a Object instance of a class
  constructor(StudentName, StudentSkill, StudentLocality) {
    this.StudentName = StudentName;
    this.StudentSkill = StudentSkill;
    this.StudentLocality = StudentLocality;
  }
  get GetStudent() {
    const forReturn = `${this.StudentName}-${this.StudentSkill}-${this.StudentLocality}`;
  }

  /**
   * @param {string} Name
   */
  set RenameStudent(Name) {
    this.StudentName = Name;
  }
  //Method For Private Class Field
  accessPrivate() {
    this.#FlightColor = "Orange";
    return this.#FlightColor;
  }
}

//Creating a New Instance
// In Javascript Instance is an Object Created With The Constructor Function Followed By The New Keyword
// New Keyword Create A New Object
const PlayerOne = new Master("Serpentes", "Rusher", "Pochinki");
// console.log(PlayerOne);
PlayerOne.RenameStudent = "Rengoku Kyojiro";
// Below Code Throw Error Like (Private Field Only Available in Class)
// console.log(PlayerOne.#FlightColor);

// Accessing The Private Field Via Method's It will Work
/* */
// console.log(PlayerOne.accessPrivate());

// Using This _ Symbol Allow Developer To Access And Change Property
/* */

/* */
// Class Extends
/* */

class PlayerName {
  constructor(gameName, playerName) {
    this.gameName = gameName;
    this.playerName = playerName;
  }
}

class PlayerDetail extends PlayerName {
  constructor(gameName, playerName, health, lives) {
    super(gameName, playerName);
    this.health = health;
    this.lives = lives;
  }
}

const PlayerTwo = new PlayerDetail(
  "DEMON SLAYER",
  "RENGOKU KYOJURO",
  "100%",
  5
);
