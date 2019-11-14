
    //testNameArray
    var playerNames  = [ "test1",  "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10" ];
    var playerScores  = [ 25, 3, 20, 40, 99, 54, 63, 5, 78, 15 ]; 
    
    var currentPlayer = "YOU";
    var currentScore = 50;
    
    playerNames.push(currentPlayer); 
    playerScores.push(currentScore);
    
    let players = playerNames.map(function (currElement, i) { //(val of curr element, index of curr element)
        return {name: currElement, score: playerScores[i]}; //return an object with keys/values to array
    }).sort((a, b) => (a.score < b.score) ? 1 : -1); //sort array objects by score
    

    //-------------------
    console.log(players);
    // https://trans4mind.com/personal_development/JavaScript2/createSelectDynamically.htm?

    // https://www.google.com/search?q=dynamically+create+a+form+with+javascript&rlz=1C1CHBF_enIE863IE863&oq=dynamically+create+a+form&aqs=chrome.0.0j69i57j0l3j69i60.15123j1j4&sourceid=chrome&ie=UTF-8
            
    //------------------
    
    for (let i=0, j=players.length; i<j; i++){

        let player = null; //player div ref
        
        if (players[i].name == currentPlayer){ //if current player:

            player = makeElement("div", "current-player"); //create a 'current-player' div

            //form:
            let phpForm = makeElement("form", "php-form"); //create html form
            phpForm.method = "post"; //++++++++++++++++++++++++++++++++++++++++++++MIGHT HAVE TO BE IN CAPS!!
            phpForm.action = "testPHP.php"; // ++++++++++++++CHANGE THIS!!

            //save button:
            let saveBtn = makeElement("input", "save-button"); //create save button
            saveBtn.type = "button"; //= "submit"; //+++++++MIGHT NEED TO BE SUBMIT
            saveBtn.value = "yo";
            ///phpForm.appendChild(saveBtn); //add button to form
            
            //------------------------------------
            let saveBtnContainer = makeElement("div", "save-button-container"); 
            saveBtnContainer.appendChild(saveBtn); //add button to container
            phpForm.appendChild(saveBtnContainer); //add container to form
            //------------------------------------
           

            //input field:
            let nameInput = makeElement("input", "name-input"); //create input field
            nameInput.type = "text"; //type text
            nameInput.placeholder = "Enter name"; //placeholder text
            //////////phpForm.appendChild(nameInput); //add input field to form

            //score:
            let playerScore = makeElement("div", "current-player-score");  //create a 'current-player-score' div
            playerScore.appendChild(document.createTextNode(players[i].score)); //add object's score value to div ++++++++++++++
            //////////phpForm.appendChild(playerScore); //add playerScore div to form

            //------------------------------------
            let phpDataContainer = makeElement("div", "php-data-container"); //create container for post data
            phpDataContainer.appendChild(nameInput); //add input field to container
            phpDataContainer.appendChild(playerScore); //add player score
            phpForm.appendChild(phpDataContainer); //add container to php form
            //------------------------------------
        
            player.appendChild(phpForm); //add form to player div


            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            /*
                if((players[i].score > lowestScore) && (players[i].score > prevScore)){ //if score elegable for save: 
                
                
                    
                    let testDivContainer = makeElement("div", "testDivContainer"); 

                    let testBtn = makeElement("button", "test-Btn");
                    testBtn.innerHTML = "yo dawg!";
                    testDivContainer.appendChild(testBtn); 
                    playerContainer.appendChild(testDivContainer); 


                
                    let nameForm = makeElement("form", "name-form"); //create html form
                    let nameInput = makeElement("input", "name-input"); //create input field
                    nameInput.type = "text"; //type text
                    nameInput.placeholder = "Enter name"; //placeholder text
                    nameForm.appendChild(nameInput); //add input field to form

                    playerName.appendChild(nameForm); //to nameForm for entering of name
                    


                
                }else{ //score not elegabile for save:
                    playerName.appendChild(document.createTextNode("YOU")); //+++++++++++++REPLACE THIS 'YOU' :P 
                }    

                */
                //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                
        }else{ //a former player:
            player = makeElement("div", "former-player"); //create former-player div

            let playerName = makeElement("div", "former-player-name"); // create 'player-name' div
            playerName.appendChild(document.createTextNode(players[i].name)); //add object's name value to div
            player.appendChild(playerName); //add playerName div to player

            let playerScore = makeElement("div", "former-player-score");  //create 'current-player-score' div
            playerScore.appendChild(document.createTextNode(players[i].score)); //add object's score value to div
            player.appendChild(playerScore); //add playerScore div to player
        }

        document.getElementById("players-container").appendChild(player); //add 'player' div to 'players-container' div
    }
    
    
    //make a html element with classname:
    function makeElement(type, className){ 
        let element = document.createElement(type); //create element
        element.className = className; //give classname
        return element;
    }


    
    testBtn.onclick = function() {
        console.log("yo");
       let test = document.getElementById("tooltiptext");
        test.style.opacity = 0;
    }
    

