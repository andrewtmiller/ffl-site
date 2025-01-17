/*   STEP 1   */
export const leagueID = "975220684328685568"; // your league ID
export const leagueName = "League of Ordinary Gentlemen"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

export const switchYear = 2023;

/*   STEP 2   */
export const homepageText = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    managerID: "470636575349272576", // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    name: "Bruce",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    favoriteTeam: "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    espnID: "A4263CAD-66DF-44CC-B831-B5B81B178250",
    // rival: {
    //   name: "Rival", // Can be anything (usually your rival's name)
    //   link: 6, // manager array number within this array, or null to link back to all managers page
    //   image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    // },
  },
  {
    managerID: "861349681626734592",
    name: "Brent",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg",
    favoriteTeam: "car",
    espnID: "539D8722-D0C4-4BF9-95CC-6837FFC2A143",
  },
  {
    managerID: "994351341084467200",
    name: "Jordan",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg",
    favoriteTeam: "car",
    espnID: "DD43B98D-43D9-4E00-9EB7-DD8FA6F3E97B",
  },
  {
    managerID: "994352692539576320",
    name: "Jacob",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg",
    favoriteTeam: "pit",
    espnID: "02099D11-416B-45DC-B45F-53FAC09FAF41",
  },
  {
    managerID: "994353507526365184",
    name: "Andrew",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg",
    favoriteTeam: "car",
    espnID: "7321408A-024B-428E-960E-61ED8A964E71",
  },
  {
    managerID: "994353814108995584",
    name: "Steven",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg",
    favoriteTeam: "nyj",
    espnID: "55A0FD56-8BF6-4300-A0FD-568BF6E30022",
  },
  {
    managerID: "994354537852932096",
    name: "Jamaal",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg",
    favoriteTeam: "kc",
    espnID: "2223A17A-2AC0-4132-A3A1-7A2AC0A13248",
  },
  {
    managerID: "994751508946280448",
    name: "Nathan",
    bio: "Lorem ipsum...",
    photo: "/managers/name.jpg",
    favoriteTeam: "was",
    espnID: "E1164B90-529B-4DA8-90F2-C13AD32BD82E",
  },
];
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    