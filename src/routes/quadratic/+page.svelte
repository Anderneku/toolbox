<script>
    import { fly } from "svelte/transition";

    var coefficient_a;
    var coefficient_b;
    var coefficient_c;
    
    var ans = "Enter the values";

    const solve_quadratic = () =>{
        var solution1;
        var solution2;

        solution1 = (-coefficient_b + (Math.sqrt((coefficient_b**2) - 4 * (coefficient_a * coefficient_c)))) / (2 * coefficient_a);
        solution2 = (-coefficient_b - (Math.sqrt((coefficient_b**2) - 4 * (coefficient_a * coefficient_c)))) / (2 * coefficient_a);

        ans = `x=${solution1.toFixed(3)} or x=${solution2.toFixed(4)}`;
    }
</script>

<div in:fly={{delay: 100, duration: 300, y: -20, }} out:fly={{delay: 100, duration:100, y:10,}} class="container">
        <div class="display" >
            <h1>
                {ans}
            </h1>
        </div>
        <div class="content">
            <div class="content-item">
                <h2>Coefficient a</h2>
                <input type="number" placeholder="a" bind:value={coefficient_a}/>
            </div>
            <div class="content-item">
                <h2>Coefficient b</h2>
                <input type="number" placeholder="b" bind:value={coefficient_b}/>
            </div>
            <div class="content-item">
                <h2>Coefficient c</h2>
                <input type="number" placeholder="c" bind:value={coefficient_c}/>
            </div>
            <button class="submit" on:click={solve_quadratic}>Solve</button>
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

    .display{
        display: flex;
        height: 50vh;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50vh;
        gap: 20px;
        width: 100%;
    }

    .content-item{
        display: flex;
        gap: 20px;
    }

    h1, h2{
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

    input{
        border-radius: 5px;
        font-size: 20pt;
        width: 90px;
        text-align: center;
        border: none;
        outline: none;
    }
    
    .submit{
        font-size: 20pt;
        width: 100px;
        height: 50px;
        min-height: 20px;
        cursor: pointer;
        border-radius: 5px;
        color: white;
        outline: none;
        border: none;
        background: rgb(26, 191, 97);
    }

    button{
        font-size: 20pt;
        width: 60px;
        min-height: 20px;
        cursor: pointer;
        border-radius: 5px;
        color: white;
        background: #323232;
        outline: none;
        border: none;
    }

    button:hover{
        background: #424242;
    }
</style>