<script>
    import { fly } from "svelte/transition";

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

    const toRad = (x) =>{
        return (x*Math.PI) / 180;
    }

    const toDeg = (x) =>{
        return (x*180) / Math.PI;
    }

    const factorial = (x) =>{
        var y=1;
        for (var i = x; i>0; i--){
            y *= i;
        }
        return y;
    }
</script>

<div in:fly={{delay: 100, duration: 300, y: -20, }} out:fly={{delay: 100, duration:100, y:10,}} class="container">
    <div class="display-container">
        <div class="display" >
            <h1>
                {#if equals == true}
                    {displayer.replaceAll("*", "x").replaceAll("/", "÷").replaceAll("%", "mod").replaceAll(String(Math.PI), "π")}
                {/if}                
            </h1>
        </div>
        <div class="display">
            <h1>
                {#if equals == false}
                    {displayer.replaceAll("*", "x").replaceAll("/", "÷").replaceAll("%", "mod").replaceAll(String(Math.PI), "π")}
                {:else}
                    {evaluation}   
                {/if}
            </h1>
        </div>
    </div>

    <div class="buttons">
        <button on:click={(event) => {displayer = (String(factorial(eval(displayer)))); equals = false}}>n!</button>
        <button on:click={(event) => {displayer = displayer.concat(String(Math.PI)); equals = false}}>π</button>
        <button on:click={(event) => {displayer = String(Math.E); equals = false}}>e</button>
        <button on:click={() => {displayer = ""; evaluation = "";}}>C</button>
        <button on:click={() => {displayer = displayer.slice(0, displayer.length-1)}}>⌫</button>

        <button on:click={(event) => {displayer = (String(eval(displayer)**2)); equals = false}}>x²</button>
        <button on:click={(event) => {reciprocal_(); equals = false}}>1/x</button>
        <button on:click={(event) => {displayer = displayer.concat("("); equals = false}}>(</button>
        <button on:click={() => {displayer = displayer.concat(")"); equals = false}}>)</button>
        <button on:click={(event) => {displayer = displayer.concat("%"); equals = false}}>mod</button>

        <button on:click={(event) => {displayer = (String(eval(displayer)**3)); equals = false}}>x³</button>
        <button on:click={(event) => {displayer = (String(Math.sin(toRad(eval(displayer))).toFixed(4))); equals = false}}>sinθ</button>
        <button on:click={(event) => {displayer = (String(Math.cos(toRad(eval(displayer))).toFixed(4))); equals = false}}>cosθ</button>
        <button on:click={(event) => {displayer = (String(Math.tan(toRad(eval(displayer))).toFixed(4))); equals = false}}>tanθ</button>
        <button on:click={(event) => {displayer = (String(Math.log(eval(displayer)))); equals = false}}>log</button>
        
        <button on:click={(event) => {displayer = (String(Math.cbrt(eval(displayer)))); equals = false}}>³√x</button>
        <button on:click={(event) => {displayer = (String(toDeg(Math.asin(eval(displayer))))); equals = false}}>sinθ⁻¹</button>
        <button on:click={(event) => {displayer = (String(toDeg(Math.acos(eval(displayer))))); equals = false}}>cosθ⁻¹</button>
        <button on:click={(event) => {displayer = (String(toDeg(Math.atan(eval(displayer))))); equals = false}}>tanθ⁻¹</button>
        <button on:click={(event) => {displayer = displayer.concat("/"); equals = false;}}>/</button>
        
        <button on:click={(event) => {displayer = (String(Math.sqrt(eval(displayer)))); equals = false}}>²√x</button> 
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>7</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>8</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>9</button>
        <button on:click={(event) => {displayer = displayer.concat("*"); equals = false;}}>x</button>
        
        <button on:click={(event) => {displayer = (String(toRad(eval(displayer)))); equals = false}}>rad</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>4</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>5</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>6</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>-</button>
        
        <button on:click={(event) => {displayer = (String(toDeg(eval(displayer)))); equals = false}}>deg</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>1</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>2</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>3</button>
        <button on:click={(event) => {displayer = displayer.concat(event.target.innerHTML); equals = false}}>+</button>
        
        <button on:click={() => {displayer = displayer.concat(String((Math.random()*1000).toFixed(2))); equals = true}}>rand</button>
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
    }

    h1{
        color: white;
        font-size: 25pt;
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
        grid-template-columns: auto auto auto auto auto;
        width: 98%;
        gap: 3px;
        margin-bottom: 5px;
        min-height: 250px;
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
        min-height: 20px;
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