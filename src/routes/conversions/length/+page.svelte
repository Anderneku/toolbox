<script>
    import {from_centimeter, from_millimeter, from_decimeter, from_meter, from_kilometer, from_inch, from_foot, from_mile, from_micron} from "./convert_dict";
    import { fly } from "svelte/transition";
    
    var displayer = "0";
    var equals;

    var chosen_1;
    var chosen_2;
    var converted = 0;
    var zero = true;

    var square = false;
    var cube = false;

    var disable_square = false;
    var disable_cube = false;
    
    const convert = () =>{
      if (chosen_1 == "Centimeter"){
        for (let item in from_centimeter) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_centimeter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_centimeter[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_centimeter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_centimeter[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_centimeter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_centimeter[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_centimeter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_centimeter[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_centimeter[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Millimeter"){
          for (let item in from_millimeter) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_millimeter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_millimeter[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_millimeter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_millimeter[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_millimeter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_millimeter[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_millimeter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_millimeter[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_millimeter[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Decimeter"){
          for (let item in from_decimeter) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_decimeter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_decimeter[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_decimeter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_decimeter[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_decimeter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_decimeter[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_decimeter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_decimeter[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_decimeter[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Meter"){
          for (let item in from_meter) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_meter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_meter[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_meter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_meter[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_meter[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_meter[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_meter[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_meter[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_meter[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Kilometer"){
          for (let item in from_kilometer) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_kilometer[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_kilometer[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_kilometer[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_kilometer[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_kilometer[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_kilometer[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_kilometer[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_kilometer[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_kilometer[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Inch"){
          for (let item in from_inch) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_inch[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_inch[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_inch[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_inch[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                console.log("something");
                disable_square = true;
                if (displayer.concat(from_inch[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_inch[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_inch[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_inch[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_inch[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Foot"){
          for (let item in from_foot) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_foot[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_foot[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_foot[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_foot[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_foot[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_foot[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_foot[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_foot[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_foot[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Mile"){
          for (let item in from_mile) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_mile[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_mile[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_mile[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_mile[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_mile[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_mile[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_mile[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_mile[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_mile[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        } else if (chosen_1 == "Micron"){
          for (let item in from_micron) {
          if (item == chosen_2){
              if (square == true){
                disable_cube = true;
                if (displayer.concat(from_micron[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_micron[item]).split("*");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" * ").concat(squared));
                } else if (displayer.concat(from_micron[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_micron[item]).split("/");
                    var squared = "(".concat(splitter[1].concat(") ** 2"));
                    converted = eval(displayer.concat(" / ").concat(squared));
                }
              } else if (cube == true){
                disable_square = true;
                if (displayer.concat(from_micron[item]).includes("*"))
                {
                    var splitter = displayer.concat(from_micron[item]).split("*");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" * ").concat(cubed));
                } else if (displayer.concat(from_micron[item]).includes("/"))
                {
                    var splitter = displayer.concat(from_micron[item]).split("/");
                    var cubed = "(".concat(splitter[1].concat(") ** 3"));
                    converted = eval(displayer.concat(" / ").concat(cubed));
                }
              } else{
                converted = eval(displayer.concat(from_micron[item]));
                disable_cube = false;
                disable_square = false;
              }
            } 
          }
        }
      } 

</script>

<div in:fly={{delay: 100, duration: 300, y: -20, }} out:fly={{delay: 100, duration:100, y:10,}} class="container">
  <div class="display-container">

    <div class="settings">
      <div class="square">
          <label for="square" style="color: white;">Square</label>
          <input disabled={disable_square}  bind:checked={square} on:change={(event) => {convert();}} type="checkbox" name="square" id="" />
      </div>
      <div class="square">
          <label for="cube" style="color: white;">Cube</label>
          <input disabled={disable_cube}  bind:checked={cube} on:change={(event) => {convert();}} type="checkbox" name="cube" id="" />
      </div>
      <button class="swap" on:click={() => {var temp = chosen_1; chosen_1 = chosen_2; chosen_2 = temp; convert();}}>Swap ⇄</button>
    </div>
    
    <div style="display: flex; flex-direction: column; width: 100%;" class="displayers">
        <div class="display">
          <h1>{displayer}</h1>
        </div>
        
        <div class="display">
          <select
            on:change={(event) => {
              chosen_1 = event.target.value;
              convert();
            }}
            name="conversions"
            bind:value={chosen_1}
          >
            {#each Object.entries(from_centimeter) as [key, value]}
              <option value={key}>{key}</option>
            {/each}
          </select>
        </div>
    
        <div class="display">
          <h1>{converted}</h1>
        </div>
        <div class="display">
          <select
            on:change={(event) => {
              chosen_2 = event.target.value;
              convert();
            }}
            name="conversions"
            bind:value={chosen_2}
          >
            {#each Object.entries(from_centimeter) as [key, _]}
              <option value={key}>{key}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>

  <div class="buttons">
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>7</button
    >
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>8</button
    >
    <button
      on:click={() => {
        displayer = "0";
        converted = 0;
        zero = true;
        convert();
      }}>⌫</button
    >

    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>9</button
    >
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>4</button
    >
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>5</button
    >

    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>6</button
    >
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>1</button
    >
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>2</button
    >

    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>3</button
    >
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>0</button
    >
    <button
      on:click={(event) => {
        if (zero == false) {
          displayer = displayer.concat(event.target.innerHTML);
        } else {
          displayer = event.target.innerHTML;
        }
        zero = false;
        convert();
      }}>.</button
    >
  </div>
</div>

<style>
  .container {
    width: 100vw;
    height: 100vh;
    background: #202222;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .settings{
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 20px;
    justify-content: center;
  }

  .square{
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    gap: 20px; 
    width: 100%;
  }

  .square:nth-child(2){
    gap: 40px;
  }

  .square label{
    font-size: 18pt;
  }

  .square input{
    cursor: pointer;
    width: 20px;
    height: 20px;
  }

  select {
    color: white;
    background: #202222;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18pt;
    width: 150px;
  }

  option {
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    background: #202222;
  }

  .display-container {
    width: 95vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
  }

  .display {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
  }

  h1 {
    color: white;
    font-size: 30pt;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    height: auto;
    max-width: 10000px;
    min-height: 60px;
    min-width: 80px;
    max-height: 10000px;
  }

  .buttons {
    z-index: 10;
    display: grid;
    grid-template-columns: auto auto auto;
    width: 98%;
    gap: 3px;
    margin-bottom: 5px;
    min-height: 300px;
    max-height: 100vh;
    height: auto;
  }

  @media only screen and (min-height: 638px) {
    .buttons {
      height: 60vh;
    }
  }

  button {
    font-size: 20pt;
    width: auto;
    height: auto;
    min-height: 40px;
    cursor: pointer;
    border-radius: 5px;
    max-width: 10000px;
    max-height: 100vh;
    min-width: 50px;
    color: white;
    background: #323232;
    outline: none;
    border: none;
  }

  button:hover {
    background: #424242;
  }

  .swap{
    background: rgb(26, 191, 97);
  }
  .swap:hover{
    background: #424242;
  }
</style>
