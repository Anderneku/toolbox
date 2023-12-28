<script>
    import { fly } from "svelte/transition";
    var vector_a_x;
    var vector_b_x;
    var vector_c_x;

    var vector_a_y;
    var vector_b_y;
    var vector_c_y;

    var vector_a_z;
    var vector_b_z;
    var vector_c_z;

    var three_d = false;

    var dot = false;
    
    var ans = "Enter the values";

    const dot_product = () =>{
        var x = vector_a_x * vector_b_x;
        var y = vector_a_y * vector_b_y;
        var z = three_d ? vector_a_z * vector_b_z : 0;

        var solution = three_d ? x+y+z : x+y;
        ans = `Dot Product = ${solution}`;
    }
    const magnitude = () =>{
        if (three_d)
        {
            var vecA = Math.sqrt((vector_a_x**2)+(vector_a_y**2)+(vector_a_z**2)).toFixed(4);
            var vecB = Math.sqrt((vector_b_x**2)+(vector_b_y**2)+(vector_b_z**2)).toFixed(4);
            var vecC = Math.sqrt((vector_c_x**2)+(vector_c_y**2)+(vector_c_z**2)).toFixed(4);
            ans = `Vector A = ${vecA}\nVector B = ${vecB}\nVector C = ${vecC}`;
        } else
        {
            var vecA = Math.sqrt((vector_a_x**2)+(vector_a_y**2)).toFixed(4);
            var vecB = Math.sqrt((vector_b_x**2)+(vector_b_y**2)).toFixed(4);
            var vecC = Math.sqrt((vector_c_x**2)+(vector_c_y**2)).toFixed(4);
            ans = "Vector A = " + String(vecA) + "\n" + "Vector B = " + String(vecB) + "\n" + "Vector C = " + String(vecC);
        }
    }

    const toggle_3d = () =>{
        three_d = three_d ? three_d = false : three_d = true;
    }
</script>

<div in:fly={{delay: 100, duration: 300, y: -20, }} out:fly={{delay: 100, duration:100, y:10,}} class="container">
        <div class="display" >
            <h1 style="white-space: pre-wrap;">
                {ans}
            </h1>
        </div>
        <div class="content">
            <div class="content-item">
                <h2>Vector A</h2>
                <!-- ● -->
                <input type="number" placeholder="x" bind:value={vector_a_x}/>
                <input type="number" placeholder="y" bind:value={vector_a_y}/>
                {#if three_d}
                    <input type="number" placeholder="z" bind:value={vector_a_z}/>
                {/if}
            </div>
            <div class="content-item">
                <h2>Vector B</h2>
                <input type="number" placeholder="x" bind:value={vector_b_x}/>
                <input type="number" placeholder="y" bind:value={vector_b_y}/>
                {#if three_d}
                    <input type="number" placeholder="z" bind:value={vector_b_z}/>
                {/if}
            </div>
                <div class="content-item">
                    {#if dot == false}
                        <h2>Vector C</h2>
                        <input type="number" placeholder="x" bind:value={vector_c_x}/>
                        <input type="number" placeholder="y" bind:value={vector_c_y}/>
                        {#if three_d}
                            <input type="number" placeholder="z" bind:value={vector_c_z}/>
                        {/if}
                    {/if}
                </div>
            <div class="buttons">
                <button class="submit" on:click={() => {dot = false; toggle_3d();}}>{three_d ? "2D" : "3D"}</button>
                <button class="submit" on:click={() => {dot = true; dot_product();}}>Dot</button>
                <button class="submit" on:click={() => {dot = false; magnitude();}}>|Vec|</button>
            </div>
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

    .buttons{
        display: flex;
        gap: 10px;
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