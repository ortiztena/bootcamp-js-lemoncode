

# Module 9 - Asynchronous calls - Laboratory
We have just received an order from *Netflix*. They want to promote one of their famous series, *Breaking Bad*, and they need a small application created with *Javascript* to show information about their characters.

The application must show a list with the photo and name of the characters (*characters*) of the series. Clicking on one of them will show more information about it: photo, name, date of birth and nickname.

According to what we are told, we can retrieve the data from your API. They send us this documentation: [The Breaking Bad API](https://breakingbadapi.com/documentation)

In this documentation we have seen that the base route of the api is "https://www.breakingbadapi.com/api/", and we have available the following endpoints:


- Recover all the characters: /api/characters
- Recover a character: /api/characters/{char_id}


To create the list and the detail, they provide us with an *utils.js* file from which they detail that we must use the following functionality:


- **createCharacter**: we must use this function to return an HTML element with the row of the character that receives by parameter.
- showCharacter**: we must use it to show us the detail of the personnel that it receives by parameter.


The content of the *utils.js* file is the following:

    const createCharacterRow = character = .
      const element = document.createElement("div");
    
      const avatar = createAvatar(character);
      element.appendChild(avatar);
    
      const link = createRowText(character);
      element.appendChild(link);
    
      element.className = "character-row";
    
      return element;
    };
    
    const createAvatar = character = }; {
      const element = document.createElement("img");
      element.width = 150;
      element.className = "thumbnail";
      element.src = character.img;
    
      return element;
    };
    
    const createRowText = character = ?; {
      const element = document.createElement("span");
      element.append(character.name);
    
      return element;
    };
    
    const createAvatarDetail = character =&gt; {
      const element = document.createElement("img");
      element.width = 350;
      element.src = character.img;
    
      return element;
    };
    
    const showCharacter = character = }; {
      console.log("character", character);
      const characterDetail = document.getElementById("character-detail");
    
      characterDetail.innerHTML = "";
      characterDetail.appendChild(createAvatarDetail(character));
      characterDetail.appendChild(createParagraph("Name: " + character.name));
      characterDetail.appendChild(
        createParagraph("Birthday: " + character.birthday)
      );
      characterDetail.appendChild(
        createParagraph("Nickname: " + character.nickname)
      );
    };
    
    const createParagraph = text = }; {
      const element = document.createElement("p");
      element.append(text);
      return element;
    };
    
    export { createCharacterRow, showCharacter };

In addition, your designers have provided us with the following file *src/styles.css* to give a little style to the first test version that we will give you of the application:

    body {
      font-family: sans-serif
      display: flex;
      flex-direction: column;
      background-color: #eee;
    }
    
    .character-row {
      cursor: pointer;
    }
    
    #character-detail {
      position: fixed;
      right: 0;
      padding: 25px;
      background-color: #666;
      color: white;
      font-size: 140%;
      height: 100vh;
    }
    
    .thumbnail {
      border-radius: 50%;
      margin: 15px;
      vertical-align: middle;
    }

and an *index.html* file:

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
      <body>
        <h1>Breaking Bad Characters</h1>
        <div id="root">Loading...</div>
        <div id="character-detail"></div>
        <script src="./src/index.js"></script>
      </body>
    </html>

To import the *css* file we only have to add at the beginning of our *src/index.js* the following line:

    import "./styles.css";

They tell us the following points:


- Separate a file *data-business.js* with the functionality of communication with your API.
- We can use *fetch* or *axios* to make the data requests.
- We can deliver the application in a *.zip* or make a fork of an initial *CodeSandbox* that they pass us with the content of the previous files: [breaking-bad-characters - CodeSandbox](https://codesandbox.io/s/breaking-bad-characters-h0mtk)


In addition:


- In a **mandatory** way so that they can evaluate our work, we will have to deliver the application with the list of characters.
- As **extra**, we will have to make work the click in each character to show the detail of it.
- And they propose a couple of challenges!
    -- Use another of your API endpoints to retrieve and display more data, such as a list of episodes or famous phrases of each character to show in detail.
    -- Make another similar application, but using the API of the **Rick and Morty** series. Here they leave us their documentation: [The Rick and Morty API](https://rickandmortyapi.com/)




  

