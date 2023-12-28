<script>
    import { fly } from "svelte/transition";
    let refresh = ``;

    $: displayer = "";
    var second;
    $: evaluation = 0;
    $: equals = false;
    var positive = true;
    var reciprocal = false;
    const solve = () => {
        try {
            evaluation = eval(displayer);
        } catch (error) {
            console.log(error);
        }
    }

    const switchSign = () => {
        if (positive == true)
        {
            displayer = "-".concat(displayer);
            positive = false;
        } else{
            displayer = displayer.replace("-", "");
            positive = true
        }
    }

    const reciprocal_ = () => {
        if (reciprocal == true)
        {
            displayer = (String(1 / eval(displayer)));
            reciprocal = false;
        } else{
            displayer = (String(1 / eval(displayer)));
            reciprocal = true
        }
    }
</script>

<div in:fly={{delay: 100, duration: 300, y: -20, }} out:fly={{delay: 100, duration:100, y:10,}} class="container">
    <div class="display-container">
        <div class="display" >
            {#if equals == true}
                <h1>{displayer.replaceAll("*", "x").replaceAll("/", "÷")}</h1>
            {/if}
        </div>
        <div class="display">
            {#if equals == false}
                <h1>{displayer.replaceAll("*", "x").replaceAll("/", "÷")}</h1>
            {:else}
                <h1>{evaluation}</h1>      
            {/if}
        </div>
    </div>

<div class="buttons">
        <button on:click={(event) => {displayer = (String(Math.cbrt(eval(displayer)))); equals = false}}>³√x</button>
        <button on:click={(event) => {displayer = (String(eval(displayer)**3)); equals = false}}>x³</button>
        <button on:click={() => {displayer = ""; evaluation = "";}}>C</button>
        <button on:click={() => {displayer = displayer.slice(0, displayer.length-1)}}>⌫</button>
    
        <button on:click={(event) => {reciprocal_(); equals = false}}>1/x</button>
        <button on:click={(event) => {displayer = (String(eval(displayer)**2)); equals = false}}>x²</button>
        <button on:click={(event) => {displayer = (String(Math.sqrt(eval(displayer)))); equals = false}}>²√x</button>
        <button on:click={(event) => {displayer = displayer.concat("/"); equals = false;}}>/</button>
    
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>7</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>8</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>9</button>
        <button on:click={(event) => {displayer = displayer.concat("*"); equals = false;}}>x</button>
    
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>4</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>5</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>6</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>-</button>
    
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>1</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>2</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>3</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>+</button>
        
        <button on:click={(event) => {switchSign(); equals = false}}>+/-</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>0</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>.</button>
        <button on:click={() => {solve(); equals = true}}>=</button>
    
    </div>
</div>

<style>
    .container{
        width: 100vw;
        height: 100vh;
        background: #202222;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .display-container{
        width: 95vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: auto;
    }

    .display{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
    }

    h1{
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

    
    .buttons{
        z-index: 10;
        display: grid;
        grid-template-columns: auto auto auto auto;
        width: 98%;
        gap: 3px;
        margin-bottom: 5px;
        min-height: 300px;
        max-height: 100vh;
        height: auto;
    }

    @media only screen and (min-height: 638px)
    {
        .buttons{
            height: 60vh;
        }
    }
    
    button{
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

    
    button:last-child{
        background: rgb(26, 191, 97);
    }

    button:hover{
        background: #424242;
    }

</style>