<script>
    import {from_celsius, from_farenheit, from_rankine, from_kelvin} from "./convert_dict";
    import { fly } from "svelte/transition";
    
    var displayer = "0";
    var equals;

    var chosen_1;
    var chosen_2;
    var converted = 0;
    var zero = true;
    
    const convert = () =>{
      if (chosen_1 == "Celsius"){
        for (let item in from_celsius) {
          if (item == chosen_2){
                converted = eval("(".concat(displayer.concat(from_celsius[item])))
            } 
          }
        }else if (chosen_1 == "Farenheit"){
            for (let item in from_farenheit) {
              if (item == chosen_2){
                converted = eval("(".concat(displayer.concat(from_farenheit[item])))
                } 
            }
        } else if (chosen_1 == "Kelvin"){
            for (let item in from_kelvin) {
              if (item == chosen_2){
                converted = eval("(".concat(displayer.concat(from_kelvin[item])))
                } 
            }
        } else if (chosen_1 == "Rankine"){
            for (let item in from_rankine) {
              if (item == chosen_2){
                converted = eval("(".concat(displayer.concat(from_rankine[item])))
                } 
            }
        }
    } 

</script>

<div in:fly={{delay: 100, duration: 300, y: -20, }} out:fly={{delay: 100, duration:100, y:10,}} class="container">
  <div class="display-container">

    <div class="settings">
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
            {#each Object.entries(from_celsius) as [key, value]}
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
            {#each Object.entries(from_celsius) as [key, _]}
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
    justify-content: center;
  }

  select {
    color: white;
    background: #202222;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 18pt;
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
